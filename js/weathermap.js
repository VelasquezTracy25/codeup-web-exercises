"use strict";

(function () {
    mapboxgl.accessToken = mapboxKey;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-98.4936, 29.4241],
        zoom: 10
    });

//Adds Navigation controls and disables scroll to zoom
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

//Loads page with San Antonio forecast
    map.on("load", function () {
        geocode('San Antonio, TX');
        });


    const geocode = function (searchInfo) {
//Tests if the searchInfo parameters are in an array and joins using a comma
    if (Array.isArray(searchInfo)){
    searchInfo.join(",")
    }

// Call/Query MapBox API to obtain the response object with the necessary map information
        $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInfo}.json`, {
            access_token: mapboxKey,
            types: ["place", "address"]
        }).done(function (data) {
           var longitude = data.features[0].center[0];
           var latitude = data.features[0].center[1];
           var cityName = data.features[0].place_name;
           $('#city').html(cityName);
           forecastWeather(latitude, longitude)
// Sets Marker
               marker.setLngLat([longitude, latitude]);
               marker.addTo(map);
// Moves view with Marker
           map.flyTo({
           center: [longitude, latitude],
           zoom: 10,
           essential: true,
           })
        });
    }

//Pulls info from search input/value and create marker
    function setCityMarker() {
        const city = $('#geocoder').val();
        geocode(city);
    }

    $('#search-btn').on("click", setCityMarker)


//Draggable Marker
    var marker = new mapboxgl.Marker({
        draggable: true,
    })

    new mapboxgl.Marker({color: 'red'})

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        geocode([lngLat.lng, lngLat.lat]);
    }

    marker.on('dragend', onDragEnd);


//Today's Weather/Banner/Jumbotron
    const forecastWeather = function (latitude, longitude) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherKey,
            lat: latitude,
            lon: longitude,
            units: "imperial",
        }).done(function (data) {
            let date = new Date(data.daily[0].dt * 1000);
            let highTemp = data.daily[0].temp.max;
            let lowTemp = data.daily[0].temp.min;
            let currentTemp = data.current.temp;
            const icon = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png`
            $('.main-weather').empty();
            $('.main-weather').append(
                '<div class="bigger-text"> Weather for ' + date.toDateString() + '</div>'
                + '<ul><div id="daily-temp"><li class="mt-3">' + currentTemp.toFixed(1) + '°F</li>'
                + '<li><img src=' + icon + '></li></div>'
                + '<li>Low: ' + lowTemp.toFixed(1) + "°F / High: " + highTemp.toFixed(1) + "°F with " + data.daily[0].weather[0].description + '</li>'
                + '<li><strong>Feels Like: </strong> ' + data.daily[0].feels_like.day + "°F" + '</span></li>')
        });
//Week's Weather/Cards
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherKey,
            lat: latitude,
            lon: longitude,
            units: "imperial",
        }).done(function (data) {
            $('.daily-forecast').empty()
            for (let i = 0; i <= 4; i++) {
                let date = new Date(data.daily[i].dt * 1000);
                let highTemp = data.daily[i].temp.max;
                let lowTemp = data.daily[i].temp.min;
                const icon = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
                $('.daily-forecast').append('<div class="mr-5 card">' +
                    '<div id="weather-date" class="card-header text-center font-weight-bold">' + date.toDateString() + '</div>'
                    + '<ul class="list-group list-group-flush">'
                    + '<li class="list-group-item">' + lowTemp.toFixed(1) + "°F / " + highTemp.toFixed(1) + "°F" + '</li>'
                    + '<li class="text-center"><img src=' + icon + ' alt=""></li>'
                    + '<li class="list-group-item"><strong> Description: </strong><br>' + data.daily[i].weather[0].description + '</li>'
                    + '<li class="list-group-item"><strong> Humidity: </strong>' + data.daily[i].humidity + '%' + '</li>'
                    + '<li class="list-group-item"><strong> Wind: </strong>' + data.daily[i].wind_speed + ' mph</li>'
                    + '<li class="list-group-item"><strong> Pressure: </strong>' + data.daily[i].pressure + ' mmHg</li>'
                    + '</ul>' + '</div>'
                )
            }
        });
    }
})();