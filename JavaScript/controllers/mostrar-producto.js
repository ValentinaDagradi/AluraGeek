import { productos } from "../productos.js";

const crearNuevaCaja = (imagen, nombre, precio, id) => {
    const caja = document.createElement("div");
    const contenido = `<img src=${imagen} alt=${nombre} class="producto__imagen" data-imagen>
        <h3 class="producto__nombre" data-nombre>${nombre}</h3>
        <p class="producto__precio" data-precio>$${precio}</p>
        <a href="pagina-de-producto.html?id=${id}" data-link class="producto__link"><botton class="producto__boton">Ver producto</botton></a>`;
    caja.classList.add("producto")
    caja.innerHTML = contenido;
    return caja;
}

const seccionStarWars = document.querySelector("[data-starwars]");

const seccionConsolas = document.querySelector("[data-consolas]");

const seccionDiversos = document.querySelector("[data-diversos]");

productos.listaProductos().then((data) => {
    data.forEach((producto) => {
        if(producto.tipo == "Star Wars"){
            const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio, producto.id);
            seccionStarWars.appendChild(nuevaCaja);
        }
        if (producto.tipo == "Consolas"){
            const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio, producto.id);
            seccionConsolas.appendChild(nuevaCaja);
        }
        if(producto.tipo == "Diversos"){
            const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio, producto.id);
            seccionDiversos.appendChild(nuevaCaja);
        }
    });
}).catch((error) => console.log(error))

