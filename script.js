function openCard(){
document.getElementById("card")
.classList.toggle("open");
}

function playMusic(){
document.getElementById("music").play();
}


const petals = document.querySelector(".petals");

for(let i=0;i<25;i++){

let flower = document.createElement("span");

flower.innerHTML =
["🌸","🌹","🌺","🌷","🌼"]
[Math.floor(Math.random()*5)];

flower.style.left =
Math.random()*100 + "vw";

flower.style.animationDuration =
(5 + Math.random()*8) + "s";

flower.style.opacity =
Math.random();

petals.appendChild(flower);
}
