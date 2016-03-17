var getBikes = require('./../js/headline_bikes.js').getBikes;
var stolenZip = require('./../js/zip_search.js').stolenZip;
var initMap = require('./../js/map.js').initMap;
var geocodeAddress = require('./../js/map.js').geocodeAddress;


$(document).ready(function(){
initMap();
  getBikes();
  $('#zipSearch').submit(function(event){
    event.preventDefault();
    var zipcode = $('#zipcode').val();
    stolenZip();
    var geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('initialMap'), {
      zoom: 14,
      center: {lat: -34.397, lng: 150.644}
    });
    geocodeAddress(geocoder, map);


  });
});
