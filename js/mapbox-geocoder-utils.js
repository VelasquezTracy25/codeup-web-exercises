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

mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-104.9903, 39.7392], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

// geocode("2704 W Mile 5 Rd, Mission, TX 78574", mapboxKey).then(function(data) {
//     console.log(data);
//     new mapboxgl.Marker().setLngLat(data).addTo(map);
// });

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


