using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SATEvening.BLL.Models;

namespace SATEvening.BLL.Services
{
    public class UsersService : IUsersService
    {
        public UsersService()
        {
        }

        public Task<SignInResult> Authenticate(User user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> Create(User user, string password)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> Delete(User user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
