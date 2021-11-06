using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SATEvening.BLL.Exceptions;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services.Interfaces;

namespace SATEvening.Web.Controllers
{
    [Route("api/[controller]")]
    public class AvailabilityController : Controller
    {
        private readonly IAvailabilityService _availabilityService;

        public AvailabilityController(IAvailabilityService availabilityService)
        {
            _availabilityService = availabilityService;
        }

        [HttpPost]
        [Route("get")]
        public async Task<IActionResult> GetAvailability([FromBody] GetAvailaiblityRequestModel model)
        {
            if ( !ModelState.IsValid || model == null)
            {
                return  new BadRequestObjectResult(new { Message = "Cannot Access Requested Resource" });
            }
            try
            {
                return Ok(await _availabilityService.GetAvailabilityByUserID(model.UserId));
            }
            catch (AlreadyExistsException ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
            catch (BadRequestException ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateAvailability([FromBody] UpdateAvailabilityRequestModel model)
        {
            if ( model == null)
            {
                return new BadRequestObjectResult(new { Message = "Cannot Access Requested Resource" });
            }
            try
            {
                await _availabilityService.UpdateAvailability(model);
                return Ok();
            }
            catch (AlreadyExistsException ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
            catch (BadRequestException ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

    }
}