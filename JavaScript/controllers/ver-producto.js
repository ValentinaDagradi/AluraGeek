import { productos } from "../productos.js";

const head = document.querySelector("head")

const seccionProducto = document.querySelector(".vista-producto");
const url = new URL(window.location);
const id = url.searchParams.get("id");
const productoInfo = await productos.detalleProducto(id);

const crearLinea = (imagen, nombre, precio, descripcion) => {
    const caja = document.createElement("div");
    const contenido = `<img src=${imagen} alt=${nombre} class="vista-producto__imagen">
        <div class="vista-producto__informacion">
            <h2 class="vista-producto__titulo">${nombre}</h2>
            <p class="vista-producto__precio">$${precio}</p>
            <p class="vista-producto__descripcion">${descripcion}</p>
        </div>`;
    caja.classList.add("vista-producto__container");
    caja.innerHTML = contenido;
    return caja
}

const titulo = (nombre) => {
    const tituloTag = document.createElement("title");
    const contenido = `${nombre}`;
    tituloTag.innerHTML = contenido;
    return tituloTag
}

const obtenerInformacion = async () => {

    try {
        if(productoInfo.nombre){
            const nuevoTitulo = titulo(productoInfo.nombre);
            head.appendChild(nuevoTitulo);
            const nuevaCaja = crearLinea(productoInfo.imagen, productoInfo.nombre, productoInfo.precio, productoInfo.descripcion);
            seccionProducto.appendChild(nuevaCaja);
        } else{
            throw new Error();
        }

    }catch(error){
        console.log(error)
    }
}

obtenerInformacion();

const seccionSimilares = document.querySelector(".productos__container")

const productoSimilar = (imagen, nombre, precio, id) => {
    const container = document.createElement("div");
    const containerContenido = `<img src=${imagen} alt=${nombre} class="producto__imagen" data-imagen>
        <h3 class="producto__nombre" data-nombre>${nombre}</h3>
        <p class="producto__precio" data-precio>$${precio}</p>
        <a href="pagina-de-producto.html?id=${id}" data-link class="producto__link"><botton class="producto__boton">Ver producto</botton></a>`;
    container.classList.add("producto")
    container.innerHTML = containerContenido;
    return container;
}

productos.listaProductos().then((data) =>{
    data.forEach((producto) => {
        if(producto.tipo === productoInfo.tipo || producto.nombre.toLowerCase().includes(productoInfo.nombre.toLowerCase())){
            if(producto.nombre != productoInfo.nombre){
                const nuevoProductoSimilar = productoSimilar(producto.imagen, producto.nombre, producto.precio, producto.id);
                seccionSimilares.appendChild(nuevoProductoSimilar);
            }
        }
    })
}).catch((error) => console.log(error));
