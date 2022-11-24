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
let hideList = document.getElementById('hideList');

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

function hidelist() {
    list.style.display = 'none';
    blurr.style.width = "0";
    blurr.style.height = "0";
}

basket.addEventListener('click', basketList)
hideList.addEventListener('click', hidelist);

// Products

let countDown = document.getElementById('countDown');
let countUp = document.getElementById('countUp');
let counter = document.getElementById('countDown').parentElement.childNodes[3];
let count = 1;

function countdown() {
    if(count >= 2) {
        count--;
    }
    counter.innerHTML = `${count}`;
}

function countup() {
    count++;
    counter.innerHTML = `${count}`;
}

countDown.addEventListener('click', countdown);
countUp.addEventListener('click',countup);


let addToCart = document.getElementsByClassName('addToCart');

function addtocart(e) {
    list.style.display = 'flex';
    blurr.style.width = "100%";
    blurr.style.height = "100%";
    
    let currentProduct = e.currentTarget.parentNode.parentNode;
    let currentProductName = currentProduct.children[1].innerText;
    let currentProductPrice = currentProduct.children[3].innerText;
    let currentProductQuantity = currentProduct.getElementById('countDown').parentElement.childNodes[3].innerHTML;
    console.log(currentProductName,currentProductPrice,currentProductQuantity)
}


// addToCart.forEach(element => {
//     element.addEventListener('click',addtocart)
//     element.style.cursor = 'pointer'
// });

for(let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click',  addtocart)
}



