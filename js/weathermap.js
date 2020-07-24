$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherKey,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data){

    //Assign formatted Date to #weather-date
    var date = new Date(data.dt * 1000);
    $('#weather-date').html(date.toDateString());
    // console.log(date.toDateString());

    //Set high and low temps
    let highTemp =   data.main.temp_max;
    let lowTemp =  data.main.temp;

    $('#high-low-temp').html(lowTemp + "°F / " + highTemp + "°F");
    $('#feels-like').html(data.main.feels_like + "°F");
    $('#humidity').html(data.main.humidity + '%');

});



