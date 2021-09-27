using System;
using System.ComponentModel.DataAnnotations;

namespace SATEvening.BLL.Models
{
    public class LoginRequestModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
