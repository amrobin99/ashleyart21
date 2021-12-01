let button = document.querySelector(".button");
let ads = ["images/usps.png", "images/family.png", "images/frito.png", "images/ulta.png"];
let body = document.querySelector("body");

function newAd() {
  let randIndex = Math.floor(Math.random() * ads.length);
  let randAd = ads[randIndex];
  body.style.backgroundImage = "url(" + randAd + ")";
}

button.addEventListener("click", newAd);