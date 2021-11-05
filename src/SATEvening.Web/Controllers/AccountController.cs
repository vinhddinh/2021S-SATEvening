using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SATEvening.BLL.Exceptions;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;

namespace SATEvening.Web.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IAuthService _authService;

        public AccountController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserRequestModel model)
        {
            if (!ModelState.IsValid || model == null)
            {
                return new BadRequestObjectResult(new { Message = "Registration Failed: Invalid Input" });
            }

            try
            {
                return Ok(await _authService.RegisterAsync(model));
            }
            catch (AlreadyExistsException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
            catch (BadRequestException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestModel model)
        {
            if (!ModelState.IsValid || model == null)
            {
                return new BadRequestObjectResult(new { Message = "Login Failed: Invalid Input" });
            }

            try
            {
                return Ok(await _authService.LoginAsync(model));
            }
            catch (NotFoundException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
            catch (BadRequestException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
        }

        [HttpGet]
        [Route("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return new BadRequestObjectResult(new { Message = "User or Code was null" });
            }

            try
            {
                await _authService.ConfirmEmail(userId, code);

                return Redirect("/verified-email");
            }
            catch (InvalidOperationException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
            catch (BadRequestException ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message });
            }
        }
    }
}
