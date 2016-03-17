exports.stolenZip = function(){
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&proximity=' + zipcode + '&proximity_square=100').then(function(zipBikes){
    for (var i = 0; i < zipBikes.bikes.length; i++) {
      $(".zipCodeBikes").append('<li>' + zipBikes.bikes[i].title + '</li>')
    }
  });
};
