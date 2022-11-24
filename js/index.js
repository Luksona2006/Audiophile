let nav = document.querySelector('header').querySelector('nav');
let allInfo = `<div class="basketList-div">
<button id="basket"><img src="img/basket.svg" alt="basket"></button>
<div id="list" style="display: none;">
    <div id="cartSumAndRemove"><h4>CART (0)</h4><p class="black-p50">Remove All</p></div>
    <div id="items">
        <h2 class="empty-text">CART IS EMPTY</h2>
    </div>
    <div class="totalAndButton">
        <div id="total"><p class="black-p50">TOTAL</p><h3>0$</h3></div>
        <button class="orange-button">CHECKOUT</button>
    </div>
    <button id="hideList"><img src="img/hide-list.svg" alt="hideList"></button>
</div>
</div>`;
nav.insertAdjacentHTML('beforeend',allInfo);



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

// COUNTER

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

// CART VARIABLES

let addToCart = document.getElementsByClassName('addToCart');

let items = document.getElementById('items');

let total = document.getElementById('total').children[1];

// REMOVE

let cartSumAndRemove = document.getElementById('cartSumAndRemove'); // FOR CART() TOO
let cartRemove = cartSumAndRemove.children[1];

function removeItems() {
    items.innerHTML = `<h2 class="empty-text">CART IS EMPTY</h2>`;
    total.innerHTML = `$0`;
    cartSumAndRemove.children[0].innerHTML = `CART (0)`;
}

cartRemove.addEventListener('click',removeItems);

// ADD TO CART
let totalSum = 0;

function addtocart(e) {
    items.querySelector('.empty-text').style.display = 'none';
    
    list.style.display = 'flex';
    blurr.style.width = "100%";
    blurr.style.height = "100%";
    let updatedPrice = '';
    let cartSum = cartSumAndRemove.children[0];
    
    let currentProduct = e.currentTarget.parentNode.parentNode;
    let currentProductName = currentProduct.children[1].innerText;
    if(currentProductName.endsWith('HEADPHONES')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 10);
    }
    if(currentProductName.endsWith('SPEAKER')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 7);
    }
    if(currentProductName.endsWith('EARPHONES')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 9);
    }
    let currentProductPrice = currentProduct.children[3].innerHTML;
    let currentProductImg = currentProduct.parentNode.children[1].src;
    let currentProductQuantity = currentProduct.children[4].children[0].children[1].innerHTML;

    for(let g = 0; g < currentProductPrice.length; g++) {
        if(currentProductPrice[g] != ' ' && currentProductPrice[g] != '$' && currentProductPrice[g] != ',') {
            updatedPrice += currentProductPrice[g];
        } 
    }

    let sum = +updatedPrice * +currentProductQuantity;
    totalSum += sum;

    let currentItem = `
    <div class="item">
        <div class="item-info">
            <img src="${currentProductImg}" style="width: 64px; height: 64px" alt="item">
            <div class="name-price">
                <h6>${currentProductName}</h6>
                <span>${currentProductPrice}</span>
            </div>
        </div>
        <div class="counter">
            <button>
                <svg width="5" height="2" viewBox="0 0 5 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z" fill="black"/>
                </svg>
            </button>
            <h4>${currentProductQuantity}</h4>
            <button>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z" fill="black"/>
                </svg> 
            </button>            
        </div>
    </div>
    `
    items.insertAdjacentHTML('beforeend',currentItem);
    total.innerHTML = `$ ${totalSum}`
    let cartItemsSum = items.children.length - 1;
    cartSumAndRemove.children[0].innerHTML = `CART (${cartItemsSum})`;
    
    
}


// addToCart.forEach(element => {
//     element.addEventListener('click',addtocart)
//     element.style.cursor = 'pointer'
// });

for(let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click',  addtocart)
}
