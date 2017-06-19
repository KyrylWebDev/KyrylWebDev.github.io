// window.onload = function() {

	console.log("document ready");


	function initMap() {
	  	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 12,
	    center: {lat: 50.336, lng: 30.88},  // борисполь.
	    mapTypeId: 'terrain'
  });
  var elevator = new google.maps.ElevationService;
  var infowindow = new google.maps.InfoWindow({map: map});

  // Add a listener for the click event. Display the elevation for the LatLng of
  // the click inside the infowindow.
  map.addListener('click', function(event) {
    displayLocationElevation(event.latLng, elevator, infowindow);
  });
}

function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
	console.log("Coordinates: " + location.lat().toFixed(3) + "lat, " + location.lng().toFixed(3) + "lng");
	document.getElementById("coord").value = (location.lat().toFixed(3) + "lat, " + location.lng().toFixed(3) + "lng" );
    if (status === 'OK') {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('The elevation at this point <br>is ' + results[0].elevation + ' meters.');
			console.log("Elevation: " + results[0].elevation.toFixed(2));
			document.getElementById("relief").value = ("Elevation: " + results[0].elevation.toFixed(1)  + "m" );
      } else {
        infowindow.setContent('No results found');
      }
    } else {
      infowindow.setContent('Elevation service failed due to: ' + status);
    }
  });

}
