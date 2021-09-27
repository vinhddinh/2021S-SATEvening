using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.BLL.Models;

namespace SATEvening.BLL.Services.Interfaces
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(User user, string password);
        Task<string> LoginAsync(User user, string password);
    }
}
