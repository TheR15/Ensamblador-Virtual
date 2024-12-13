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
    const potencia = valores[2];
    const certificacion = valores[3];
    const imagen = valores[4];
    const marca = valores[5];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="fuentes.php" enctype="multipart/form-data">
            <h2> Gabinete </h2>
            <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option selected value="${marca}">${marca}</option>
                            <option value="KMEX">KMEX</option>
                            <option value="Vorago">Vorago</option>
                            <option value="Acteck">Acteck</option>
                            <option value="AeroCool">AeroCool</option>
                            <option value="EVGA">EVGA</option>
                            <option value="NZXT">NZXT</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Eagle Warrior">Eagle Warrior</option>
                            <option value="Game Factor">Game Factor</option>
                            <option value="Cooler Master">Cooler Master</option>
                            <option value="XPG">XPG</option>
                            <option value="Munfrost">Munfrost</option>
                            <option value="MSI">MSI</option>
                            <option value="Asus">Asus</option>
                            <option value="Cougar">Cougar</option>
                            <option value="Gigabyte">Gigabyte</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input value ="${nombre}" name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Potencia</label>
                        <select name="potencia" id="potencia" required>
                            <option value="${potencia}">${potencia}W</option>
                            <option value="400">400W</option>
                            <option value="500">500W</option>
                            <option value="650">650W</option>
                            <option value="750">750W</option>
                            <option value="850">850W</option>
                            <option value="1000">1000W</option>
                            <option value="1200">1200W</option>
                            <option value="1400">1400W</option>
                            <option value="1600">1600W</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipo">Certificacion</label>
                        <select name="certificacion" id="certificacion" required>
                            <option value="${certificacion}">${certificacion}</option>
                            <option value="80 Plus Titanium">80 Plus Titanium</option>
                            <option value="80 Plus Platinum">80 Plus Platinum</option>
                            <option value="80 Plus Gold">80 Plus Gold</option>
                            <option value="80 Plus Silver">80 Plus Silver</option>
                            <option value="80 Plus Bronze">80 Plus Bronze</option>
                            <option value="No certificada">No certificada</option>
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
    const botonInfo = document.querySelectorAll('.info-fuente');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-fuente').value.split(',');
    const idComponente = valores[0]
    const nombre = valores[1];
    const potencia = valores[2];
    const certificacion = valores[3];
    const imagen = valores[4];
    const marca = valores[5];

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
                            <td>Potencia</td>
                            <td>${potencia}W</td>
                        </tr>

                        <tr>
                            <td>Certficacion</td>
                            <td>${certificacion}</td>
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