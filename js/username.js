exports.getRepos = function() {
  var name = document.getElementById('name').value;

  $.get('https://api.github.com/users/' + name + '/repos', function(data) {
    console.log(data);
    $('.repos').append('<li><img src='+ data[0].owner.avatar_url+'></li>');
    for(var i = 0; i < data.length; i++)
  {
    $('.repos').append('<h5><a href="https://github.com/'+name+'/'+data[i].name +'">'+data[i].full_name+ '</a></h5><li>Description: ' +  data[i].description +'</li>' );
  }
  });
};
