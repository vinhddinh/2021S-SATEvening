using SATEvening.BLL.Models;
using SATEvening.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SATEvening.BLL.Services.Interfaces
{
    public interface IAvailabilityService
    {
        Task UpdateAvailability(UpdateAvailabilityRequestModel model);

        Task<GetAvailabilityResponseModel> GetAvailabilityByUserID(string UserID);
    }
}
