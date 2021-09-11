﻿using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SATEvening.DAL.Models;

namespace SATEvening.DAL.Contexts
{
    public class IdentityDataContext : IdentityDbContext<AppUser>
    {
        public IdentityDataContext(DbContextOptions<IdentityDataContext> options) : base(options)
        {
        }
    }
}
