let nav = document.querySelector('header').querySelector('nav');
let allInfo = `<div class="basketList-div">
                    <button id="basket"><img src="img/basket.svg" alt="basket"><div id="newProductAdded"></div></button>
                    <div id="list" style="display: none;">
                        <div id="cartSumAndRemove"><h4>CART (0)</h4><p class="black-p50">Remove All</p></div>
                        <div id="items">
                            <h2 class="empty-text">CART IS EMPTY</h2>
                        </div>
                        <div class="totalAndButton">
                            <div id="total"><p class="black-p50">TOTAL</p><h3 class="black-18px">$ 0</h3></div>
                            <a href="checkout.html"><button class="orange-button" id="checkout">CHECKOUT</button></a>
                        </div>
                        <button id="hideList"><img src="img/hide-list.svg" alt="hideList"></button>
                    </div>
                </div>`;

let numofitems = 0;
if(typeof localStorage['items'] !== 'undefined') {
    JSON.parse(localStorage.getItem('items')).forEach(() => {
        numofitems++;
    });
}


if (numofitems !== 0) {
    allInfo = `<div class="basketList-div">
                <button id="basket"><img src="img/basket.svg" alt="basket"><div id="newProductAdded">${numofitems}</div></button>
                <div id="list" style="display: none;">
                    <div id="cartSumAndRemove"><h4>CART (${numofitems})</h4><p class="black-p50">Remove All</p></div>
                    <div id="items">
                        <h2 style="display:none;" class="empty-text">CART IS EMPTY</h2>
                    </div>
                    <div class="totalAndButton">
                        <div id="total"><p class="black-p50">TOTAL</p><h3 class="black-18px">$ ${JSON.parse(localStorage.getItem('totalSum'))}</h3></div>
                        <a href="checkout.html"><button class="orange-button" id="checkout">CHECKOUT</button></a>
                    </div>
                    <button id="hideList"><img src="img/hide-list.svg" alt="hideList"></button>
                </div>
            </div>`;
}


nav.insertAdjacentHTML('beforeend', allInfo);
if(typeof localStorage['items'] !== 'undefined') {
    JSON.parse(localStorage.getItem('items')).forEach(element => {
        document.getElementById('items').insertAdjacentHTML('beforeend',`${element}`)
    })
}




let itemsArray = [];
if(localStorage['items'] !== 'undefined') {
    JSON.parse(localStorage.getItem('items')).forEach(element => {
        itemsArray.push(element);
    })
}
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
    window.onscroll = () => { }
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
    if (count >= 2) {
        count--;
    }
    counter.innerHTML = `${count}`;
}

function countup() {
    count++;
    counter.innerHTML = `${count}`;
}

countDown.addEventListener('click', countdown);
countUp.addEventListener('click', countup);

// CART VARIABLES

let addToCart = document.getElementsByClassName('addToCart');

let items = document.getElementById('items');

let total = document.getElementById('total').children[1];

// REMOVE

let cartSumAndRemove = document.getElementById('cartSumAndRemove'); // FOR CART() TOO
let cartRemove = cartSumAndRemove.children[1];

function removeItems() {
    items.innerHTML = `<h2 class="empty-text">CART IS EMPTY</h2>`;
    total.innerHTML = `$ 0`;
    totalSum = 0;
    cartItemsSum = 0;
    cartSumAndRemove.children[0].innerHTML = `CART (0)`;
    newProductAdded.style.display = "none"
    newProductAdded.innerText = `${cartItemsSum}`

    itemsArray = []; 
    localStorage.removeItem('items');
    localStorage.removeItem('totalSum');
}

cartRemove.addEventListener('click', removeItems);

// ADD TO CART
let totalSumText = document.querySelector('#total').lastChild.innerHTML
let totalSum = '';
for (let f = 0; f < totalSumText.length; f++) {
    if (f != 0 && f != 1) {
        totalSum += totalSumText[f];
    }
}
totalSum = +totalSum

