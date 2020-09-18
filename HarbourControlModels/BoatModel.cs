using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HarbourControlModels
{
    public class BoatModel
    {
        public string Type { get; set; }
        public int Speed { get; set; }
        public int Perimeter { get; set; }
        public DateTime JourneyStartTime { get; set; }
        public DateTime JourneyEndTime { get; set; }
    }
}
