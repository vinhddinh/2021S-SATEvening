using System;
using System.ComponentModel.DataAnnotations;

namespace SATEvening.BLL.Models
{
    public class UserResponseModel
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
    }
}