function countDownList(e) {
    let currentQuantityList = e.currentTarget.parentElement.children[1];
    let currentPriceList = currentQuantityList.parentElement.parentElement.children[0].children[1].children[1].innerHTML;
    let currentQuantityListSum = currentQuantityList.innerText;
    let updatedPriceList = ''

    for (let d = 0; d < currentPriceList.length; d++) {
        if (currentPriceList[d] != ' ' && currentPriceList[d] != '$' && currentPriceList[d] != ',') {
            updatedPriceList += currentPriceList[d];
        }
    }
    updatedPriceList = +updatedPriceList;
    currentQuantityListSum = +currentQuantityListSum;
    currentQuantityListSum--;

    totalSum -= updatedPriceList;
    total.innerHTML = `<h3 class="black-18px">$ ${totalSum}</h3>`

    currentQuantityList.innerHTML = `${currentQuantityListSum}`;

    if (currentQuantityListSum == '0') {
        currentQuantityList.parentElement.parentElement.remove();
        document.getElementById('cartSumAndRemove').children[0].innerHTML = `<h4>CART (${document.getElementsByClassName('item').length})</h4>`
        newProductAdded.innerText = `${document.getElementsByClassName('item').length}`
    }
    if (document.getElementsByClassName('item').length <= 0) {
        currentQuantityList.parentElement.parentElement.remove()
        items.innerHTML = `<h2 class="empty-text">CART IS EMPTY</h2>`;
        console.log(document.getElementById('cartSumAndRemove').children[0].innerHTML = `<h4>CART (0)</h4>`);
        totalSum = 0;
        total.innerHTML = `$ 0`
        newProductAdded.innerText = `${document.getElementsByClassName('item').length}`
        newProductAdded.style.display = 'none';

        itemsArray = []; 
        localStorage.removeItem('items');
        localStorage.removeItem('totalSum');
    }
    localStorage.setItem('totalSum', JSON.stringify(totalSum));

}


function countUpList(e) {
    let currentQuantityList2 = e.currentTarget.parentElement.children[1];
    let currentPriceList2 = currentQuantityList2.parentElement.parentElement.children[0].children[1].children[1].innerHTML;
    let currentQuantityListSum2 = currentQuantityList2.innerText;
    let updatedPriceList2 = ''

    for (let s = 0; s < currentPriceList2.length; s++) {
        if (currentPriceList2[s] != ' ' && currentPriceList2[s] != '$' && currentPriceList2[s] != ',') {
            updatedPriceList2 += currentPriceList2[s];
        }
    }

    updatedPriceList2 = +updatedPriceList2;
    currentQuantityListSum2 = +currentQuantityListSum2;
    currentQuantityListSum2++;

    totalSum += updatedPriceList2;
    total.innerHTML = `<h3 class="black-18px">$ ${totalSum}</h3>`
    itemsArray.forEach((element) => {
        if(element == currentQuantityList2.parentElement.parentElement) {
            currentQuantityList2.innerHTML = `${currentQuantityListSum2}`;
            itemsArray[element] = JSON.stringify(`${currentQuantityList2.parentElement.parentElement}`);
        }
    })
    currentQuantityList2.innerHTML = `${currentQuantityListSum2}`;

    localStorage.setItem('totalSum', JSON.stringify(totalSum));
}

