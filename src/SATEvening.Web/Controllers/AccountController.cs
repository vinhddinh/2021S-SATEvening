using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SATEvening.BLL.Models;
using SATEvening.DAL.Models;
using SATEvening.Web.Models;

namespace SATEvening.Web.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserModel model)
        {
            if (ModelState.IsValid || model !=null)
            {
                var user = new User { Email = model.Email, UserName = model.UserName, FirstName = model.UserName, LastName = model.LastName };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return Ok(new { Message = "User Registration was Successful" });
                }

                return new BadRequestObjectResult(new { Message = "Registration Failed", Errors = result.Errors });
            }

            return new BadRequestObjectResult(new { Message = "Registration Failed: Invalid Input" });
        }

        public Task<IActionResult> Login(UserLoginModel loginModel)
        {
            throw new NotImplementedException();
        }
    }
}
