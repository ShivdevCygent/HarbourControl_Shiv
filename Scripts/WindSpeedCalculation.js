$(document).ready(function () {
    CurrentWindSpeed();
});

function CurrentWindSpeed() {
    var currentSpeed = Math.floor(Math.random() * 50) + 1;
    $("#WindSpeedDisplay").text("Wind Speed at Durban Harbour is " + currentSpeed + " KM/Hr.");
    setInterval(() => { CurrentWindSpeed() }, 6000000);
}


var journeyCompletionProgress = 0;
var initiatedJourney = 0;
function UpdateDistanceTravelled() {
    var currentSpeedofWind = Math.floor(Math.random() * 50) + 1;
    if ((currentSpeedofWind >= 10 || currentSpeedofWind <= 30) && ($(".boatType_" + a).val() != "Sail Boat")) {
        if (journeyCompletionProgress <= 100) {

            var journeyStartDate = new Date();

            var year = journeyStartDate.getFullYear()
            var month = journeyStartDate.getMonth() + 1;
            var day = journeyStartDate.getDate();
            var hours = journeyStartDate.getHours();
            var minutes = journeyStartDate.getMinutes();
            var seconds = journeyStartDate.getSeconds();

            var journeyStartTime = year + '/' +
                (month < 10 ? '0' : '') + month + '/' +
                (day < 10 ? '0' : '') + day + ' ' + hours + ':' + minutes + ":" + seconds;

            $(".boatJourneyStart_" + a).text(journeyStartTime);
            journeyCompletionProgress = journeyCompletionProgress + 10;
            $(".boatTravel_" + a).val(journeyCompletionProgress);
        }
        if (journeyCompletionProgress == 100) {
            initiatedJourney++;
            journeyCompletionProgress = 0;
            //return progress;
        }
        var journeyEndDate = new Date();

        var year2 = journeyEndDate.getFullYear()
        var month2 =    journeyEndDate.getMonth() + 1;
        var day2 =      journeyEndDate.getDate();
        var hours2 =    journeyEndDate.getHours();
        var minutes2 =  journeyEndDate.getMinutes();
        var seconds2 =  journeyEndDate.getSeconds();

        var journeyEndTime = year2 + '/' +
            (month2 < 10 ? '0' : '') + month2 + '/' +
            (day2 < 10 ? '0' : '') + day2 + ' ' + hours2 + ':' + minutes2 + ":" + seconds2;

        $(".boatJourneyEnd_" + a).text(journeyEndTime);
    }
    else if ((currentSpeedofWind < 10 || currentSpeedofWind > 30) && ($(".boatType" + a).val == "Sail Boat")) {
        initiatedJourney++;
        if (journeyCompletionProgress <= 100) {
            journeyCompletionProgress = journeyCompletionProgress + 10;
            $(".boatTravel_" + a).val(journeyCompletionProgress);
        }
        if (progress == 100) {
            a++;
            journeyCompletionProgress = 0;
        }
    }
}
setInterval(() => {
    UpdateDistanceTravelled();
}, 1000);