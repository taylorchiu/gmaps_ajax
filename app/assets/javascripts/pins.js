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

// get the Json data 
      var pins = [];
    $.ajax("/pins.json", {type: 'get'}).success(function(data){
        pins = data['pin']
        for (var i in pins) {
          var lat = pins[i]['lat'];
          var lng = pins[i]['long'];
          addPin(lat, lng);
      }
    });


  addPin = function(lat, lng) {
    var loc = new google.maps.LatLng(lat, lng);
    var newMarker = new google.maps.Marker({
      position: loc,
      map: map
    });
  };
    addPin()


  // google.maps.event.addListener(map, 'click', function(event) {
  //   // AJAx POST METHOD GOES HERE
  // });


};

google.maps.event.addDomListener(window, 'load', initialize);

