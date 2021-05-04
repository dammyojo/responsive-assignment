const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');
const menuOpen = () => {
    hamburger.classList.toggle('active');
    navLink.classList.toggle('active');
}

hamburger.addEventListener('click', menuOpen);