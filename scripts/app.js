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

  for (var i = 0; i < response.features.length; i++) {
  var titleQuake  = response.features[i].properties.title
  var timeQuake = response.features[i].properties.time
  var coordQuake = response.features[i].geometry.coordinates
  $("#info").append(`<h1> ${titleQuake} </h1> <p> Happened on: ${timeQuake} </p>
        <p>Location: ${coordQuake}</p>`);


  
  // var titleFirstQuake = response.features[0].properties.title
  // var timeFirstQuake = response.features[0].properties.time
  // var coordFirstQuake = response.features[0].geometry.coordinates

// console.log(timeFirstQuake);
  }
}


function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}




});


