import { productos } from "../productos.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const tipo = document.querySelector("[data-tipo]");
    const descripcion = document.querySelector("[data-descripcion]")

    try {
        const producto = await productos.detalleProducto(id)
        if(producto.nombre){
            imagen.value = producto.imagen;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            tipo.value = producto.tipo;
            descripcion.value = producto.descripcion;
        } else{
            throw new Error();
        }

    }catch(error){
        console.log(error)
    }
}

obtenerInformacion();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productos.actualizarProducto(imagen, nombre, precio, tipo, descripcion, id).then(() => {
        window.location.href = "../../menu-administrador.html"
    })
});