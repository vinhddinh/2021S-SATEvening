using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.BLL.Models;

namespace SATEvening.BLL.Services
{
    public interface IUsersService
    {
        IEnumerable<User> GetAll();
        User GetByEmail(string email);
        Task<SignInResult> Authenticate(User user, string password);
        Task<IdentityResult> Create(User user, string password);
    }
}
