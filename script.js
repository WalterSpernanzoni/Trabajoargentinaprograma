
// Tu script.js
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");
    const redesSociales = document.getElementById("redes-sociales");
    const telefono = document.getElementById("telefono");
    const contador = document.getElementById("contador");

    let clics = 0;

    boton.addEventListener("click", function () {
        // Incrementar el contador de clics
        clics++;
        contador.textContent = clics;

        // Mostrar las redes sociales y el teléfono
        redesSociales.style.display = "block";
        telefono.style.display = "block";
    });
});
