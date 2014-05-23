function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 3
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var loc = new google.maps.LatLng(37.7833, -122.4167);
  var newMarker = new google.maps.Marker({
  position: loc,
  map: map
  });
  }

google.maps.event.addDomListener(window, 'load', initialize);
