let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let cssCode = document.querySelector("h3");
let random = document.querySelector("button");

function setStartColor() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
}

// function setColorInput(color1, color2) {
//   color1.value = color1;
//   color2.value = color2;
// }

function setColor(color1, color2) {
  body.style.background =
    "linear-gradient(to right" + "," + color1 + "," + color2 + ")";
  cssCode.textContent = body.style.background + ";";
}

function randomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  let firstRandom = randomColor();
  let secondRandom = randomColor();
  color1.value = firstRandom;
  color2.value = secondRandom;
  // setColorInput(firstRandom, secondRandom);
  setColor(firstRandom, secondRandom);
}

setStartColor();
setColor(color1.value, color2.value);
color1.addEventListener("input", () => setColor(color1.value, color2.value));
color2.addEventListener("input", () => setColor(color1.value, color2.value));
random.addEventListener("click", setRandomColor);
