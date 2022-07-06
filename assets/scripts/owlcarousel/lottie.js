window.onload = initialize();
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initialize();
  }
};

function initialize() {
  if (window.LottieInteractivity) {
    LottieInteractivity.create({
      player: "#firstLottie",
      mode: "scroll",
      container: "#fomoAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 100],
        },
      ],
    });
    LottieInteractivity.create({
      player: "#secondLottie",
      mode: "scroll",
      container: "#fomoAnimationPlay",
      actions: [
        {
          visibility: [0, 1],
          type: "play",
          frames: [0, 100],
        },
      ],
    });
  }
}
