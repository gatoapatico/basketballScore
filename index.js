let hScoreEl = document.getElementById("scoreHome-number");
let btnH1 = document.getElementById("scoreHome-btn1");
let btnH2 = document.getElementById("scoreHome-btn2");
let btnH3 = document.getElementById("scoreHome-btn3");
let hScoreCount = 0;

let gScoreEl = document.getElementById("scoreGuest-number");
let btnG1 = document.getElementById("scoreGuest-btn1");
let btnG2 = document.getElementById("scoreGuest-btn2");
let btnG3 = document.getElementById("scoreGuest-btn3");
let gScoreCount = 0;

function addHome1() {
    hScoreCount += 1;
    hScoreEl.textContent = hScoreCount;
}
function addHome2() {
    hScoreCount += 2;
    hScoreEl.textContent = hScoreCount;
}
function addHome3() {
    hScoreCount += 3;
    hScoreEl.textContent = hScoreCount;
}

function addGuest1() {
    gScoreCount += 1;
    gScoreEl.textContent = gScoreCount;
}
function addGuest2() {
    gScoreCount += 2;
    gScoreEl.textContent = gScoreCount;
}
function addGuest3() {
    gScoreCount += 3;
    gScoreEl.textContent = gScoreCount;
}