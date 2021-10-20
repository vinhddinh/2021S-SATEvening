using SATEvening.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SATEvening.BLL.Services.Interfaces
{
    public interface IAvailability
    {
        Task UpdateAvailability(bool[,] table);

        Task<bool[,]> GetAvailability(AppUser user);
    }
}
