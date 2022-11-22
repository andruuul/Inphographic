const navButton = document.querySelector(".header__nave-button");
const navBar = document.querySelector(".nav-bar");

function toggleNavBar(){
    navBar.classList.toggle("nav-bar__show");
}

navButton.addEventListener("click", toggleNavBar);