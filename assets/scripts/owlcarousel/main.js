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
    accessToken: "IGQVJVVmhzVzlzZAGJYanNyTV9fbkVqQ1I2MzdhU2VsU3BQTjFJSVNFM0ltSXNuYUk0eUowWVI0NmVDdW1WWjA3Wi1selRxZAFJNWE9lOHNDZAzhSM19iaV84ejV5SFlLRVUzR2J4dVR4SERUdlJQNmhrWQZDZD",
    error: function () {
      document.getElementById("instafeed-container").innerHTML = `
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-1.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-2.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-4.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-5.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-3.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-6.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-7.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-8.jpg" alt="" />
      <img src="https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/social-9.jpg" alt="" />`;
    },
    filter: function (image) {
      return image.model.caption.includes("#paintnitedotcom");
    },
  });
  feed.run();
});
