HTMLElement; clickMe = document.getElementById('main2');
HTMLElement; bulb = document.getElementById('bulb');
clickMe.addEventListener('click', updateNow);
clickMe.addEventListener('click', bulb);

function updateNow() {
    clickMe.innerHTML = "Hello Script2";
}

function bulbOff() {
    bulb.src = "bulboff.gif";
}

function bulbOn() {
    bulb.src = "bulbon.gif";
}