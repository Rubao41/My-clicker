let lbb = document.querySelector('.lbb-cost')
let parsedlbb = parseFloat(lbb.innerHTML)

// Variáveis legadas removidas; agora os upgrades são geridos via array 'upgrades'.

let lpcText = document.getElementById("lpc-text")
let lpsText = document.getElementById("lps-text")

let lbbImgContainer = document.querySelector(".lbb-img-container") || document.querySelector('.lbb-image')?.parentElement

let lpc = 1

let lps = 0

const upgrades = [
    {
        name: 'clicker',
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        lbbMultiplier: 1.025,
        costMultiplier: 1.12,
        type: 'click'
    },
    {
        name: 'loveberry',
        cost: document.querySelector('.loveberry-cost'),
        parsedCost: parseFloat(document.querySelector('.loveberry-cost').innerHTML),
        increase: document.querySelector('.loveberry-increase'),
        parsedIncrease: parseFloat(document.querySelector('.loveberry-increase').innerHTML),
        level: document.querySelector('.loveberry-level'),
        lbbMultiplier: 1.025,
        costMultiplier: 1.12,
        type: 'passive'
    },
    {
        name: 'bobbieGoods',
        cost: document.querySelector('.bobbie-goods-cost'),
        parsedCost: parseFloat(document.querySelector('.bobbie-goods-cost').innerHTML),
        increase: document.querySelector('.bobbie-goods-increase'),
        parsedIncrease: parseFloat(document.querySelector('.bobbie-goods-increase').innerHTML),
        level: document.querySelector('.bobbie-goods-level'),
        lbbMultiplier: 1.025,
        costMultiplier: 1.12,
        type: 'passive'
    }
]


function incrementlbb(event) {
    lbb.innerHTML = Math.round(parsedlbb += lpc);

    const x = event.offsetX;
    const y = event.offsetY;

    const div = document.createElement("div");
    div.innerHTML = `+${Math.round(lpc)}`;
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    lbbImgContainer.appendChild(div);
    div.classList.add('fade-up');
    timeout(div);
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove();
    }, 800);
}

function buyUpgrade(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u
    })

    if (parsedlbb >= mu.parsedCost) {
        lbb.innerHTML = Math.round(parsedlbb -= mu.parsedCost)

        mu.level.innerHTML ++

        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.lbbMultiplier).toFixed(2))
        mu.increase.innerHTML = mu.parsedIncrease
        lpc += mu.parsedIncrease;

        mu.parsedCost *= mu.costMultiplier;
        mu.cost.innerHTML = Math.round(mu.parsedCost)
    }
}

// Funções antigas de compra removidas; buyUpgrade centraliza lógica.

setInterval(() => {
parsedlbb += lps / 10
    lbb.innerHTML = Math.round(parsedlbb);
    lpcText.innerHTML = Math.round(lpc);
    lpsText.innerHTML = lps.toFixed(1);
}, 100);