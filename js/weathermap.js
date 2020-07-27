$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: '29.4241',
    lon: '-98.4936',
    units: "imperial",
}).done(function (data) {
    let date = new Date(data.daily[0].dt * 1000);
    let highTemp = data.daily[0].temp.max;
    let lowTemp = data.daily[0].temp.min;
    const icon = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png`
    $('.main-weather').append('<div class="a-little-bigger"> Weather for ' + date.toDateString() + '</div>'
        + '<ul><li> Low: ' + lowTemp + "°F / High: " + highTemp + "°F" + '</li>'
        + '<li><strong><img class="icon" src='+icon+' ></li>'
        + '<li><strong> Feels Like: </strong> ' + data.daily[0].feels_like.day + "°F" + '</li>'
        + '<li><strong> Description: </strong>' + data.daily[0].weather[0].description + '</li>'
        + '<li><strong> Humidity: </strong>' + data.daily[0].humidity + '%' + '</li>'
        + '<li><strong> Wind: </strong>' + data.daily[0].wind_speed + ' mph </li>'
        + '<li><strong> Pressure: </strong>' + data.daily[0].pressure + ' mmHg </li></ul>')
    console.log(data)
});

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherKey,
    lat: '29.4241',
    lon: '-98.4936',
    units: "imperial",
}).done(function (data) {
    for (let i = 1; i <= 8; i++) {
        let date = new Date(data.daily[i].dt * 1000);
        let highTemp = data.daily[i].temp.max;
        let lowTemp = data.daily[i].temp.min;
        const icon = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
        $('.daily-forecast').append('<div class="col card">' +
            '<div id="weather-date" class="card-header text-center">' + date.toDateString() + '</div>'
            + '<ul class="list-group list-group-flush">'
            + '<li class="list-group-item text-center">' + lowTemp + "°F / " + highTemp + "°F" + '</li>'
            + '<li class="text-center"><strong><img   src='+icon+' alt=""></li>'
            + '<li class="list-group-item text-center"><strong> Feels Like: </strong>' + data.daily[i].feels_like.day + "°F" + '</li>'
            + '<li class="list-group-item text-center"><strong> Description: </strong><br>' + data.daily[i].weather[0].description + '</li>'
            + '<li class="list-group-item text-center"><strong> Humidity: </strong>' + data.daily[i].humidity + '%' + '</li>'
            + '<li class="list-group-item text-center"><strong> Wind: </strong>' + data.daily[i].wind_speed + ' mph</li>'
            + '<li class="list-group-item text-center"><strong> Pressure: </strong>' + data.daily[i].pressure + ' mmHg</li>'
            + '</ul>' + '</div>'
        )}
    console.log(data)
});


"use strict";

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

mapboxgl.accessToken =  mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-104.9903, 39.7392], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

/** -- Create a popup with the name of the restaurant. */

var popup1 = new mapboxgl.Popup()
    .setHTML("<h3>Taqueria Mary</h3>" + "<p>It's ya fave taco place!</p>")

/** Make sure the info window does not display until the marker has been clicked on. */

var taqueriaMarker = new mapboxgl.Marker()
    .setLngLat([-98.350834, 26.292571])
    .setPopup(popup1)
    .addTo(map);

const restaurants = [
    {
        restaurantName: "Kimura",
        location: "San Antonio, TX",
        lat: "29.4284461",
        lon: "-98.4914926",
    },
    {
        restaurantName: "Dos Catrinas",
        location: "Punta Mita, Mexico",
        lat:"20.7806915",
        lon: "-105.5292423",
    },
    {
        restaurantName: "Cliff House",
        location: "Vancouver, BC",
        lat: "49.342908",
        lon: "-123.1153799",
    },
]

restaurants.forEach(function(restaurant) {
    var popupAll = new mapboxgl.Popup()
        .setHTML("<h3>" + restaurant.restaurantName + "</h3>" + "<p>" + restaurant.location +"</p>");
    var marker = new mapboxgl.Marker()
        .setLngLat([restaurant.lon, restaurant.lat])
        .setPopup(popupAll)
        .addTo(map);

});

