using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.DAL.Models;

namespace SATEvening.DAL.Repository
{
    public interface IUsersRepository
    {
        IEnumerable<AppUser> GetAll();
        AppUser GetByEmail(string email);
        Task<IdentityResult> Create(AppUser user, string password);
        Task<IdentityResult> Update(AppUser user);
        Task<IdentityResult> Delete(AppUser user);
    }
}
