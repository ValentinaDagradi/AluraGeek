
const botonBusquedaMobile = document.querySelector(".busqueda__boton__mobile");
const barraBusquedaContainer = document.querySelector(".busqueda__container");

function togglebutton(){
    barraBusquedaContainer.classList.toggle("show");
}

botonBusquedaMobile.addEventListener("click", togglebutton);
