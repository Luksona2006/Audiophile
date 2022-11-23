// MENU

let showMenu = document.getElementById('showMenu');
let hideMenu = document.getElementById('hideMenu');
let navLinks = document.getElementById('navLinks');

function showmenu() {
    navLinks.style.display = "block"
    setTimeout(() => {
        navLinks.style.left = "0";
        navLinks.style.opacity = "1";
    }, 200);
}
function hidemenu() {
    navLinks.style.left = "-100%";
    navLinks.style.opacity = "0";
    setTimeout(() => {
        navLinks.style.display = "none"
    }, 500);
}

function basketList() {
    let = basket.parentElement.appendChild
}

showMenu.addEventListener('click', showmenu)
hideMenu.addEventListener('click', hidemenu)

// BASKET

let basket = document.getElementById('basket');
let list = document.getElementById('list');
let blurr = document.getElementById('blur');

function basketList() {
    if (list.style.display == 'none') {
        list.style.display = 'flex';
        blurr.style.width = "100%";
        blurr.style.height = "100%";

    } else {
        list.style.display = 'none';
        blurr.style.width = "0";
        blurr.style.height = "0";
    }
}

basket.addEventListener('click', basketList)

// Products



