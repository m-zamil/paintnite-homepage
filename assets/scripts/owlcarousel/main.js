$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 0,
    nav: false,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1.5,
        loop: true,
        center: true,
      },
      960: {
        items: 4,
        loop: false,
      },
    },
  });
  $(".nightout__card").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  var imageCount;
  if (screen.width <= 960) {
    imageCount = 4;
  } else imageCount = 9;

  var feed = new Instafeed({
    get: "tagged",
    tagName: "paintnitedotcom",
    target: "instafeed-container",
    template: '<img title="{{caption}}" src="{{image}}" />',
    limit: imageCount,
    resolution: "high_resolution",
    accessToken: "IGQVJVdkh5NXRpS2NMY1lBVE83Y3FXX1pfQnhkd2ZADQjRPRC1BMDhodDI3b1NJZAlBMdnFIeldTWWk2S3gtUmdEdm1idWN2WlluTGNENFI5aUp2V2RmZAEVSaXdmVUZAFcG5fMzVWZAW5zUU5RUUtBYW40RAZDZD",
    filter: function (image) {
      return image.model.caption.includes("#paintnitedotcom");
    },
  });
  feed.run();
});
