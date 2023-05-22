HTMLElement; clickMe = document.getElementById('main2');
HTMLElement; bulb = document.getElementById('bulb');
clickMe.addEventListener('click', updateNow);
clickMe.addEventListener('click', bulb);

function updateNow() {
    clickMe.innerHTML = "Hope you enjoy the contents of this site. I put a lot of heart into it";
}

function bulbOff() {
    bulb.src = "bulboff.gif";
}

function bulbOn() {
    bulb.src = "bulbon.gif";
}
