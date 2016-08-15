$(document).ready(function(){
  $('form#favoriteThings').submit(function(event){
    event.preventDefault();
    var array1 = [];
    array1.push($('#fruit').val());
    array1.push($('#car').val());
    array1.push($('#team').val());

    var array2 = [array1[1], array1[0], array1[2]];

    array2.push(array1[0]);
    array2.push(array1[1]);
    array2.push(array1[2]);

    $('#favoritesList').append('<li>' + array1[0] + '</li>');
    $('#favoritesList').append('<li>' + array1[1] + '</li>');
    $('#favoritesList').append('<li>' + array1[2] + '</li>');
  });
})
