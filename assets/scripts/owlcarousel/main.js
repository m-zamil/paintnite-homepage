$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
      {
        // loop:false,
        margin:0,
        nav:false,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1.3,
                loop:true,
                center:true
            },
            960:{
                items:4,
                loop:false,
            },
        }
    }
      
    );
  });