
exports.getBikes = function () {
  console.log('hello world');
  $.get('https://bikeindex.org:443/api/v2/bikes_search?page=1').then(function(foundBike){
    console.log(foundBike.bikes[0].title);
    for (var i = 0; i < foundBike.bikes.length; i++) {
      $(".box").append('<li>' + foundBike.bikes[i].title + '</li>')
    }

  });
};
