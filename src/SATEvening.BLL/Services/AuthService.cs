using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SATEvening.BLL.Exceptions;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;
using SATEvening.Web.Settings;

namespace SATEvening.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IEmailService _emailService;

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService,
            IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _emailService = emailService;
        }

        public async Task<UserResponseModel> LoginAsync(LoginRequestModel login)
        {
            var existingUser = await FindUserByEmail(login.Email);

            if (existingUser == null)
            {
                throw new NotFoundException(string.Format("Login Failed: Email {0} could not be found", login.Email));
            }

            var result = await _signInManager.PasswordSignInAsync(existingUser, login.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                throw new BadRequestException("Login Failed: The email or password was invalid");
            }

            return new UserResponseModel
            {
                FullName = string.Join(" ", existingUser.FirstName, existingUser.LastName),
                Email = existingUser.Email,
                Token = _tokenService.GenerateToken(existingUser)
            };
        }

        public async Task<UserResponseModel> RegisterAsync(UserRequestModel user)
        {
            var isExistingUser = await FindUserByEmail(user.Email) != null;

            if (isExistingUser)
            {
                throw new AlreadyExistsException(string.Format("The user with email {0} already exists.", user.UserName));
            }

            var result = await _userManager.CreateAsync(user, user.Password);

            if (!result.Succeeded)
            {
                throw new BadRequestException(result.Errors.FirstOrDefault().Description);
            }

            await _emailService.SendEmailAsync(user.Email);

            return new UserResponseModel
            {
                FullName = string.Join(" ", user.FirstName, user.LastName),
                Email = user.Email,
                Token = _tokenService.GenerateToken(user)
            };
        }

        private async Task<AppUser> FindUserByEmail(string email)
        {
            return await _userManager.FindByEmailAsync(email);
        }
    }
}