function addtocart(e) {
    let newProductAdded = document.getElementById('newProductAdded');
    items.querySelector('.empty-text').style.display = 'none';

    list.style.display = 'flex';
    blurr.style.width = "100%";
    blurr.style.height = "100%";
    let updatedPrice = '';
    let cartSum = cartSumAndRemove.children[0];

    let currentProduct = e.currentTarget.parentNode.parentNode;
    let currentProductName = ''

    let currentProductPrice = ''
    let currentProductImg = currentProduct.parentNode.children[1].src;
    let currentProductQuantity = '';

    // BECAUSE OF CHILDS WE WIL DEFINE HAS HE MORE CHILD ELEMENTS THAN IT SHOULD BE WITHOUT SPAN TEXT ('NEW PRODUCT') OR NOT;
    if (currentProduct.children[0].innerHTML == 'NEW PRODUCT') {
        currentProductQuantity = currentProduct.children[4].children[0].children[1].innerHTML;
        currentProductPrice = currentProduct.children[3].innerHTML;
        currentProductName = currentProduct.children[1].innerText;
    } else {
        currentProductQuantity = currentProduct.children[3].children[0].children[1].innerHTML;
        currentProductPrice = currentProduct.children[2].innerHTML;
        currentProductName = currentProduct.children[0].innerText;
    }

    if (currentProductName.endsWith('HEADPHONES')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 10);
    }
    if (currentProductName.endsWith('SPEAKER')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 7);
    }
    if (currentProductName.endsWith('EARPHONES')) {
        currentProductName = currentProductName.slice(0, currentProductName.length - 9);
    }

    for (let g = 0; g < currentProductPrice.length; g++) {
        if (currentProductPrice[g] != ' ' && currentProductPrice[g] != '$' && currentProductPrice[g] != ',') {
            updatedPrice += currentProductPrice[g];
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        window.onscroll = () => { window.scrollTo(window.scrollTo(0, 0)); };
    }, 400);

    // IF PRODUCT EXIST IN CART
    // for (let j = 1; j < items.children.length; j++) {
    //     if (items.children[j].children[0].children[1].children[0].innerText === `${currentProductName}`) {
    //         let sameProductQuantity = items.children[j].children[1].children[1].innerHTML;
    //         currentProductQuantity += +sameProductQuantity;

    //         items.children[j].children[1].children[1].innerHTML = `${currentProductQuantity}`;
    //     // } else {
    //     //     if (j >= items.children.length) {
    //     //         let currentItem = `
    //     //                             <div class="item">
    //     //                                 <div class="item-info">
    //     //                                     <img src="${currentProductImg}" style="width: 64px; height: 64px" alt="item">
    //     //                                     <div class="name-price">
    //     //                                         <h6>${currentProductName}</h6>
    //     //                                         <span>${currentProductPrice}</span>
    //     //                                     </div>
    //     //                                 </div>
    //     //                                 <div class="counter">
    //     //                                     <button>
    //     //                                         <svg width="5" height="2" viewBox="0 0 5 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     //                                             <path opacity="0.25" d="M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z" fill="black"/>
    //     //                                         </svg>
    //     //                                     </button>
    //     //                                     <h4>${currentProductQuantity}</h4>
    //     //                                     <button>
    //     //                                         <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     //                                             <path opacity="0.25" d="M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z" fill="black"/>
    //     //                                         </svg> 
    //     //                                     </button>            
    //     //                                 </div>
    //     //                             </div>
    //     //                             `
    //     //         items.insertAdjacentHTML('beforeend', currentItem);
    //     //     }
    //     // }
    // }

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
    items.insertAdjacentHTML('beforeend', currentItem);
    itemsArray.push(`${currentItem}`); // For localStorage
    localStorage.setItem('items', JSON.stringify(itemsArray))
    // items.insertAdjacentHTML('beforeend', `${JSON.parse(localStorage.getItem('items'))}`)
    // GET TOTAL
    let sum = +updatedPrice * +currentProductQuantity;
    totalSum += sum;
    total.innerHTML = `$ ${totalSum}`
    localStorage.setItem('totalSum', totalSum)
    totalSumText = `$ ${totalSum}`

    let cartItemsSum = items.children.length - 1;
    cartSumAndRemove.children[0].innerHTML = `CART (${cartItemsSum})`;
    newProductAdded.style.display = "block"
    newProductAdded.innerText = `${cartItemsSum}`
    count = 1;
    counter.innerHTML = `${count}`;
    for (let g = 0; g <= document.getElementsByClassName('item')[0].parentElement.children.length; g++) {
        document.getElementsByClassName('item')[g].children[1].lastElementChild.addEventListener('click', countUpList);
        document.getElementsByClassName('item')[g].children[1].firstElementChild.addEventListener('click', countDownList);
    }

}

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', addtocart)
}




