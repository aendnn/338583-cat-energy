function initMap() {
  var element = document.getElementById("map");
  var options = {
    zoom: 20,
    center: {lat: 59.9384333, lng: 30.3233235}
  };

  var myMap = new google.maps.Map(element, options);
  var marker = new google.maps.Marker({
    position: {lat: 59.9384333, lng: 30.3233235},
    map: myMap,
    icon: "../img/map-pin.png"
  });

  var InfoWindow = new google.maps.InfoWindow({
    content: "<p>ул. Большая Конюшенная, д. 19/8</p>"
  });

  marker.addListener("click", function(){
    InfoWindow.open(myMap, marker);
  });
}
