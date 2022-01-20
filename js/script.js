 const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const menu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
menu.classList.toggle('active');
burger.classList.toggle('active');
body.classList.toggle('lock');
})

const firstTab  = document.querySelector('.table__first-tab');
const secondTab  = document.querySelector('.table__second-tab');

firstTab.addEventListener('click', () => {
    if (firstTab.contains('table__first-tab active') = true) {
        return;
    }
    else {
        firstTab.classList.toggle('active');
    }
})

secondTab.addEventListener('click', () => {
    if (secondTab.contains('table__second-tab active') = true) {
        return;
    }
    else {
        secondTab.classList.toggle('active');
    }
})