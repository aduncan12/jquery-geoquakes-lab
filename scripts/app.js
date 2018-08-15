// define globals
var endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
 
$.ajax({
    method: "GET",
    url: endpoint,
    success: onSuccess,
    error: onError
  });


function onSuccess(response) {
  var quakeCount = response.metadata.count
  var coordQuakeLat
  var coordQuakeLong

  for (var i = 0; i < response.features.length; i++) {
  var titleQuake  = response.features[i].properties.title
  var timeQuake = response.features[i].properties.time
  coordQuakeLat = response.features[i].geometry.coordinates[0]
  coordQuakeLong = response.features[i].geometry.coordinates[1]
  $("#info").append(`<h4> ${titleQuake} </h4> <p> Happened on: ${timeQuake} </p>
        <p>Longitude: ${coordQuakeLat} Latitude: ${coordQuakeLong}</p>`);
  }
      function initMap() {
        // The location of the centerpoint
        var quakeCenterpoint = {coordQuakeLat, coordQuakeLong};
        // The map, centered at centerpoint
        var map = new google.maps.Map(
          $('#map').append(`<img src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg">`), {zoom: 4, center: quakeCenterpoint});
        // The marker, positioned at quakeCenterpoint
        var marker = new google.maps.Marker({position: quakeCenterpoint, map: map});
      }

}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}


});
