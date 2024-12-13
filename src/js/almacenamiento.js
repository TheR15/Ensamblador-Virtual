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
    const capacidad= valores[3];
    const velocidadLectura = valores[4];
    const velocidadEscritura = valores[5];
    const imagen = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="almacenamiento.php" enctype="multipart/form-data">
            <h2> Unidad de Almacenamiento </h2>
            <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input value = "${nombre}"name="nombre" type="text" placeholder="Ingrese el modelo" id="nombre">
                    </div>
                    <div>
                        <label for="">Tipo</label>
                        <select name="tipo" id="tipo" required>
                            <option selected value="${tipo}">${tipo}</option>
                            <option value="SSD">SSD</option>
                            <option value="M.2">M.2</option>
                            <option value="HDD">HDD</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Capacidad</label>
                        <select name="capacidad" id="capacidad" required>
                            <option selected value="${capacidad}">${capacidad} GB</option>
                            <option value="120">120GB</option>
                            <option value="240">240GB</option>
                            <option value="256">256GB</option>
                            <option value="500">500GB</option>
                            <option value="512">512GB</option>
                            <option value="1000">1TB</option>
                            <option value="2000">2TB</option>
                            <option value="4000">4TB</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Velocidad de lectura</label>
                        <input value="${velocidadLectura}" type="number" name="lectura" placeholder="Ingrese el numero de nucleos" id="lectura">
                    </div>
                    <div>
                        <label for="">Velocidad de escritura</label>
                        <input value="${velocidadEscritura}" type="number" name="escritura" placeholder="Ingrese el numero de hilos" id="escritura">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="hidden" name="imagenAnterior" value="${imagen}" />
                        <input  type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
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
    const botonInfo = document.querySelectorAll('.info-almacenamiento');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-almacenamiento').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const tipo = valores[2];
    const capacidad= valores[3];
    const velocidadLectura = valores[4];
    const velocidadEscritura = valores[5];
    const marca = valores[7];
    const imagen = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
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
                            <td>Capacidad</td>
                            <td>${capacidad} GB</td>
                        </tr>

                        <tr>
                            <td>Velocidad de Lectura</td>
                            <td>${velocidadLectura} MB/s</td>
                        </tr>

                        <tr>
                            <td>Velocidad de Escritura</td>
                            <td>${velocidadEscritura} MB/s</td>
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