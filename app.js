$(document).ready(function () {
  console.log('READY!');

  $.ajax({
    data: {format:'json'},
    url:'http://jsonplaceholder.typicode.com/posts/1',
    success: function (data) {
      $('.container').append('<h1>'+data.title+'</h1>')
    }
  })
});
