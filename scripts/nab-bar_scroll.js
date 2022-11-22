//Cuando se mueva el scroll se ejecutará la función llamada addOrRemove
window.onscroll = function(){
    AddOrRemove()
};

//Obtenemos el id de la etiqueta nav
var Nav = document.querySelector(".nav-bar");

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