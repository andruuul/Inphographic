const navButton = document.querySelector(".header__nave-button");
const navBar = document.querySelector(".nav-bar");

function togglenvBar(){
    navBar.classList.toggle("nav-bar__show");
    navBar.classList.toggle("nav-bar__scale");
}

navButton.addEventListener("click", togglenvBar);