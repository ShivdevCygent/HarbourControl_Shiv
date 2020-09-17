$(document).ready(function () {
    WeatherMapAPIWinSpeed();
    //CurrentWindSpeed();
});

function WeatherMapAPIWinSpeed() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Durban%252CSouth%20Africa",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "de38545f84msh0ec9d837e577be1p19ba44jsn80b6bd5e5319"
            //"x-rapidapi-key": "f33927c68dmsh333db3787cda256p1583abjsn5fa7465f2834"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}


function CurrentWindSpeed() {
    var currentSpeed = Math.floor(Math.random() * 50) + 1;
    $("#WindSpeedDisplay").text("Wind Speed at Durban Harbour is " + currentSpeed + " KM/Hr.");
    setInterval(() => { CurrentWindSpeed() }, 6000000);
}


var journeyCompletionProgress = 0;
var a = 0;
function UpdateDistanceTravelled() {
    var currentSpeedofWind = Math.floor(Math.random() * 50) + 1;

    if ($(".boatJourneyStart_" + a).val() == "") {

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

    if ((currentSpeedofWind >= 10 || currentSpeedofWind <= 30) && ($(".boatType_" + a).val() != "Sail Boat")) {
        if (journeyCompletionProgress <= 100) {
            journeyCompletionProgress = journeyCompletionProgress + 10;
            $(".boatTravel_" + a).val(journeyCompletionProgress);
        }
        if (journeyCompletionProgress == 100) {
            a++;
            journeyCompletionProgress = 0;
            //return progress;
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
    else if ((currentSpeedofWind < 10 || currentSpeedofWind > 30) && ($(".boatType" + a).val == "Sail Boat")) {
        a++;
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