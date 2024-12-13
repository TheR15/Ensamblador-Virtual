document.addEventListener('DOMContentLoaded', function () {
    ventanaModalEditar();
    ventanaModalInfo();
})

//Editar
function ventanaModalEditar() {
    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach(boton => {
        boton.addEventListener('click', abrirModalEditar);
    });
}

function abrirModalEditar() {
    const valores = event.target.closest('.editar').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const vram = valores[2];
    const tdp= valores[3];
    const numVentiladores = valores[4];
    const imagen = valores[5];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="graficas.php" enctype="multipart/form-data">
            <h2> Tarjeta de Video </h2>
            <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input value = "${nombre}"name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Memoria de Video (VRAM) </label>
                        <select name="vram" id="vram" required>
                            <option value="${vram}">${vram}</option>
                            <option value="1">1GB</option>
                            <option value="2">2GB</option>
                            <option value="3">3GB</option>
                            <option value="4">4GB</option>
                            <option value="6">6GB</option>
                            <option value="8">8GB</option>
                            <option value="12">12GB</option>
                            <option value="16">16GB</option>
                            <option value="24">24GB</option>
                        </select>
                    </div>
                    <div>
                        <label for="">TDP (Consumo)</label>
                        <input value="${tdp}" type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp">
                    </div>
                    <div>
                        <label for="">Numero de ventiladores</label>
                        <select name="numVentiladores" id="numVentiladores" required>
                                <option value="${numVentiladores}">${numVentiladores}</option>
                                <option value="1">1 ventilador</option>
                                <option value="2">2 ventiladores</option>
                                <option value="3">3 ventiladores</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="hidden" name="imagenAnterior" value="${imagen}" />
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal-eliminar" type="button">Cancelar</button>
                    <input type="hidden" name="editar" value="${idComponente}" />
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

//Info

function ventanaModalInfo() {
    const botonInfo = document.querySelectorAll('.info-grafica');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-grafica').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const vram = valores[2];
    const tdp= valores[3];
    const numVentiladores = valores[4];
    const imagen = valores[5];
    const marca = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                    <line x1="12" y1="16" x2="12" y2="20"></line>
                    <line x1="8" y1="20" x2="16" y2="20"></line>
                    <polyline points="8 8 12 12 16 8"></polyline>
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
                            <td>Marca</td>
                            <td>${marca}</td>
                        </tr>
                        <tr>
                            <td>VRAM</td>
                            <td>${vram} GB</td>
                        </tr>

                        <tr>
                            <td>Consumo (TDP)</td>
                            <td>${tdp}W</td>
                        </tr>

                        <tr>
                            <td>Numero de Ventiladores</td>
                            <td>${numVentiladores}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class = "acciones">
                    <button class = "cerrar-modal-eliminar" type= "button">Salir</button>
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