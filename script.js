var some_images = new Array('images/beach.jpg', 'images/sleep.jpg', 'images/coffee.jpg');
var index = 1;

function rotateImage() {
  $('#front_image').fadeOut('slow', function() {
    $(this).attr('src', some_images[index]);
    $(this).fadeIn('slow', function() {
      if (index == some_images.length - 1) {
        index = 0;
      } else {
        index++;
      }
    });
  });
}

$(document).ready(function() {
  setInterval(rotateImage, 3000);
});
