const navButton = document.querySelector(".header__nave-button");
const navBar = document.querySelector(".nav-bar");
const buttonHome = document.getElementById("home-button")
const buttonGallery = document.getElementById("gallery-button")
const buttonPrompst = document.getElementById("prompst-button")
const butotnComments = document.getElementById("comments-button")


function toggleNavBar(){
    navBar.classList.toggle("nav-bar__show");
    navButton.classList.toggle("header__none-display")
}
function toggleButtonHome(){
    navBar.classList.toggle("nav-bar__show");
    navButton.classList.toggle("header__none-display")
}

// function animationMove(){
//     navBar.classList.add("nav-bar__animation-move")
// }
//  buttonGallery.addEventListener("click", animationMove);
//  buttonPrompst.addEventListener("click", animationMove);
//  butotnComments.addEventListener("click", animationMove);

navButton.addEventListener("click",toggleNavBar)
 buttonHome.addEventListener("click", toggleButtonHome);
