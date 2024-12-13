document.querySelectorAll('.buscar').forEach(function (input) {
    input.addEventListener('keyup', function () {
        let query = this.value.trim().toLowerCase(); // Capturar el valor del input
        let contenedor = this.closest('.card-componente'); // Buscar el contenedor relacionado
        let items = contenedor.querySelectorAll('.datos'); // Seleccionar los elementos dentro del contenedor

        items.forEach(function (item) {
            let labels = item.querySelectorAll('.buscar-card'); // Seleccionar los labels del item
            let found = false;

            labels.forEach(function (label) {
                if (label.textContent.toLowerCase().includes(query)) {
                    found = true; // Si el texto coincide, marcar como encontrado
                }
            });

            item.style.display = found ? 'flex' : 'none'; // Mostrar u ocultar el item
        });
    });
});
