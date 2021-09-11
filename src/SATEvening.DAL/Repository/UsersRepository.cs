using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.DAL.Models;

namespace SATEvening.DAL.Repository
{
    public class UsersRepository : IUsersRepository
    {
        public UsersRepository()
        {
        }

        public Task<IdentityResult> Create(AppUser user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> Delete(AppUser user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AppUser> GetAll()
        {
            throw new NotImplementedException();
        }

        public AppUser GetByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> Update(AppUser user)
        {
            throw new NotImplementedException();
        }
    }
}
