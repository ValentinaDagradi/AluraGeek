import { productos } from "../productos.js";

const crearNuevaCaja = (imagen, nombre, precio,id) => {
    const caja = document.createElement("div");
    const contenido = `<img src=${imagen} alt=${nombre} class="producto__imagen" data-imagen>
        <h3 class="producto__nombre" data-nombre>${nombre}</h3>
        <p class="producto__precio" data-precio>$${precio}</p>
        <a href="pagina-de-producto.html?id=${id}" data-link class="producto__link"><botton class="producto__boton">Ver producto</botton></a>
        <ul class="menu-administrador__controles">
            <li class="menu-administrador__eliminar" id=${id}><i class="fa-solid fa-trash"></i></li>
            <li class="menu-administrador__editar"><a href="editar-producto.html?id=${id}" class="menu-administrador__editar__link"><i class="fa-solid fa-pen-to-square"></i></a></li>
        </ul>`
        ;
    caja.classList.add("producto")
    caja.innerHTML = contenido;
    const botonEliminar = caja.querySelector(".menu-administrador__eliminar");
    botonEliminar.addEventListener("click", () =>{
        const id = botonEliminar.id;
        productos.eliminarProducto(id).then (respuesta => {
        console.log(respuesta)
      }).catch(err => alert("ocurrio un error"))
    });
    return caja;
}

const productoscContainer = document.querySelector("[data-container]");

productos.listaProductos().then((data) => {
    data.forEach((producto) => {
        const nuevaCaja = crearNuevaCaja(producto.imagen, producto.nombre, producto.precio,producto.id);
        productoscContainer.appendChild(nuevaCaja);
    });
}).catch((error) => console.log(error))
