$(document).ready(function () {
  console.log('READY!');

  $.ajax({
    data: {format:'json'},
    url:'http://jsonplaceholder.typicode.com/posts/1',
    success: function (data) {
      $('.container').append('<p>'+data.title+'</p>')
    }
  });

  $.ajax({
    data: {format: 'json'},
    url: 'http://jsonip.com',
    success: function (data) {
      $('.container').append('<p>Receiving Request from IP:'+data.ip+'</p>');
    }
  });

  $.ajax({
    data: {format: 'json'},
    url: 'http://www.telize.com/geoip?callback=',
    success: function (data) {
      $('.container').append('<p>At Longitude: '+data.longitude+'</p>');
      $('.container').append('<p>At Latitude: '+data.latitude+'</p>');
    }
  });

  $.ajax({
    data: {format: 'json'},
    dataType: 'jsonp',
    url: 'http://www.flickr.com/services/feeds/photos_public.gne?tags=british%20bulldog&format=json'
  });

  jsonFlickrFeed = function(data){
    // console.log(data.items[0].media.m);
    $('body').css('background', 'url(' + data.items[0].media.m+')')
  };

  $.ajax({
    data: {format: 'json'},
    url: 'http://api.openweathermap.org/data/2.5/weather?q=dallas,tx',
    success: function (data) {
      var weather = data.weather[0].main;
      if (weather === 'Clouds' || weather === 'Cloudy') {
        $('.container').append('<p>Cloudy with a chance of furballs</p>');
      }
      else if (weather === 'Rain') {
        $('.container').append('<p>It\'s raining cats and dogs</p>');
      }
      else if (weather === 'Clear') {
        $('.container').append('<p>I need a dog pun about the sun...</p>');
      }
      else {
        $('.container').append('<p>It\'s ruff out there</p>');
      }
    }
  })
});
