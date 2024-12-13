document.addEventListener('DOMContentLoaded', function () {
    ventanaModalInfoGabinete();
    ventanaModalInfoMotherboard();
    ventanaModalInfoAlmacenamiento();
    ventanaModalInfoDisipadores();
    ventanaModalInfoFuente();
    ventanaModalInfoGrafica();
    ventanaModalInfoRAM();
    ventanaModalInfoProcesador();
})

function ventanaModalInfoGabinete() {
    const botonInfo = document.querySelectorAll('.info-gabinete');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoGabinete);
        
    });
}

function abrirModalInfoGabinete() {
    console.log('holaa');
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

function ventanaModalInfoMotherboard() {
    const botonInfo = document.querySelectorAll('.info-motherboard');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoMotherboard);
    });
}

function abrirModalInfoMotherboard() {
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

function ventanaModalInfoAlmacenamiento() {
    const botonInfo = document.querySelectorAll('.info-almacenamiento');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoAlmacenamiento);
    });
}

function abrirModalInfoAlmacenamiento() {
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
function ventanaModalInfoDisipadores() {
    const botonInfo = document.querySelectorAll('.info-disipador');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoDisipadores);
    });
}

function abrirModalInfoDisipadores() {
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

function ventanaModalInfoFuente() {
    const botonInfo = document.querySelectorAll('.info-fuente');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoFuente);
    });
}

function abrirModalInfoFuente() {
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

function ventanaModalInfoGrafica() {
    const botonInfo = document.querySelectorAll('.info-grafica');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoGrafica);
    });
}

function abrirModalInfoGrafica() {
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
function ventanaModalInfoRAM() {
    const botonInfo = document.querySelectorAll('.info-ram');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoRAM);
    });
}

function abrirModalInfoRAM() {
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

function ventanaModalInfoProcesador() {
    const botonInfo = document.querySelectorAll('.info-procesador');
    botonInfo.forEach(boton => {
        boton.addEventListener('click', abrirModalInfoProcesador);
    });
}

function abrirModalInfoProcesador() {
    //const idProcesador = event.target.closest('.eliminar').value;
    const valores = event.target.closest('.info-procesador').value.split(',');
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