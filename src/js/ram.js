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
    const tipo = valores[2];
    const almacenamiento= valores[3];
    const frecuencia = valores[4];
    const tdp = valores[5];
    const imagen = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="memoriasram.php" enctype="multipart/form-data">
            <h2> Memoria RAM </h2>
            <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input value = "${nombre}" name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Tipo</label>
                        <select name="tipo" id="tipo" required>
                                <option selected value="${tipo}">${tipo}</option>
                                <option value="DDR3">DDR3</option>
                                <option value="DDR4">DDR4</option>
                                <option value="DDR5">DDR5</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Almacenamiento</label>
                        <select name="almacenamientoram" id="almacenamiento" required>
                                <option value="${almacenamiento}">${almacenamiento}</option>
                                <option value="4">4GB</option>
                                <option value="8">8GB</option>
                                <option value="32">32GB</option>
                                <option value="64">64GB</option>
                                <option value="128">128GB</option>
                                <option value="96">96GB</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Frecuencia</label>
                        <select name="frecuencia" id="frecuencia" required>
                                <option value="${frecuencia}">${frecuencia}</option>
                                <option value="2133">2133MHz</option>
                                <option value="2400">2400MHz</option>
                                <option value="2666">2666MHz</option>
                                <option value="2800">2800MHz</option>
                                <option value="3000">3000MHz</option>
                                <option value="3200">3200MHz</option>
                                <option value="3333">3333MHz</option>
                                <option value="3400">3400MHz</option>
                                <option value="3466">3466MHz</option>
                                <option value="3600">3600MHz</option>
                                <option value="5200">5200MHz</option>
                                <option value="5600">5600MHz</option>
                                <option value="6000">6000MHz</option>
                                <option value="6400">6400MHz</option>
                        </select>
                    </div>
                    <div>
                        <label for="">TDP (Consumo) </label>
                        <input value = "${tdp}"type="number" name="tdp"  id="tdp" placeholder="Ingrese el consumo">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="hidden" name="imagenAnterior" value="${imagen}" />
                        <input value = "${imagen}"type="file" id="imagen" name = "imagen" accept="image/jpeg, image/png" >
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
    const botonInfo = document.querySelectorAll('.info-ram');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-ram').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const tipo = valores[2];
    const almacenamiento= valores[3];
    const frecuencia = valores[4];
    const tdp = valores[5];
    const marca = valores[7];
    const imagen = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" >
                    <path d="M240-360h80v-240h-80v240Zm200 0h80v-240h-80v240Zm200 0h80v-240h-80v240Zm-480 80h640v-400H160v400Zm0 0v-400 400Zm40 160v-80h-40q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40v-80h80v80h160v-80h80v80h160v-80h80v80h40q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200h-40v80h-80v-80H520v80h-80v-80H280v80h-80Z" />
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
                            <td>Tipo</td>
                            <td>${tipo}</td>
                        </tr>

                        <tr>
                            <td>Almacenamiento</td>
                            <td>${almacenamiento} GB</td>
                        </tr>

                        <tr>
                            <td>Frecuencia</td>
                            <td>${frecuencia} MHZ</td>
                        </tr>

                        <tr>
                            <td>TDP</td>
                            <td>${tdp}W</td>
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