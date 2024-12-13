const referencia = document.querySelector('#referencia');
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (evento) {
    const contrasena = document.querySelector('#contrasena').value;

    function validacionCrearCuenta() {
        let errores = false;
        if (contrasena.length <= 6) {
            mostrarAlerta('La contraseña debe de contener al menos 6 caracteres', 'error', referencia);
            errores = true;
        }
        return !errores;
    }
    function mostrarAlerta(mensaje, tipo, referencia) {
        // Previene la creación de múltiples alertas 
        const alertPrevia = document.querySelector('.alerta');

        if (alertPrevia) {
            alertPrevia.remove();
        }
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta', tipo);
        alerta.textContent = mensaje;

        referencia.appendChild(alerta);

        // Eliminar Alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
    if (!validacionCrearCuenta()) {
        evento.preventDefault();
    }
});