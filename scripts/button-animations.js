const navButton = document.querySelector(".header__nave-button");
const navBar = document.querySelector(".nav-bar");
const buttonHome = document.getElementById("home-button");
const buttonGallery = document.getElementById("gallery-button");
const buttonPrompst = document.getElementById("prompst-button");
const butotnComments = document.getElementById("comments-button");
const popup = document.querySelector(".popup");
const peopleAddButton = document.querySelector(".people__addButton")
const overlay = document.querySelector(".overlay")


// function toggleNavBar(){
//     navBar.classList.toggle("nav-bar__show");
//     navButton.classList.toggle("header__none-display")
// }
function toggleButtonHome(){
    navBar.classList.toggle("nav-bar__show");
    // navButton.classList.toggle("header__none-display")
}
function animationPopupAdd(){
    popup.classList.add("popup__animation-position")
    popup.classList.add("popup__animation-shadowbox")
}
function animationPopupRemove(){
    popup.classList.remove("popup__animation-position")
    popup.classList.remove("popup__animation-shadowbox")
}

// function animationMove(){
//     navBar.classList.add("nav-bar__animation-move")
// }
//  buttonGallery.addEventListener("click", animationMove);
//  buttonPrompst.addEventListener("click", animationMove);
//  butotnComments.addEventListener("click", animationMove);

buttonHome.addEventListener("click", toggleButtonHome);
peopleAddButton.addEventListener("click",animationPopupAdd);
overlay.addEventListener("click",animationPopupRemove);