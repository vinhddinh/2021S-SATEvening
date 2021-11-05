using System;
using System.Threading.Tasks;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Services.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(AppUser user);
    }
}
