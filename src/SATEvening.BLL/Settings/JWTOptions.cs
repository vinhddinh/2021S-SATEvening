using System;
namespace SATEvening.Web.Settings
{
    public class JWTOptions
    {
        public const string JWT = "JWT";
        public string Key { get; set; }
        public string Issuer { get; set; }
        public double LifeTimeInMinutes { get; set; }
    }
}
