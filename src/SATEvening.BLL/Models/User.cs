using System;
using System.ComponentModel.DataAnnotations;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Models
{
    public class User : AppUser
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
    }
}
