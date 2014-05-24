$(document).ready(function() {
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(-37.4292, -122.1381),
            zoom: 2
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var loc = new google.maps.LatLng(37.7833, -122.4167);
        var newMarker = new google.maps.Marker({
            position: loc,
            map: map
        });

        // get the Json data and set it equal to variables you can use in the addPin function
        $.ajax("/pins.json", {
            type: 'get'
        }).success(function(data) {
            for (var i in data['pin']) {
                var lat = data['pin'][i]['lat'];
                var lng = data['pin'][i]['long'];
                addPin(lat, lng);
            }
        });

        // add a pin to the map using the lat and lng passed in from the seed data via ajax get request
        var addPin = function(lat, lng) {
            var loc = new google.maps.LatLng(lat, lng);
            var newMarker = new google.maps.Marker({
                position: loc,
                map: map
            });
        };


        // post lat/long when user clicks on map
        google.maps.event.addListener(map, 'click', function(event) {
            addPin(event.latLng.lat(), event.latLng.lng());
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();

            $.ajax({
                url: "/pins",
                method: "post",
                data: {
                    "pin": {
                        "lat": lat,
                        "long": lng,
                    }
                },
                dataType: "json",

                success: function(data) {
                    //alert("It's working!");
                    addPin(lat, lng);
                }
                // error: function() {
                //     alert("That didn't work...");
                // }
            });

        });


    }

    google.maps.event.addDomListener(window, 'load', initialize);

});