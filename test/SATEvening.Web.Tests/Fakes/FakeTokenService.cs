using System;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;

namespace SATEvening.Web.Tests.Fakes
{
    public class FakeTokenService : ITokenService
    {
        public FakeTokenService()
        {
        }

        public string GenerateToken(AppUser user)
        {
            return "thisisthegeneratedtoken";
        }
    }
}
