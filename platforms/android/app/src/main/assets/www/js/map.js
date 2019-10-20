let map = undefined

document.addEventListener("deviceready", function() {
    criarMapa();
}, false);

function criarMapa() {
    if (map != undefined) {
      map.remove();
    }

    var div = document.getElementById("mapa");
 
    // Initialize the map view
    map = plugin.google.maps.Map.getMap(div);

    map.animateCamera({
        target: {lat: -23.4435903, lng: -51.9173517},
        zoom: 15,
        tilt: 60,
        bearing: 140,
        duration: 5000
    });

    var circle = map.addCircle({
        'center': {lat: -23.442167, lng: -51.917778},
        'radius': 200,
        'strokeColor' : '#FF0000',
        'strokeWidth': 5,
        'fillColor' : '#880000'
    });

    var marker = map.addMarker({
        position: {lat: -23.442167, lng: -51.917778},
        title: "Fire in activity",
        snippet: "A fire is occurring at the site!",
        animation: plugin.google.maps.Animation.BOUNCE
    });

    var circle = map.addCircle({
        'center': {lat: -23.442167, lng: -51.917778},
        'radius': 500,
        'strokeColor' : '#FA8072',
        'strokeWidth': 5,
        'fillColor' : '#FA8072'
    });

    var marker = map.addMarker({
        position: {lat: -23.444251, lng: -51.918867},
        title: "Where the fire will spread!",
        icon: "#FFA500",
        animation: plugin.google.maps.Animation.BOUNCE
    });
}