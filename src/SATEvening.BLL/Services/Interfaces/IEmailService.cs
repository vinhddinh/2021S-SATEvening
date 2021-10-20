using System;
using System.Threading.Tasks;

namespace SATEvening.BLL.Services.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email);
    }
}
