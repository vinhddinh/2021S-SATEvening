using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SATEvening.BLL.Models
{
    class UpdateAvailabilityRequestModel
    {
        public bool[,] Table { get; set; }
        public string UserName { get; set; }
    }
}
