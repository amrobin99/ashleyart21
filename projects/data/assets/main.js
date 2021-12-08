let button = document.querySelector(".button");
let ads = ["assets/images/red.png", "assets/images/blue.png", "assets/images/yellow.png", "assets/images/green.png"];
let body = document.querySelector("body");
let i = 0;

function newAd() { 
  if ( i > ads.length - 1 ) {
    i = 0;
  }
  
  let currentAd = ads[i];
  body.style.backgroundImage = "url(" + currentAd + ")";
  i++;
}



button.addEventListener("click", newAd);