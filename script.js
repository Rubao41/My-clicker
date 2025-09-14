let lbb = document.querySelector('.lbb-cost')
let parsedlbb = parseFloat(lbb.innerHTML)

let clickercost = document.querySelector('.clicker-cost')
let parsedclickercost = parseFloat(clickercost.innerHTML)
let clickerlevel = document.querySelector(".clicker-level")
let clickerincrease = document.querySelector(".clicker-increase")
let parsedclickerincrease = parseFloat(clickerincrease.innerHTML)

let loveberrycost = document.querySelector('.loveberry-cost')
let parsedloveberrycost = parseFloat(loveberrycost.innerHTML)
let loveberrylevel = document.querySelector(".loveberry-level")
let loveberryincrease = document.querySelector(".loveberry-increase")
let parsedloveberryincrease = parseFloat(loveberryincrease.innerHTML)

let bobbieGoodsCost = document.querySelector('.bobbie-goods-cost')
let parsedBobbieGoodsCost = parseFloat(bobbieGoodsCost.innerHTML)
let bobbieGoodsLevel = document.querySelector(".bobbie-goods-level")
let bobbieGoodsIncrease = document.querySelector(".bobbie-goods-increase")
let parsedBobbieGoodsIncrease = parseFloat(bobbieGoodsIncrease.innerHTML)

let lpcText = document.getElementById("lpc-text")
let lpsText = document.getElementById("lps-text")

let lpc = 1

let lps = 0

function incrementlbb() {
    lbb.innerHTML = Math.round(parsedlbb += lpc);
}

function buyClicker() {
    if (parsedlbb >= parsedclickercost) {
        
        lbb.innerHTML = Math.round(parsedlbb -= parsedclickercost); 

        clickerlevel.innerHTML ++

        parsedclickerincrease = parseFloat((parsedclickerincrease * 1.03).toFixed(2));
        clickerincrease.innerHTML = parsedclickerincrease
        lpc += parsedclickerincrease

        parsedclickercost *= 1.18
        clickercost.innerHTML = Math.round(parsedclickercost);
        
    }
}

function buyLoveberry() {
    if (parsedlbb >= parsedloveberrycost) {

        lbb.innerHTML = Math.round(parsedlbb -= parsedloveberrycost);

        loveberrylevel.innerHTML ++

        parsedloveberryincrease = parseFloat((parsedloveberryincrease * 1.03).toFixed(2));
        loveberryincrease.innerHTML = parsedloveberryincrease
        lps += parsedloveberryincrease

        parsedloveberrycost *= 1.18
        loveberrycost.innerHTML = Math.round(parsedloveberrycost);

    }
}

function buyBobbieGoods() {
    if (parsedlbb >= parsedBobbieGoodsCost) {

        lbb.innerHTML = Math.round(parsedlbb -= parsedBobbieGoodsCost);

        bobbieGoodsLevel.innerHTML ++

        parsedBobbieGoodsIncrease = parseFloat((parsedBobbieGoodsIncrease * 1.03).toFixed(2));
        bobbieGoodsIncrease.innerHTML = parsedBobbieGoodsIncrease
        lps += parsedBobbieGoodsIncrease

        parsedBobbieGoodsCost *= 1.18
        bobbieGoodsCost.innerHTML = Math.round(parsedBobbieGoodsCost);

    }
}

setInterval(() => {
parsedlbb += lps / 10
    lbb.innerHTML = Math.round(parsedlbb);
    lpcText.innerHTML = Math.round(lpc);
    lpsText.innerHTML = lps.toFixed(1);
}, 100);