document.addEventListener('DOMContentLoaded', function () {
    ventanaModalEliminar();
    ventanaModalInfo();
    ventanaModalEditar();
})

function ventanaModalEliminar() {
    const botonEliminar = document.querySelectorAll('.eliminar');

    botonEliminar.forEach(boton => {
        boton.addEventListener('click', abrirModalEliminar);
    });
}

function abrirModalEliminar() {
    const valores = event.target.closest('.eliminar').value.split(',');
    const idComponente = valores[0]
    const titulo = valores[1];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
        <form method="POST" action="${titulo}.php" enctype="multipart/form-data">
            <div class="eliminar-componente">
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#e74c3c">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
                <h2>Eliminar componente</h2>
                <p>¿Estás seguro de que deseas eliminar el componente ? Esta acción no se puede deshacer.</p>
            </div>
            <div class = "acciones">
                    <button class="cerrar-modal-eliminar" type="button">Cancelar</button>
                    <input type="hidden" name="eliminar" value="${idComponente}" />
                    <input id="submit" type="submit" class="submit-eliminar-componente" value="Eliminar">
            </div>
        </form>
    </div>
        `;

    //Aparece la ventana modal
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
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

    //Agrega la ventana modal en el body
    document.querySelector('body').appendChild(modal);
}

function ventanaModalInfo() {
    const botonInfo = document.querySelectorAll('.info');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info').value.split(',');
    const marca = valores[0];
    const nombre = valores[1];
    const frecuenciaBase = valores[2];
    const frecuenciaMax = valores[3];
    const nucleos = valores[4];
    const hilos = valores[5];
    const tdp = valores[6];
    const socket = valores[7];
    const graficosIntegrados = valores[8];
    const imagen = valores[9];
    let graficos = '';
    
    if (graficosIntegrados === '0') {
        graficos = "No";
    } else {
        graficos = "Si";
    }

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
                <h2>${marca} ${nombre}</h2>
            </div>
            <div class = "info-componente">
                <img src="../../imagenes/${imagen}"></img>
                <div class="especificaciones">
                <h3>Especificaciones</h3>
                    <table>
                        <tr>
                            <th>Caracteristica</th>
                            <th>Valor</th>
                        </tr>
                        <tr>
                            <td>Nucleos</td>
                            <td>${nucleos}</td>
                        </tr>
                        <tr>
                            <td>Hilos</td>
                            <td>${hilos}</td>
                        </tr>

                        <tr>
                            <td>Frecuencia base</td>
                            <td>${frecuenciaBase} GHZ</td>
                        </tr>

                        <tr>
                            <td>Frecuencia maxima</td>
                            <td>${frecuenciaMax} GHZ</td>
                        </tr>

                        <tr>
                            <td>TDP</td>
                            <td>${tdp}W</td>
                        </tr>

                        <tr>
                            <td>Socket</td>
                            <td>${socket}</td>
                        </tr>

                        <tr>
                            <td>Graficos integrados</td>
                            <td>${graficos}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class = "acciones">
                    <button class = "cerrar-modal-eliminar">Salir</button>
            </div>
    </div>
        `;

    //Aparece la ventana modal
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
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

    //Agrega la ventana modal en el body
    document.querySelector('body').appendChild(modal);
}

function ventanaModalEditar() {
    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach(boton => {
        boton.addEventListener('click', abrirModalEditar);
    });
}

function abrirModalEditar() {
    const valores = event.target.closest('.editar').value.split(',');
    const idProcesador = valores[0]
    const marca = valores[1];
    const nombre = valores[2];
    const frecuenciaBase = valores[3];
    const frecuenciaMax = valores[4];
    const nucleos = valores[5];
    const hilos = valores[6];
    const tdp = valores[7];
    const socket = valores[8];
    const graficosIntegrados = valores[9];
    const imagen = valores[10];
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
            <div class="formulario-modal componente">
            <form method="POST" action="procesadores.php" enctype="multipart/form-data">
            <h2> Procesador </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el modelo" id="nombre" value="${nombre}">
                    </div>
                    <div>
                        <label for="">Frecuencia base</label>
                        <input type="number" name="frecuenciaBase" id="frecuenciaBase" step="0.01" placeholder="Introduce la frecuencia base" min="1" max="10" value="${frecuenciaBase}">
                    </div>
                    <div>
                        <label for="">Frecuencia maxima</label>
                        <input type="number" name="frecuenciaMax" id="frecuenciaMax" step="0.01" placeholder="Introduce la frecuencia maxima" min="1" max="10" value="${frecuenciaMax}">
                    </div>
                    <div>
                        <label for="">Número de nucleos</label>
                        <input type="number" name="nucleos" placeholder="Ingrese el numero de nucleos" id="nucleos" value="${nucleos}">
                    </div>
                    <div>
                        <label for="">Número de Hilos</label>
                        <input type="number" name="hilos" placeholder="Ingrese el numero de hilos" id="hilos" value="${hilos}">
                    </div>
                    <div>
                        <label for="">TDP (Consumo)</label>
                        <input type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp" value="${tdp}">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="hidden" name="imagenAnterior" value="${imagen}" />
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen" >
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal-eliminar" type="button">Cancelar</button>
                    <input type="hidden" name="editar" value="${idProcesador}" />
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar">
                </div>
            </form>
        </div>
        `;

    //Aparece la ventana modal
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
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

    //Agrega la ventana modal en el body
    document.querySelector('body').appendChild(modal);
}