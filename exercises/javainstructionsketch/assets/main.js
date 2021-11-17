
let button = document.querySelector(".button");
let colors = ["#8DDBE0", "#4B5043", "#D3FFE9", "#9BC4BC"];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}

button.addEventListener("click", newColor);