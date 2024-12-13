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
    const marca = valores[1];
    const nombre = valores[2];
    const socket = valores[3];
    const formato= valores[4];
    const chipset = valores[5];
    const modulosRam = valores[6];
    const tipoRam = valores[7];
    const maxRam = valores[8];
    const tipoPciExpress = valores[9];
    const imagen = valores[10];
    const puertoSATA = valores[11];
    const puertoM2 = valores[12];



    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
             <div class="formulario-modal componente">
            <form method="POST" action="motherboards.php" enctype="multipart/form-data">
            <h2> Motherboard </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre" value="${nombre}">
                    </div>
                    <div>
                        <label for="socket">Socket</label>
                        <select name="socket" id="socket" required>
                            <option value="" disabled selected>--Seleccione el socket--</option>
                            <option selected value="${socket}">${socket}</option>
                            <optgroup id="amd" label="AMD">
                                <option value="sWRX80">sWRX80</option>
                                <option value="TRX40">TRX40</option>
                                <option value="X399">X399</option>
                                <option value="AM5">AM5</option>
                                <option value="AM4">AM4</option>
                                <option value="AM3+">AM3+</option>
                                <option value="FM2+">FM2+</option>
                            </optgroup>
                            <optgroup id="intel" label="Intel">
                                <option value="LGA1700">LGA1700</option>
                                <option value="LGA1200">LGA1200</option>
                                <option value="LGA1151">LGA1151</option>
                                <option value="LGA1150">LGA1150</option>
                                <option value="LGA1155">LGA1155</option>
                                <option value="LGA1156">LGA1156</option>
                                <option value="LGA2066">LGA2066</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <label for="formato">Formato</label>
                        <select name="formato" id="formato" required>
                            <option value="" disabled selected>--Seleccione el formato--</option>
                            <option selected value="${formato}">${formato}</option>
                            <option value="Mini-ITX">Mini-ITX</option>
                            <option value="Micro-ATX">Micro-ATX</option>
                            <option value="ATX">ATX</option>
                            <option value="E-ATX">E-ATX</option>
                        </select>
                    </div>
                    <div>
                        <label for="chipset">Chipset</label>
                        <select name="chipset" id="chipset" required>
                            <option value="" disabled selected>--Seleccione el chipset--</option>
                            <option selected value="${chipset}">${chipset}</option>
                            <optgroup label="AMD">
                                <option value="sWRX80">sWRX80</option>
                                <option value="TRX40">TRX40</option>
                                <option value="X399">X399</option>
                                <option value="AM5">AM5</option>
                                <option value="AM4">AM4</option>
                                <option value="AM3+">AM3+</option>
                                <option value="FM2+">FM2+</option>
                            </optgroup>
                            <optgroup label="Intel">
                                <option value="Z890">Z890</option>
                                <option value="W790">W790</option>
                                <option value="B760">B760</option>
                                <option value="H770">H770</option>
                                <option value="Z790">Z790</option>
                                <option value="W680">W680</option>
                                <option value="Q670E">Q670E</option>
                                <option value="Q670">Q670</option>
                                <option value="H610">H610</option>
                                <option value="H670">H670</option>
                                <option value="B660">B660</option>
                                <option value="H610E">H610E</option>
                                <option value="W480E">W480E</option>
                                <option value="Q470E">Q470E</option>
                                <option value="Q470">Q470</option>
                                <option value="H310">H310</option>
                                <option value="Q370">Q370</option>
                                <option value="Q170">Q170</option>
                                <option value="H110">H110</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <label for="">Modulos de RAM</label>
                        <input type="number" name="modulosRam" placeholder="Ingrese cuantos modulos de ram tiene" id="modulosram" value="${modulosRam}">
                    </div>
                    <div>
                        <label for="">Tipo de RAM</label>
                        <select name="tipoRam" id="tiporam">
                            <option value="${tipoRam}">${tipoRam}</option>
                            <option value="DDR2">DDR2</option>
                            <option value="DDR3">DDR3</option>
                            <option value="DDR4">DDR4</option>
                            <option value="DDR5">DDR5</option>
                        </select>
                    </div>
                    <div>
                        <label for="">RAM Maxima</label>
                        <select name="maxRam" id="maxRam" required>
                            <option selected value="${maxRam}">${maxRam}</option>
                            <option value="32">32GB</option>
                            <option value="64">64GB</option>
                            <option value="128">128GB</option>
                            <option value="96">96GB</option>
                            <option value="192">192GB</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Puertos SATA</label>
                        <select name="puertoSATA" id="modulosAlmacenamiento" required>
                            <option value="${puertoSATA}" selected>${puertoSATA}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>

                    <div>
                        <label for="">Puertos M.2</label>
                        <select name="puertoM2" id="modulosAlmacenamiento" required>
                            <option value="${puertoM2}" selected>${puertoM2}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Soporte de GPU</label>
                        <select name="GPU" id="GPU" required>
                            <option value=""disabled selected>--Seleccione el soporte de GPU --</option>
                            <option selected value="${tipoPciExpress}<">${tipoPciExpress}</option>
                            <option value="1 PCIE<">1 PCIE</option>
                            <option value="2Way Sli">2Way Sli</option>
                            <option value="2Way CFX">2Way CFX</option>
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
    const botonInfo = document.querySelectorAll('.info-motherboard');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfo);
    });
}

