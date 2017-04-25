$(document).ready(function() 

{
    var updateWeather;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

                $.getJSON('http://ip-api.com/json/http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=8ed6e0b7eeccde7ef2d68ddad4bc4659', function(json) {
                updateWeather = json;
                presentWeather();
                weatherIcon();
            });
        });
    }

    function presentWeather() {
        $("#myLocation").append(updateWeather.name);
        $("#myLocation").append(", " + updateWeather.sys.country);
        $("#myTemp").append((updateWeather.main.temp).toFixed(1) + "°C");
        $("#description").text(updateWeather.weather[0].description);
    }

    function weatherIcon() {
        var icon = updateWeather.weather[0].icon;
        $("#icon").html("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");
    }


    $("#convertCtoF").click(function() {
        var farValue = (updateWeather.main.temp * (9 / 5) + 32);
        $("#myTemp").text("Temp: " + (farValue).toFixed(1) + "°F");
    })


    $("#convertFtoC").click(function() {
        $("#myTemp").text("Temp: " + (updateWeather.main.temp).toFixed(1) + "°C");
    })

});
