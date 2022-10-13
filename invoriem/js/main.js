$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48
    }) ;
  });

  const videoBtn = document.querySelector('#video-btn');
  const videoPicture = document.querySelector('#video-picture');

  videoBtn.addEventListener('click', function() {
    videoPicture.classList.add('none');
  })