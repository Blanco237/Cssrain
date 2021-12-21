var btn = document.querySelector("#toggle");
var divs = document.querySelectorAll("div");



btn.addEventListener("click",toggleRain);


function toggleRain(){
    divs.forEach((div) => {
        div.classList.toggle("rain");
    })
    btn.textContent=="Start Rain"? btn.textContent="Stop Rain" : btn.textContent="Start Rain";
}