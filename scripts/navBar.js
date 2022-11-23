//Cuando se mueva el scroll se ejecutará la función llamada addOrRemove
window.onscroll = function(){
    AddOrRemove()
};

//Obtenemos el id de la etiqueta nav
var Nav = document.querySelector(".header");

//Obtenemos la posición de desplazamiento
var NavPosition = Nav.offsetTop;

//Le agregamos y quitamos la clase Paste al nav
function AddOrRemove(){
    if(window.pageYOffset >= NavPosition){
        Nav.classList.add("nav-bar__paste");
    }
    else{
        Nav.classList.remove("nav-bar__paste");
    }
}

//Agregar el toggle a todos los botones de Header
const menuButton = document.querySelector(".header__nav-button");
const navBar = document.querySelector(".nav-bar");

function toggleNavBar(){
  navBar.classList.toggle("nav-bar__show");
  menuButton.classList.toggle("header__none-display")
}

menuButton.addEventListener("click",toggleNavBar)
const navButtons = Array.from(document.querySelectorAll(".nav-bar__index"))
console.log(navButtons)
navButtons.forEach((button) => button.addEventListener("click", () => {
  toggleNavBar()
}))