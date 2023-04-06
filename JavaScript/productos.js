const listaProductos = () => fetch("https://my-json-server.typicode.com/ValentinaDagradi/E-commerce/producto").then( respuesta => respuesta.json())

const crearProductos = (imagen, nombre, precio, tipo, descripcion) => {
    return fetch("https://my-json-server.typicode.com/ValentinaDagradi/E-commerce/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, tipo, descripcion, id:uuid.v4()})
    })
};

const eliminarProducto = (id) =>{
    return fetch(`https://my-json-server.typicode.com/ValentinaDagradi/E-commerce/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/ValentinaDagradi/E-commerce/producto/${id}`).then(respuesta  => respuesta.json())
}

const actualizarProducto = (imagen, nombre, precio, tipo, descripcion,id) => {
    return fetch(`https://my-json-server.typicode.com/ValentinaDagradi/E-commerce/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({imagen, nombre, precio, tipo, descripcion }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
};


export const productos = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
} 