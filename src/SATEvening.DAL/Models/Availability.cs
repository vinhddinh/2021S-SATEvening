using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SATEvening.DAL.Models
{
    public class Availability
    {
        public int Id { get; set; }
        //Using both StartTime and EndTime for maintainability
        //in case of migration to intervals of 15 minutes, 1 hour,etc..
        [Required]
        public TimeSpan StartTime { get; set; }
        [Required]
        public TimeSpan EndTime { get; set; }
        [Required]
        public DayOfWeek Day { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public AppUser AppUser { get; set; }
    }

    public class SpecificAvailability
    {
        public int Id { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public DateTime LastModifiedAt { get; set; }
        [Required]
        public AppUser AppUser { get; set; }
    }
}