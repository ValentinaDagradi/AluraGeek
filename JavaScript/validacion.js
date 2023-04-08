const form = document.querySelector("[data-login]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const contraseña = document.querySelector("[data-contraseña]").value;
    console.log(contraseña)
    if(contraseña == 12345){
        window.location.href = "../../menu-administrador.html"
    } else {
        window.location.href = "../../error-login.html"
    }
})