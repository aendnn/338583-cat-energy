google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9387165, 30.3230474),
    styles:[{"featureType": "landscape.natural.landcover", "elementType": "all", "stylers": [{"visibility": "on"}]}, {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#548b52"}]},{"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"color": "#ffe300"}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"visibility": "on"}, {"saturation": "-8"}]}, {"featureType": "water","elementType": "all","stylers": [{"visibility": "on"}, {"saturation": "-2"}]}]
  };

  var mapElement = document.getElementById("map");
  var marker = google.maps.MarkerImage(
    "../img/map-pin.png",
    new google.maps.Size(124,106),
    new google.maps.Point(0,0),
    new google.maps.Point(62,106)
  );

  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    draggable: false,
    raiseOnDrag: false,
    position: new google.maps.LatLng(59.9387165, 30.3230474),
    icon: marker,
    map: map
  });
}
