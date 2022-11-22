var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var cssCode = document.querySelector("h3");
var random = document.querySelector("button");

function setStartColor() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
}

function setColor(color1, color2) {
  body.style.background =
    "linear-gradient(to right" + "," + color1 + "," + color2 + ")";
  cssCode.textContent = body.style.background + ";";
}

function randomColor() {
  var letter = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  var firstRandom = randomColor();
  var secondRandom = randomColor();
  setColor(firstRandom, secondRandom);
}

setStartColor();
setColor(color1.value, color2.value);
color1.addEventListener("input", () => setColor(color1.value, color2.value));
color2.addEventListener("input", () => setColor(color1.value, color2.value));
random.addEventListener("click", setRandomColor);
