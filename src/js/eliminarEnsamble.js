document.addEventListener('DOMContentLoaded', function () {
    eliminarEnsamble();
})

function eliminarEnsamble() {
    const btnEliminar = document.querySelectorAll('.eliminar-ensamble');
    btnEliminar.forEach((e) => {
        e.addEventListener('click', function () {
            const modal = document.createElement('DIV');
            modal.classList.add('modal');
            const valores = event.target.closest('.eliminar').value.split(',');
            const idEnsamblaje = valores[0];

            modal.innerHTML = `
            <div class="formulario-modal componente">
                <form method="POST" action="ensambles.php" enctype="multipart/form-data">
                    <div class="eliminar-componente">
                        <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#e74c3c">
                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                        <h2>Eliminar ensamblaje</h2>
                        <p>¿Estás seguro de que deseas eliminar el ensamblaje ? Esta acción no se puede deshacer.</p>
                    </div>
                    <div class = "acciones">
                        <button class="cerrar-modal-eliminar" type="button">Cancelar</button>
                        <input type="hidden" name="eliminar" value="${idEnsamblaje}" />
                        <input id="submit" type="submit" class="submit-eliminar-componente" value="Eliminar">
                    </div>
                </form>
            </div>
            `
            setTimeout(() => {
                const eliminar = document.querySelector('.formulario-modal');
                eliminar.classList.add('animar');
            }, 0);

            modal.addEventListener('click', function (e) {
                //e.preventDefault();

                //Cerramos el modal
                if (e.target.classList.contains('cerrar-modal-eliminar')) {
                    const formulario = document.querySelector('.formulario-modal');
                    formulario.classList.add('cerrar');
                    setTimeout(() => {
                        modal.remove();
                    }, 500);
                }
            })


            document.querySelector('body').appendChild(modal);
        })
    })

}