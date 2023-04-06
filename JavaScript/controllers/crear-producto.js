import { productos } from "../productos.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productos.crearProductos(imagen,nombre,precio,tipo,descripcion).then(() =>{
        window.location.href = "../../screens/index.html";
    }).catch((error) => console.log(error))
})