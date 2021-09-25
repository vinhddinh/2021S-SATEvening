﻿using System;
using System.ComponentModel.DataAnnotations;

namespace SATEvening.Web.Models
{
    public class UserLoginModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
