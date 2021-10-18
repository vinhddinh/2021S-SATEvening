using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using SATEvening.DAL.Models;

namespace SATEvening.DAL.Contexts
{
    public class IdentityDataContext : IdentityDbContext<AppUser>
    {
        public IdentityDataContext(DbContextOptions<IdentityDataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Availability> Availabilities { get; set; }
        public DbSet<SpecificAvailability> SpecificAvailabilities { get; set; }
    }
}