function abrirModalInfo() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-motherboard').value.split(',');
    const idComponente = valores[0]
    const marca = valores[1];
    const nombre = valores[2];
    const socket = valores[3];
    const formato= valores[4];
    const chipset = valores[5];
    const modulosRam = valores[6];
    const tipoRam = valores[7];
    const maxRam = valores[8];
    const tipoPciExpress = valores[9];
    const imagen = valores[10];
    const puertoSATA = valores[11];
    const puertoM2 = valores[12];

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="formulario-modal componente">
            <div class="titulo-componente">
            <svg width = "32px" stroke="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <g>
                                    <path d="M490.667,64h-64V42.667c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64h-21.333V42.667 c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64h-21.333V42.667 c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64H21.333C9.551,64,0,73.551,0,85.333v384 c0,11.782,9.551,21.333,21.333,21.333h469.333c11.782,0,21.333-9.551,21.333-21.333v-384C512,73.551,502.449,64,490.667,64z M469.333,448H42.667V106.667h42.667v106.667c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333V106.667 h42.667V256c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333V106.667h256V448z"></path>
                                    <path d="M277.333,149.333c-11.782,0-21.333,9.551-21.333,21.333v128c0,11.782,9.551,21.333,21.333,21.333h128 c11.782,0,21.333-9.551,21.333-21.333v-128c0-11.782-9.551-21.333-21.333-21.333H277.333z M384,277.333h-85.333V192H384V277.333z "></path>
                                    <rect x="85.333" y="362.667" width="42.667" height="42.667"></rect>
                                    <rect x="170.667" y="320" width="42.667" height="42.667"></rect>
                                    <path d="M384,362.667h-85.333c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333H384 c11.782,0,21.333-9.551,21.333-21.333S395.782,362.667,384,362.667z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
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
                            <td>Socket</td>
                            <td>${socket}</td>
                        </tr>

                        <tr>
                            <td>Formato</td>
                            <td>${formato}</td>
                        </tr>

                        <tr>
                            <td>Chipset</td>
                            <td>${chipset}</td>
                        </tr>

                        <tr>
                            <td>Modulos de RAM</td>
                            <td>${modulosRam}</td>
                        </tr>
                        <tr>
                            <td>Tipo de RAM</td>
                            <td>${tipoRam}</td>
                        </tr>
                        <tr>
                            <td>RAM Maxima</td>
                            <td>${maxRam} GB</td>
                        </tr>

                        <tr>
                            <td>Puertos SATA</td>
                            <td>${puertoSATA}</td>
                        </tr>

                        <tr>
                            <td>Puertos M2</td>
                            <td>${puertoM2}</td>
                        </tr>

                        <tr>
                            <td>Tipo de PCI Express</td>
                            <td>${tipoPciExpress}</td>
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