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

let products = {
    headphones: [
                    [
                        `XX99 Mark II
                        Headphones`,
                        `The new XX99 Mark II headphones is the 
                        pinnacle of pristine audio. 
                        It redefines your premium headphone experience 
                        by reproducing the balanced depth and precision of 
                        studio-quality sound.`,
                        `img/Headphones/XX99-II`,
                        [
                            `$2,999`,
                            `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort 
                            for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking 
                            a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.
                            The advanced Active Noise Cancellation with built-in equalizer allow you to experience 
                            your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. 
                            Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, 
                            and a modern design aesthetic.`,
                            `1X Headphone Unit`,
                            `2X Replacement Earcups`,
                            `1X User Manual`,
                            `1X 3.5mm 5m Audio Cable`,
                            `1x Travel Bag`
                        ]

                    ],
                    [

                    ]
                ]
    
}



