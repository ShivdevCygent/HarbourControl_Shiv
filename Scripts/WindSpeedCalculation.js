$(document).ready(function () {
    WeatherMapAPIWinSpeed()
});

var harbourWindSpeed;
function WeatherMapAPIWinSpeed() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.openweathermap.org/data/2.5/weather?q=Durban,ZA&APPID=00448fd92b992dd8aed304eaadf5aa53",
        "method": "GET"
    }
    $.ajax(settings).done(function (response) {
        harbourWindSpeed = response.wind.speed;
        $("#WindSpeedDisplay").text("Wind Speed at Durban Harbour is " + harbourWindSpeed + " KM/Hr.");
    });
}

var journeyCompletionProgress = 0;
var a = 0;
function UpdateDistanceTravelled() {
    //var currentSpeedofWind = Math.floor(Math.random() * 50) + 1;

    if ($(".boatJourneyStart_" + a).html() == "") {
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
    }

    if ((harbourWindSpeed >= 10 || harbourWindSpeed <= 30)) {

        if (journeyCompletionProgress <= 100) {
            journeyCompletionProgress = journeyCompletionProgress + 10;
            $(".boatTravel_" + a).val(journeyCompletionProgress);
        }
        if (journeyCompletionProgress == 100) {
            a++;
            journeyCompletionProgress = 0;
        }
        var journeyEndDate = new Date();

        var year2 = journeyEndDate.getFullYear()
        var month2 = journeyEndDate.getMonth() + 1;
        var day2 = journeyEndDate.getDate();
        var hours2 = journeyEndDate.getHours();
        var minutes2 = journeyEndDate.getMinutes();
        var seconds2 = journeyEndDate.getSeconds();

        var journeyEndTime = year2 + '/' +
            (month2 < 10 ? '0' : '') + month2 + '/' +
            (day2 < 10 ? '0' : '') + day2 + ' ' + hours2 + ':' + minutes2 + ":" + seconds2;

        $(".boatJourneyEnd_" + a).text(journeyEndTime);
    }
    else if ((harbourWindSpeed < 10 || harbourWindSpeed > 30) && ($(".boatType_" + a).html() == "Sail Boat")) {
        a++;

    }
}
setInterval(() => {
    UpdateDistanceTravelled();
}, 1000);