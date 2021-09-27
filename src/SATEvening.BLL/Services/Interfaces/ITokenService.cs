using System;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(AppUser user);
    }
}
