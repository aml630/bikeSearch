var getBikes = require('./../js/headline_bikes.js').getBikes;
var stolenZip = require('./../js/zip_search.js').stolenZip;

$(document).ready(function(){
  getBikes();
  $('#zipSearch').submit(function(event){
    event.preventDefault();
    var zipcode = $('#zipcode').val();
    stolenZip();
    
  });


});
