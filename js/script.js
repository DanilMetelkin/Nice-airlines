 
//  Burger-menu, scroll lock(body), 
 const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const menu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
menu.classList.toggle('active');
burger.classList.toggle('active');
body.classList.toggle('lock');
})

// Tabs on table(index.html)
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

// min date for input in table (index.html)

const dateOfDepart = document.querySelector('.table__date-of-depart');
const dateOfArrive = document.querySelector('.table__date-of-arrive');
const date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth() + 1;
let currFullMonth = "0";
if (currMonth.toString().length < 2) {
    currFullMonth += currMonth.toString();
}
let currDate = date.getDate();
let minDate = currYear + '-' + currFullMonth + '-' + currDate;
dateOfDepart.setAttribute('min', minDate);
dateOfArrive.setAttribute('min', minDate);
