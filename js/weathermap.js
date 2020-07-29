"use strict";

(function () {
    mapboxgl.accessToken = mapboxKey;
    var coordinates = document.getElementById('coordinates');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
        center: [-98.4936, 29.4241], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

//Adds Navigation controls and disables scroll to zoom
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

//Loads page with San Antonio forecast
    map.on("load", function () {
        geocode('San Antonio, TX');
        });

    const geocode = function (searchInfo) {
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

    function setCityMarker() {
        const city = $('#geocoder').val();
        geocode(city);
    }

    $('#search-btn').on("click", setCityMarker)


    //Forward Geocoding and reverse geocoding*******

    //Draggable Marker
    var marker = new mapboxgl.Marker({
        draggable: true
    })

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        geocode([lngLat.lng, lngLat.lat]);
    }

    marker.on('dragend', onDragEnd);


//Today's Weather/Banner
    const forecastWeather = function (latitude, longitude) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherKey,
            lat: latitude,
            lon: longitude,
            units: "imperial",
        }).done(function (data) {
            // console.log(data)
            let date = new Date(data.daily[0].dt * 1000);
            let highTemp = data.daily[0].temp.max;
            let lowTemp = data.daily[0].temp.min;
            let currentTemp = data.current.temp;
            const icon = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png`
            $('.main-weather').empty();
            $('.main-weather').append(
                '<div class="bigger-text"> Weather for ' + date.toDateString() + '</div>'
                + '<ul><div id="daily-temp"><li>' + currentTemp.toFixed(1) + '°F</li>'
                + '<li><img src=' + icon + '></li></div>'
                + '<li> Low: ' + lowTemp.toFixed(1) + "°F / High: " + highTemp.toFixed(1) + "°F with " + data.daily[0].weather[0].description + '</li>'
                + '<li><strong> Feels Like: </strong> ' + data.daily[0].feels_like.day + "°F" + '</span></li>'
                + '<li id="quote"><em></em></li></ul>')
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
                    '<div id="weather-date" class="card-header text-center">' + date.toDateString() + '</div>'
                    + '<ul class="list-group list-group-flush">'
                    + '<li class="list-group-item text-center">' + lowTemp.toFixed(1) + "°F / " + highTemp.toFixed(1) + "°F" + '</li>'
                    + '<li class="text-center"><strong><img src=' + icon + ' alt=""></li>'
                    + '<li class="list-group-item text-center"><strong> Description: </strong><br>' + data.daily[i].weather[0].description + '</li>'
                    + '<li class="list-group-item text-center"><strong> Humidity: </strong>' + data.daily[i].humidity + '%' + '</li>'
                    + '<li class="list-group-item text-center"><strong> Wind: </strong>' + data.daily[i].wind_speed + ' mph</li>'
                    + '<li class="list-group-item text-center"><strong> Pressure: </strong>' + data.daily[i].pressure + ' mmHg</li>'
                    + '</ul>' + '</div>'
                )
            }
        });
    }
})();
