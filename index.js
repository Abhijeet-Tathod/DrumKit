function sound(url) {
  var audio = new Audio(url);
  audio.play();
}

function animation(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");
  console.log("." + currentkey);

  setTimeout(() => {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);
}
var a = document.querySelectorAll("button");

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    soundEfect(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.body.addEventListener("keypress", function (event) {
  soundEfect(event.key);
  animation(event.key);
});

function soundEfect(x) {
  switch (x) {
    case "w":
      sound("sounds/tom-2.mp3");
      // var audio = new Audio("sounds/tom-2.mp3");
      // audio.play();
      break;
    case "a":
      sound("sounds/crash.mp3");
    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
    // break;
    case "s":
      sound("sounds/tom-4.mp3");
      // var audio = new Audio("sounds/tom-4.mp3");
      // audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
  }
}
