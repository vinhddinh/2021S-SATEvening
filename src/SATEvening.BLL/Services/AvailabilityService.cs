using SATEvening.BLL.Services.Interfaces;
using SATEvening.BLL.Services;
using SATEvening.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SATEvening.DAL.Contexts;

namespace SATEvening.BLL.Services
{
    public class AvailabilityService : IAvailability
    {
        private readonly TimeSpan Interval = TimeSpan.Parse("00:30");
        private readonly TimeSpan BaseTime = TimeSpan.Parse("08:00");
        //time is from 8AM to 9PM with 30 minute intervals, using TimeSpan from midnight
        //day is from Monday to Friday, iirc UTS doesn't do weekend classes

        public Task UpdateAvailability(bool[,] cells)
        {
            //cells is 6x27, including the row and column used to display day of week and time of day

            bool[,] newAvailability = TrimTable(0, 0, cells); //remove the padding to get to the actual data with a 5x26 table
            bool[,] oldAvailability = new bool[26, 5];

            IdentityDataContext context = new();

            for (int t = 0; t < newAvailability.GetLength(0); t++) //iterate through time of day
            {
                for (int d = 0; d < newAvailability.GetLength(1); d++) //iterate through day of week, table starts with Monday, DayOfWeek Sunday = 0
                {
                    if (newAvailability[t, d] == true && oldAvailability[t,d] == false)
                    {
                        CreateAvailability(new AppUser(), BaseTime + TimeSpan.FromMinutes(Interval.Minutes * t), ((DayOfWeek)((d + 1) % 7)), Interval);
                    }

                    else if (newAvailability[t, d] == false && oldAvailability[t, d] == true)
                    {
                        DeleteAvailability(new AppUser(), BaseTime + TimeSpan.FromMinutes(Interval.Minutes * t), ((DayOfWeek)((d + 1) % 7)), Interval);
                    }
                }
            }

            throw new NotImplementedException();
        }

        Task DeleteAvailability(AppUser appUser, TimeSpan timeSpan, DayOfWeek dayOfWeek, TimeSpan interval)
        {
            throw new NotImplementedException();
        }

        //this returns the entire table, including cells for labels
        public Task<bool[,]> GetAvailability(AppUser User)
        {
            IdentityDataContext context = new();
            string UserID = User.Id;

            IEnumerable<Availability> userAvailabilities = (from a in context.Availabilities
                                                            where a.AppUser.Id == UserID
                                                            select a);
            bool[,] availabilityTable = new bool[26, 5];


            throw new NotImplementedException();
        }

        public Task CreateAvailability(AppUser AppUser, TimeSpan StartTime, DayOfWeek Day, TimeSpan Interval)
        {

            IdentityDataContext context = new();

            Availability availability = new()
            {
                StartTime = StartTime,
                EndTime = StartTime + Interval,
                Day = Day,
                CreatedAt = DateTime.Now,
                AppUser = AppUser
            };

            context.Availabilities.Add(availability);
            context.SaveChanges();
            
            return Task.CompletedTask;
        }

        bool[,] TableToAvailability(IEnumerable<Availability> availabilities)
        {

            throw new NotImplementedException();
        }

        static bool[,] TrimTable(int rowToRemove, int columnToRemove, bool[,] originalArray)
        {
            bool[,] result = new bool[originalArray.GetLength(0) - 1, originalArray.GetLength(1) - 1];

            for (int i = 0, j = 0; i < originalArray.GetLength(0); i++)
            {
                if (i == rowToRemove)
                    continue;

                for (int k = 0, u = 0; k < originalArray.GetLength(1); k++)
                {
                    if (k == columnToRemove)
                        continue;

                    result[j, u] = originalArray[i, k];
                    u++;
                }
                j++;
            }

            return result;
        }
    }
}
