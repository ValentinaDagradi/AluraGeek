import { productos } from "../productos.js";

const boton = document.querySelector(".busqueda__boton");
const busquedaInput = document.querySelector("[data-busqueda]");



const crearNuevaCaja = (imagen, nombre, precio) => {
    const caja = document.createElement("div")
    const contenido = `<img src=${imagen} alt=${nombre} class="producto__imagen" data-imagen>
        <h3 class="producto__nombre" data-nombre>${nombre}</h3>
        <p class="producto__precio" data-precio>$${precio}</p>
        <a href="pagina-de-producto.html?id=${id}" data-link class="producto__link"><botton class="producto__boton">Ver producto</botton></a>`;
    caja.classList.add("producto")
    caja.innerHTML = contenido;
    return caja;
}

const main = document.querySelector(".main");

const container = document.createElement("div");
container.classList.add("resultado__container");

const seccion = document.createElement("section");
seccion.classList.add("resultado");
seccion.innerHTML = `<h2 class="resultado__titulo">Resultados de tu busqueda</h2>`;


const buscarProducto = () => {
    productos.listaProductos().then((data) => {
        main.replaceChildren();
        main.appendChild(seccion);
        seccion.appendChild(container);
        container.replaceChildren();
        data.forEach(producto => {
            if(producto.nombre.toLowerCase().includes(busquedaInput.value.toLowerCase())){
                const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio);
                container.appendChild(nuevaCaja);
            } else if(producto.tipo.toLowerCase().includes(busquedaInput.value.toLowerCase())){
                const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio);
                container.appendChild(nuevaCaja);
            }
        });
    }).catch(error => console.log(error))
}


boton.addEventListener("click", () => {
    buscarProducto();
})


