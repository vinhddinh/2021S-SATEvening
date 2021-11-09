using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace SATEvening.DAL.Models
{
    public class AppUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        // users don't have usernames, they login or registrate with their email address
        // Asp Identity by default uses Username for verification
        // this is the simplest way to ensure that the user's email is used instead
        public override string UserName
        {
            get => Email;
        }
    }
}
