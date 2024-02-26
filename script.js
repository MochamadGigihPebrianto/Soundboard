let track1 = document.getElementById("audio1");
let track2 = document.getElementById("audio2");
let muteAll = document.querySelectorAll(".muteAll");

let mute = () => {
  muteAll.forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });
};

let stop = (x) => {
  x.pause();
  x.currentTime = 0;
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      track1.play();
      stop(track2);
      break;
    case "a":
      track2.play();
      stop(track1);
      break;
    case "s":
      mute();
      break;
  }
});
