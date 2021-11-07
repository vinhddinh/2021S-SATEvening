using SATEvening.BLL.Services.Interfaces;
using SATEvening.BLL.Services;
using SATEvening.DAL.Models;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SATEvening.DAL.Contexts;
using SATEvening.BLL.Models;
using Microsoft.EntityFrameworkCore;

namespace SATEvening.BLL.Services
{
    public class AvailabilityService : IAvailabilityService
    {
        private readonly IdentityDataContext _context;

        private readonly TimeSpan Interval = TimeSpan.Parse("00:30");
        private readonly TimeSpan BaseTime = TimeSpan.Parse("08:00");
        //time is from 8AM to 9PM with 30 minute intervals, using TimeSpan from midnight
        //day is from Monday to Friday, iirc UTS doesn't do weekend classes

        public AvailabilityService(IdentityDataContext context)
        {
            _context = context;
        }

        public async Task UpdateAvailability(UpdateAvailabilityRequestModel model)
        {
            bool[,] cells = new bool[27, model.AvailabilityString.Length/27];
            cells = StringToTable(model.AvailabilityString, cells);
            AppUser User = await _context.Users.FirstOrDefaultAsync(u => u.Id == model.UserId);
            List<Availability> UserAvailabilities = await _context.Availabilities.Where(ua => ua.AppUser == User).ToListAsync();
            //cells is 6x27, including the row and column used to display day of week and time of day

            bool[,] oldAvailability = await GetAvailability(User);
            bool[,] newAvailability = TrimTable(0, 0, cells); //remove the padding to get to the actual data with a 5x26 table

            for (int t = 0; t < newAvailability.GetLength(0); t++) //iterate through time of day
            {
                for (int d = 0; d < newAvailability.GetLength(1); d++) //iterate through day of week, table starts with Monday, DayOfWeek Sunday = 0
                {
                    if (newAvailability[t, d] == true && oldAvailability[t,d] == false)
                    {
                        CreateAvailability(User, BaseTime + TimeSpan.FromMinutes(Interval.Minutes * t), ((DayOfWeek)((d + 1) % 7)), Interval);
                    }

                    else if (newAvailability[t, d] == false && oldAvailability[t, d] == true)
                    {
                        DeleteAvailability(User, BaseTime + TimeSpan.FromMinutes(Interval.Minutes * t), ((DayOfWeek)((d + 1) % 7)), Interval, UserAvailabilities);
                    }
                }
            }
            await _context.SaveChangesAsync();
            return ;
        }

        //this returns the availability string for a given user
        public async Task<GetAvailabilityResponseModel> GetAvailabilityByUserID(string UserID)
        {
            AppUser User = await _context.Users.FirstOrDefaultAsync(u => u.Id == UserID);
            bool[,] table = PadTable(await GetAvailability(User));

            return new GetAvailabilityResponseModel
            {
                UserId = UserID,
                AvailabilityString = TableToString(table)
            };
        }

        async Task<bool[,]> GetAvailability(AppUser User)
        {
            var availabilities = await _context.Availabilities.Where(a => a.AppUser.Id == User.Id).ToListAsync();
            bool[,] availabilityTable = new bool[26, 5]; //this table doesn't have padding

            int t, d; //t is time index, d is day index
            foreach (Availability availability in availabilities)
            {
                //convert starttime into index in table
                t = Convert.ToInt32((availability.StartTime - BaseTime) / Interval);
                //convert day into index in table, monday should be 0, sunday should be 7
                d = (((int)availability.Day) - 1) % 8;
                availabilityTable[t, d] = true;
            }
            return availabilityTable;
        }

        void CreateAvailability(AppUser AppUser, TimeSpan StartTime, DayOfWeek Day, TimeSpan Interval)
        {
            Availability availability = new()
            {
                StartTime = StartTime,
                EndTime = StartTime + Interval,
                Day = Day,
                CreatedAt = DateTime.Now,
                AppUser = AppUser
            };

            _context.Availabilities.Add(availability);
        }

        void DeleteAvailability(AppUser AppUser, TimeSpan StartTime, DayOfWeek Day, TimeSpan Interval, List<Availability> UserAvailabilities)
        {
            Availability availability = UserAvailabilities.FirstOrDefault(a => a.StartTime == StartTime && a.EndTime == StartTime + Interval && a.Day == Day && a.AppUser.Id == AppUser.Id);
            _context.Availabilities.Remove(availability);
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

        static bool[,] PadTable(bool[,] originalTable)
        {
            int rows = originalTable.GetLength(0);
            int cols = originalTable.GetLength(1);
            bool[,] paddedTable = new bool[rows + 1, cols + 1];
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    paddedTable[i + 1, j + 1] = originalTable[i, j];
                }
            }
            return paddedTable;
        }

        static string TableToString(bool[,] table)
        {
            var result = "";
            for (var i = 0; i < table.GetLength(0); i++)
            {
                for (var j = 0; j < table.GetLength(1); j++)
                {
                    result += (table[i, j] ? '1' : '0');
                }
            }
            return result;
        }

        //Convert availabilityString ('0101111000101...') to availabilityTable ([[false, true, false, true,...],...])
        bool[,] StringToTable(string availabilityString, bool[,] table)
        {
            for (int i = 0; i < table.GetLength(0); i++)
            {
                for (int j = 0; j < table.GetLength(1); j++)
                {
                    table[i, j] = availabilityString[i * table.GetLength(1) + j] == '1';
                }
            }
            return table;
        }
    }
}
