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
            var existingUser = FindUserByName(user.UserName);

            if (existingUser == null)
            {
                return string.Format("Login Failed: Username {0} could not be found", user.UserName);
            }

            var result = await _signInManager.PasswordSignInAsync(user, password, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return "User Login was Successful";
            }

            return "Login Failed: The password was invalid";
        }

        public async Task<string> RegisterAsync(User user, string password)
        {
            var isExistingUser = await FindUserByName(user.UserName) != null;

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

        private async Task<AppUser> FindUserByName(string username)
        {
            return await _userManager.FindByNameAsync(username);
        }
    }
}
