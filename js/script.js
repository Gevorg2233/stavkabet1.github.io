$(document).ready(function () {
    $('.owl-carousel').owlCarousel({     
        loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      margin: 10,
      dots: true,
      autoplayHoverPause: true,
      center: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
});