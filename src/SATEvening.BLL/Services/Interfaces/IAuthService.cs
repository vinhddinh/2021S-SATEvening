using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.BLL.Models;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Services.Interfaces
{
    public interface IAuthService
    {
        Task<UserResponseModel> RegisterAsync(UserRequestModel user);
        Task<UserResponseModel> LoginAsync(LoginRequestModel user);
        Task<UserResponseModel> ConfirmEmail(string userId, string token);
    }
}
