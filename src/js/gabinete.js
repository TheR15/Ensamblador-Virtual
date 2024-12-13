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
    const iluminacion = valores[2];
    const tipo = valores[3];
    const soporteDisipador = valores[4];
    const soporteGPU = valores[5];
    const imagen = valores[6];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="gabinetes.php" enctype="multipart/form-data">
            <h2> Gabinete </h2>
            <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input value = "${nombre}"name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Iluminacion</label>
                        <select name="iluminacion" id="iluminacion" required>
                            <option value="${iluminacion}">${iluminacion}</option>
                            <option value="LED 1 Solo Color">LED 1 Solo Color</option>
                            <option value="LED Multicolor">LED Multicolor</option>
                            <option value="LED RGB">LED RGB</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipo">Tipo</label>
                        <select name="tipo" id="tipo" required>
                            <option value="${tipo}">${tipo}</option>
                            <option value="Mini-ITX">Mini-ITX</option>
                            <option value="Micro-ATX">Micro-ATX</option>
                            <option value="ATX">ATX</option>
                            <option value="E-ATX">E-ATX</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Soporte de disipador</label>
                        <select name="soporteDisipador" id="soporteDisipador" required>
                            <option value="${soporteDisipador}">${soporteDisipador}mm</option>
                            <option value="140">140mm</option>
                            <option value="160">160mm</option>
                            <option value="161">161mm o mas</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Soporte de GPU (Ventiladores)</label>
                        <select name="soporteGPU" id="soporteGPU" required>
                            <option value="${soporteGPU}">${soporteGPU}</option>
                            <option value="1">1 Ventilador</option>
                            <option value="2">2 Ventiladores</option>
                            <option value="3">3 Ventiladores</option>
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
    const botonInfo = document.querySelectorAll('.info-gabinete');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-gabinete').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const iluminacion = valores[2];
    const tipo = valores[3];
    const soporteDisipador = valores[4];
    const soporteGPU = valores[5];
    const imagen = valores[6];
    const marca = valores[7];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
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
                            <td>Iluminacion</td>
                            <td>${iluminacion}</td>
                        </tr>

                        <tr>
                            <td>Formato</td>
                            <td>${tipo}</td>
                        </tr>

                        <tr>
                            <td>Soporte para disipador</td>
                            <td>${soporteDisipador}mm</td>
                        </tr>
                         <tr>
                            <td>Soporte para GPU (Ventiladores)</td>
                            <td>${soporteGPU}</td>
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
