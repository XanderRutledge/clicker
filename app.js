


var r2 = {
    parts: 0,
    mods: 1,
    tools: 0,
    jawas: 0,
    rBolts: 0,
    ships: 0,
}

var toolPrice = 50
var jawaPrice = 100
var rBoltprice = 1000
var shipPrice = 100000

function steal() {
    r2.parts += r2.mods
    document.getElementById("parts").innerText = r2.parts
}

function ship() {
    if (r2.parts >= shipPrice) {
        r2.parts -= shipPrice
        shipPrice += Math.floor(shipPrice * 2)
        r2.ships += 10000
        update()
    } else { alert("you dont have enough parts") }
}

function tools() {
    if (r2.parts >= toolPrice) {
        r2.parts -= toolPrice
        toolPrice += Math.floor(toolPrice / 2)
        r2.mods += 1
        r2.tools += 1
        update()
    } else { alert("you dont have enough parts") }
}

function rBolt() {
    if (r2.parts >= rBoltprice) {
        r2.parts -= rBoltprice
        rBoltprice += Math.floor(rBoltprice / 2)
        r2.mods += 25
        r2.rBolts += 1
        update()
    } else { alert("you dont have enough parts") }
}

function jawa() {
    if (r2.parts >= jawaPrice) {
        r2.parts -= jawaPrice
        jawaPrice += Math.floor(jawaPrice / 2)
        r2.jawas += 5
        update()
    } else { alert("you dont have enough parts") }
}

function jawaSteal() {
    r2.parts += r2.jawas
}

function shipSteal() {
    r2.parts += r2.ships
}

function update() {
    document.getElementById("tools").innerText = r2.tools
    document.getElementById("parts").innerText = r2.parts
    document.getElementById("rBoltprice").innerText = rBoltprice
    document.getElementById("pps").innerText = r2.jawas + r2.ships
    document.getElementById("scrapMod").innerText = r2.mods - 1
    document.getElementById("jawaPrice").innerText = jawaPrice
    document.getElementById("toolPrice").innerText = toolPrice
    document.getElementById("jawa").innerText = r2.jawas / 5
    document.getElementById("rBolt").innerText = r2.rBolts
    document.getElementById("shipPrice").innerText = shipPrice
    document.getElementById("ships").innerText = r2.ships

}

const interval = setInterval(function () {
    jawaSteal()
    shipSteal()
    update()
}, 1000);

update()