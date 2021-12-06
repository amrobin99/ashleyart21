let button = document.querySelector(".button");
let ads = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"];
let body = document.querySelector("body");

// function newAd() {
//   let randIndex = Math.floor(Math.random() * ads.length);
//   let randAd = ads[randIndex];
//   body.style.backgroundImage = "url(" + randAd + ")";
//   console.log(randAd);
// }


// button.addEventListener("click", newAd);

button.onclick =
document.getElementById("button").onclick = function() {newAd()};

function newAd() {
  document.querySelector("button").innerHTML = ads 1;
}