const MENU_BTN = document.querySelector('.menu-btn');
const HAMBURGER = document.querySelector('.menu-btn__burger');
const NAV = document.querySelector('.nav');
const MENU_NAV = document.querySelector('.menu-nav');
const MENU_NAV_ITEM = document.querySelectorAll('.menu-nav__item'); // querySelectorAll gibt ein Array aus. Also klappt classList dort nicht

let showMenu = false;

MENU_BTN.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        HAMBURGER.classList.add('open')
        NAV.classList.add('open');
        MENU_NAV.classList.add('open');
        MENU_NAV_ITEM.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        HAMBURGER.classList.remove('open');
        NAV.classList.remove('open');
        MENU_NAV_ITEM.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


