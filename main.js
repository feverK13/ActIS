const menuBut = document.querySelector('.menu_icon');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('.body');
const navLink = document.querySelectorAll('.nav__list_item');

if (menuBut) {
    menuBut.addEventListener('click', () =>{
        navList.classList.toggle('burger_menu');
        menuBut.classList.toggle('menu_icon__cross');
        body.classList.toggle('no_scroll');
    });
    navLink.forEach((link) => {
        link.addEventListener('click', () => {
            navList.classList.remove('burger_menu');
            menuBut.classList.remove('menu_icon__cross');
            body.classList.remove('no_scroll');
        });
    });
};