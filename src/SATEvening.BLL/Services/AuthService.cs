using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AuthService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<string> LoginAsync(User user, string password)
        {
            if (UserExists())
        }

        public async Task<string> RegisterAsync(User user, string password)
        {
            var isExistingUser = await _userManager.FindByNameAsync(user.UserName) != null;

            if (isExistingUser)
            {
                return string.Format("The username {0} already exists.", user.UserName);
            }

            var result = await _userManager.CreateAsync(user, password);

            if (!result.Succeeded)
            {
                return string.Format("User successfully registered with username {0}", user.UserName);
            }

            return string.Format("Registration Failed with the following errors {0}", result.Errors);
        }
    }
}
