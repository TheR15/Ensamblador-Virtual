document.addEventListener('DOMContentLoaded', function () {
    ventanaModalEditar();
})


//Editar
function ventanaModalEditar() {
    const botonEditar = document.querySelectorAll('.editarDisipador');

    botonEditar.forEach(boton => {
        boton.addEventListener('click', abrirModalEditarDisipador);
    });
}

function abrirModalEditarDisipador() {
    const valores = event.target.closest('.editarDisipador').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[2];
    const rpmMin = valores[3];
    const rpmMax = valores[4];
    const tamaño = valores[5];
    const tdp = valores[6];
    const imagen = valores[7];


    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
             <div class="formulario-modal componente">
            <form method="POST" action="disipadores.php" enctype="multipart/form-data">
            <h2> Disipador </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre" value = "${nombre}">
                    </div>
                    <div>
                        <label for="">RPM Minima</label>
                        <input type="number" name="rpmMin" id="rpmMin" step="0.01" placeholder="Ingrese el rpm minimo" value="${rpmMin}">
                    </div>
                    <div>
                        <label for="">RPM Maxima</label>
                        <input type="number" name="rpmMax" placeholder="Ingrese el rpm maximo" id="rpmMax" value="${rpmMax}">
                    </div>
                    <div>
                        <label for="">Tamaño</label>
                        <input type="number" name="tamaño" placeholder="Ingrese el tamaño" id="tamaño" value="${tamaño}">
                    </div>
                    <div>
                        <label for="">TDP (Consumo)</label>
                        <input type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp" value=${tdp}>
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
    const botonInfo = document.querySelectorAll('.info-disipador');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-disipador').value.split(',');
    const marca = valores[1];
    const nombre = valores[2];
    const rpmMin = valores[3];
    const rpmMax = valores[4];
    const tamaño = valores[5];
    const tdp = valores[6];
    const imagen = valores[7];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                    <path d="M12 12v.01"></path>
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
                            <td>RPM Minimo</td>
                            <td>${rpmMin} RPM</td>
                        </tr>

                        <tr>
                            <td>RPM Maximo</td>
                            <td>${rpmMax} RPM</td>
                        </tr>

                        <tr>
                            <td>Tamaño</td>
                            <td>${tamaño} mm</td>
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