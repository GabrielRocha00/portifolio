let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Typing text code

const typed = new Typed('.multiple-text', {
    strings: [ 'Software Engineer', 'Front-End Development.', 'Back-End Development.'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });