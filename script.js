let lbb = document.querySelector('.lbb-cost')
let parsedlbb = parseFloat(lbb.innerHTML)

let clickercost = document.querySelector('.clicker-cost')
let parsedclickercost = parseFloat(clickercost.innerHTML)
let clickerlevel = document.querySelector(".clicker-level")
let clickerincrease = document.querySelector(".clicker-increase")
let parsedclickerincrease = parseFloat(clickerincrease.innerHTML)

let lpc = 1

function incrementlbb() {
    lbb.innerHTML = Math.round(parsedlbb += lpc);
}

function buyClicker() {
    if (parsedlbb >= parsedclickercost) {
        parsedlbb -= parsedclickercost;
        lbb.innerHTML = parsedlbb;

        clickerlevel.innerHTML ++

        parsedclickerincrease = parseFloat((parsedclickerincrease * 1.03).toFixed(2));
        clickerincrease.innerHTML = parsedclickerincrease
        lpc += parsedclickerincrease
    }
}