document.getElementById("playPause").addEventListener("click", function () {
  let audio = document.getElementById("loveSong");

  if (audio.paused) {
    audio.play();
    this.textContent = "⏸";
  } else {
    audio.pause();
    this.textContent = "💖";
  }
});

const yesButton = document.querySelector(".butbox .but:first-child");
const sureButton = document.querySelector(".butbox .but:last-child");

let shrinkFactor = 1; 
let growFactor = 1;

yesButton.addEventListener("click", function () {
  let letter = document.querySelector(".letter");

  letter.classList.toggle("raised");

  createHearts();

  shrinkFactor = 1;
  growFactor = 1;
  yesButton.style.transform = "scale(1)";
  sureButton.style.transform = "scale(1)";

  yesButton.style.zIndex = "1";
  sureButton.style.zIndex = "1";
  sureButton.style.position = "static";
});

sureButton.addEventListener("click", function () {
  yesButton.style.zIndex = 10;
  shrinkFactor *= 0.8; 
  growFactor *= 1.2;

  yesButton.style.transform = `scale(${growFactor})`;
  sureButton.style.transform = `scale(${shrinkFactor})`;
});

function createHearts() {
  for (let i = 0; i < 50; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "&#10084;";
    heart.classList.add("heart");

    let size = Math.random() * 40 + 10;
    heart.style.fontSize = size + "px";

    let randomX = Math.random() * window.innerWidth + "px";
    let randomY = Math.random() * window.innerHeight + "px";
    heart.style.left = randomX;
    heart.style.top = randomY;

    document.body.appendChild(heart);

    heart.animate([
      { transform: "translateY(0) scale(0.5)", opacity: 1 },
      { transform: "translateY(-100vh) scale(1)", opacity: 0 }
    ], {
      duration: 3000,
      easing: "linear",
      fill: "forwards"
    });

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
