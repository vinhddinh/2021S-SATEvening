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
        private readonly JWTOptions _jwt;

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IOptions<JWTOptions> jwt)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwt = jwt.Value;
        }

        public async Task<UserResponseModel> LoginAsync(LoginRequestModel login)
        {
            var existingUser = await FindUserByName(login.UserName);

            if (existingUser == null)
            {
                throw new NotFoundException(string.Format("Login Failed: Username {0} could not be found", login.UserName));
            }

            var result = await _signInManager.PasswordSignInAsync(existingUser, login.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                throw new BadRequestException("Login Failed: The username or password was invalid");
            }

            return new UserResponseModel
            {
                UserName = existingUser.UserName,
                FullName = string.Join(" ", existingUser.FirstName, existingUser.LastName),
                Email = existingUser.Email
            };
        }

        public async Task<UserResponseModel> RegisterAsync(UserRequestModel user)
        {
            var isExistingUser = await FindUserByName(user.UserName) != null;

            if (isExistingUser)
            {
                throw new AlreadyExistsException(string.Format("The username {0} already exists.", user.UserName));
            }

            var result = await _userManager.CreateAsync(user, user.Password);

            if (!result.Succeeded)
            {
                throw new BadRequestException(result.Errors.FirstOrDefault().Description);
            }

            return new UserResponseModel
            {
                UserName = user.UserName,
                FullName = string.Join(" ", user.FirstName, user.LastName),
                Email = user.Email
            };
        }

        private async Task<AppUser> FindUserByName(string username)
        {
            return await _userManager.FindByNameAsync(username);
        }

        private string GenerateToken(AppUser user)
        {
            var claims = BuildClaims(user);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key));

            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var jwt = CreateJwtSecurityToken(claims, signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        private Claim[] BuildClaims(AppUser user)
        {
            return new []
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email)
            };
        }

        private JwtSecurityToken CreateJwtSecurityToken(Claim[] claims, SigningCredentials signingCredentials)
        {
            return new JwtSecurityToken(
                    issuer: _jwt.Issuer,
                    audience: _jwt.Issuer,
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(_jwt.LifeTimeInMinutes),
                    signingCredentials: signingCredentials
                );
        }
    }
}
