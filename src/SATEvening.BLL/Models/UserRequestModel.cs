using System;
using System.ComponentModel.DataAnnotations;
using SATEvening.DAL.Models;

namespace SATEvening.BLL.Models
{
    public class UserRequestModel : AppUser
    {
        [Required]
        public string Password { get; set; }
    }
}
