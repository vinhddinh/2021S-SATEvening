using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;
using SATEvening.Web.Settings;

namespace SATEvening.BLL.Services
{
    public class TokenService : ITokenService
    {
        private readonly JWTOptions _jwt;

        public TokenService(IOptions<JWTOptions> jwt)
        {
            _jwt = jwt.Value;
        }

        public string GenerateToken(AppUser user)
        {
            var claims = BuildClaims(user);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwt.Key));

            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var jwt = CreateJwtSecurityToken(claims, signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        private Claim[] BuildClaims(AppUser user)
        {
            return new[]
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email)
            };
        }

        private JwtSecurityToken CreateJwtSecurityToken(Claim[] claims, SigningCredentials signingCredentials)
        {
            return new JwtSecurityToken(
                    issuer: _jwt.Issuer,
                    audience: _jwt.Issuer,
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(_jwt.LifeTimeInMinutes),
                    signingCredentials: signingCredentials
                );
        }

        public AppUser DecryptToken(JwtSecurityToken token)
        {
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token.RawData);
            var claims = jwtToken.Claims;
            var userId = claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
            var userName = claims.First(c => c.Type == ClaimTypes.Name).Value;
            var email = claims.First(c => c.Type == ClaimTypes.Email).Value;
            var user = new AppUser()
            {
                Id = userId,
                UserName = userName,
                Email = email
            };
            return user;
        }
    }
}
