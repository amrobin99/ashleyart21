let button = document.querySelector(".button");
let ads = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"];
let body = document.querySelector("body");
let i = 0

function newAd() {
  for (var i = 0; i < ads.length; i++) {
    ads[i];
    i++
  body.style.backgroundImage = "url(" + ads[i] + ")";
  }
}
console.log(ads[i])


button.addEventListener("click", newAd);

// button.onclick =
// document.getElementById("button").onclick = function() {newAd()};

// function newAd() {
//   document.querySelector("button").innerHTML = ads 1;
// }

