document.addEventListener('DOMContentLoaded', function () {
    progressBar();
})

function progressBar() {
    const barra = document.querySelector('.puntaje-barra');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const certificateBtn = document.getElementById('certificateBtn');

    // Obtén y divide los puntajes
    const puntajeBarra = barra ? barra.value : null;
    const puntajes = puntajeBarra ? puntajeBarra.split(",") : [];

    // Convierte a números y garantiza un valor por defecto (0 si es inválido)
    const obtenerPuntaje = (indice) => {
        return parseInt(puntajes[indice]) || 0; // Devuelve 0 si no es un número válido
    };

    const puntajeFuente = obtenerPuntaje(0);
    const puntajeGabinete = obtenerPuntaje(1);
    const puntajeGrafica = obtenerPuntaje(2);
    const puntajeMotherboard = obtenerPuntaje(3);
    const puntajeProcesador = obtenerPuntaje(4);
    const puntajeAlmacenamiento = obtenerPuntaje(5);
    const puntajeDisipador = obtenerPuntaje(6);
    const puntajeRAM = obtenerPuntaje(7);

    // Calcula el total de puntaje
    const totalPuntaje = (
        puntajeFuente +
        puntajeGabinete +
        puntajeGrafica +
        puntajeMotherboard +
        puntajeProcesador +
        puntajeAlmacenamiento +
        puntajeDisipador +
        puntajeRAM
    ) / 120 * 100;

    // Redondear a un decimal
    const totalPuntajeRedondeado = Math.round(totalPuntaje * 10) / 10;

    // Habilitar el botón si el puntaje es mayor a 70
    if (totalPuntajeRedondeado > 70) {
        certificateBtn.disabled = false;
    }

    // Actualiza la barra de progreso y el texto
    if (progressBar) {
        progressBar.style.width = totalPuntajeRedondeado + "%";
    }

    if (progressText) {
        progressText.textContent = totalPuntajeRedondeado + "%";
    }

    // Consola para depurar
    console.log('Puntajes individuales:', {
        puntajeFuente,
        puntajeGabinete,
        puntajeGrafica,
        puntajeMotherboard,
        puntajeProcesador,
        puntajeAlmacenamiento,
        puntajeDisipador,
        puntajeRAM,
    });
    console.log('Total Puntaje Redondeado:', totalPuntajeRedondeado);

}