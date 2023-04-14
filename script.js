let navLinks = document.querySelector(".nav-bar");
let body = document.querySelector('body')


const showNav = () => {
    navLinks.classList.add('navShown');
    body.classList.add('bodyUnscroll');
}

const closeNav = () => {
    navLinks.classList.remove('navShown');
    body.classList.remove('bodyUnscroll');
}