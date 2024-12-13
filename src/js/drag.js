document.addEventListener('DOMContentLoaded', function () {
    dragGabinete();
    dragMotherboard();
    dragProcesador();
    dragDisipador();
    dragRam();
    dragSATA();
    dragM2();
    dragGrafica();
    dragFuente();
    btnEnsamblar();
    btnLimpiar();
})

function dragGabinete() {
    // Seleccionar todos los elementos arrastrables
    const draggableItems = document.querySelectorAll(".drag-item-gabinete");
    const dropzone = document.getElementById("drop-zone-gabinete");
    // Añadir eventos a cada elemento
    draggableItems.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            const partesGabinete = document.querySelectorAll('.partes-gabinete');
            partesGabinete.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add("dropzone-pulsando");
            })
            dropzone.style.stroke = "#0C70F2";
            dropzone.classList.add("dropzone-pulsando"); // Añadir clase de animación
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            const partesGabinete = document.querySelectorAll('.partes-gabinete');
            partesGabinete.forEach((e) => {
                e.style.stroke = "#e1e1e1";
                e.classList.remove("dropzone-pulsando");
            })
            dropzone.classList.remove("dropzone-pulsando");
            dropzone.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-gabinete');
            if (componenteAgregado) {
                partesGabinete.forEach((e) => {
                    e.style.stroke = "#17202a";
                })
                dropzone.style.stroke = "#17202a";
            }
        });
    });

    // Evento de la zona de drop
    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("hover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("hover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        //Quizo colocar un componente en otra area
        if (!itemDrag.classList.contains('drag-item-gabinete')) {
            Swal.fire({
                icon: "error",
                title: "Error al ensamblar",
                text: "No puedes colocar este componente aquí. Asegúrate de que sea compatible con la ubicación seleccionada.",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        //Datos de la motherboard para la compatibilidad
        const motherboardCompatibilidad = document.querySelector('.datos-motherboard');
        const datosMotherboard = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datosMotherboard ? datosMotherboard.split(",") : [];
        const formatoMotherboard = valoresMotherboard[0];

        //Datos del disipador para la compatibilidad
        const disipadorCompatibilidad = document.querySelector('.datos-disipador');
        const datosdisipador = disipadorCompatibilidad ? disipadorCompatibilidad.value : null;
        const valoresdisipador = datosdisipador ? datosdisipador.split(",") : [];
        const tamañoDisipador = valoresdisipador[0];

        //Datos de la grafica para la compatibilidad
        const graficaCompatibilidad = document.querySelector('.datos-grafica');
        const datosgrafica = graficaCompatibilidad ? graficaCompatibilidad.value : null;
        const valoresgrafica = datosgrafica ? datosgrafica.split(",") : [];
        const tamañografica = valoresgrafica[1];

        //Datos del gabinete
        const button = newElement.querySelector("button.info-gabinete");
        const buttonValue = button ? button.value : null; // Si el botón existe, extrae el valor
        const valores = buttonValue ? buttonValue.split(",") : []; // Separar el valor por comas
        const idComponente = valores[0]
        console.log(idComponente);
        const nombre = valores[1];
        const iluminacion = valores[2];
        const formato = valores[3];
        const soporteDisipador = valores[4];
        const soporteGPU = valores[5];
        const imagen = valores[6];
        const marca = valores[7];
        console.log(soporteDisipador);

        //Compatibilidad del formato de la tarjeta madre con la del gabinete
        if (motherboardCompatibilidad) {
            if (formato != formatoMotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El formato del gabinete no es compatible",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        if (disipadorCompatibilidad) {
            if (soporteDisipador < tamañoDisipador) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El gabinete es muy pequeño para el disipador. Por favor, revisa las especificaciones de ambos componentes.",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        if (graficaCompatibilidad) {
            if (tamañografica > soporteGPU) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad de ventiladores",
                    text: `La tarjeta gráfica tiene más ventiladores de los que el gabinete puede soportar. El gabinete solo soporta hasta ${soporteGPU} ventiladores para la gráfica, mientras que la tarjeta gráfica tiene ${tamañografica} ventiladores.`,
                    footer: '<a href="#">¿Cómo elegir un gabinete compatible con la tarjeta gráfica?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('gabinete');
        dropzone.innerHTML = "";
        componenteAgregado.innerHTML = `
        <div draggable="true" class="datos drag-item-gabinete">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>
            <input type="hidden" name="idGabinete" value ="${idComponente}" hidden>
            <button hidden class="datos-gabinete" value="${formato},${soporteDisipador},${soporteGPU}">
            <button class="eliminar eliminar-gabinete-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;

        const areaMotherboard = document.querySelector('.area-gabinete');
        areaMotherboard.innerHTML = "";
        areaMotherboard.appendChild(componenteAgregado);
        const indicacion = document.querySelector('.indicacion-ensamblaje');
        indicacion.style.display = "none";

        const btncerrar = document.querySelector('.eliminar-gabinete-ensamblaje');
        eliminarComponente(btncerrar, componenteAgregado, dropzone);
    });
}

function dragMotherboard() {
    const draggableItemsMotherboard = document.querySelectorAll(".drag-item-motherboard");
    const dropzoneMotherboard = document.getElementById("drop-zone-motherboard");

    draggableItemsMotherboard.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            dropzoneMotherboard.style.stroke = "#0C70F2";
            dropzoneMotherboard.classList.add("dropzone-pulsando");
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzoneMotherboard.classList.remove("dropzone-pulsando");
            dropzoneMotherboard.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-motherboard');
            if (componenteAgregado) {
                dropzoneMotherboard.style.stroke = "#17202a";
            }
        });
    });

    dropzoneMotherboard.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneMotherboard.classList.add("hover");
    });

    dropzoneMotherboard.addEventListener("dragleave", () => {
        dropzoneMotherboard.classList.remove("hover");
    });

    dropzoneMotherboard.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");

        if (!itemDrag.classList.contains('drag-item-motherboard')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        //Datos del gabinete para la compatibilidad
        const gabineteCompatibilidad = document.querySelector(".datos-gabinete");
        const datosGabinete = gabineteCompatibilidad ? gabineteCompatibilidad.value : null;
        const valoresGabinete = datosGabinete ? datosGabinete.split(",") : [];
        const formatoGabinete = valoresGabinete[0];

        //Datos del procesador para la compatibilidad
        const procesadorCompatibilidad = document.querySelector(".datos-procesador");
        const datosProcesador = procesadorCompatibilidad ? procesadorCompatibilidad.value : null;
        const valoresProcesador = datosProcesador ? datosProcesador.split(",") : [];
        const socketProcesador = valoresProcesador[0];

        //Datos de la RAm para la compatibilidad
        const RAMCompatibilidad = document.querySelector(".datos-ram");
        const datosRAM = RAMCompatibilidad ? RAMCompatibilidad.value : null;
        const valoresRAM = datosRAM ? datosRAM.split(",") : [];
        const tipoRAM = valoresRAM[0];
        const capacidadRAM = valoresRAM[1];

        const cantidadSATA = document.querySelector('.cantidadSATA');
        const cantidadM2 = document.querySelector('.cantidadM2');
        const cantidadRAM = document.querySelector(".cantidad-ram");


        const button = newElement.querySelector("button.info-motherboard");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0]
        const marca = valores[1];
        const nombre = valores[2];
        const socket = valores[3];
        const formato = valores[4];
        const chipset = valores[5];
        const modulosRam = valores[6];
        const tipoRamMotherboard = valores[7];
        const maxRam = valores[8];
        const tipoPciExpress = valores[9];
        const imagen = valores[10];
        const puertoSATA = valores[11];
        const puertoM2 = valores[12];

        //Validaciones
        if (gabineteCompatibilidad) {
            if (formatoGabinete != formato) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El formato de la tarjeta madre que quieres añadir no es compatible con el gabinete",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        if (procesadorCompatibilidad) {
            if (socketProcesador != socket) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El socket del procesador no es compatible con el de la tarjeta madre",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        if (RAMCompatibilidad) {
            const cantidad = cantidadRAM.value;
            if (tipoRamMotherboard != tipoRAM) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El tipo de memoria RAM no es compatible con el de la tarjeta madre. Verifica que ambas usen el mismo estándar (por ejemplo, DDR4 o DDR5).",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }

            if (cantidad > modulosRam) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El número de módulos de memoria RAM supera la capacidad máxima soportada por la tarjeta madre. Consulta las especificaciones para conocer el límite de módulos permitidos.",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
            // const totalRAM = cantidad * capacidadRAM;
            // console.log (totalRAM);
        }

        if (cantidadSATA) {
            const cantidad = cantidadSATA.value;
            if (cantidad > puertoSATA) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos SATA excedido",
                    text: `La tarjeta madre solo soporta ${puertoSATA} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        if (cantidadM2) {
            const cantidadm2 = cantidadM2.value;
            if (cantidadm2 > puertoM2) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos M2 excedido",
                    text: `La tarjeta madre solo soporta ${puertoM2} dispositivo(s) conectado(s) a los puertos M.2 disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }


        dropzoneMotherboard.innerHTML = ""; // Esto borra todo el contenido
        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('motherboard');
        componenteAgregado.innerHTML = `
         <div draggable="true" class="datos drag-item-motherboard">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>
            <input type="hidden" name="idMotherboard" value ="${idComponente}" hidden>
            <button hidden class="datos-motherboard" value="${formato},${socket},${tipoRamMotherboard},${modulosRam},${puertoSATA},${puertoM2},${maxRam}">
            <button class="eliminar eliminar-motherboard-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop
        const areaMotherboard = document.querySelector('.area-motherboard');
        const indicacion = document.querySelector('.indicacion-ensamblaje');
        indicacion.style.display = "none";
        areaMotherboard.innerHTML = "";
        areaMotherboard.appendChild(componenteAgregado);

        const btncerrar = document.querySelector('.eliminar-motherboard-ensamblaje');
        eliminarComponente(btncerrar, componenteAgregado, dropzoneMotherboard);
    });
}

function dragProcesador() {
    const draggableItemsProcesador = document.querySelectorAll(".drag-item-procesador");
    const dropzoneProcesador = document.getElementById("drop-zone-procesador");

    draggableItemsProcesador.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            dropzoneProcesador.style.stroke = "#0C70F2";
            dropzoneProcesador.classList.add("dropzone-pulsando");
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzoneProcesador.classList.remove("dropzone-pulsando");
            dropzoneProcesador.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-procesador');
            if (componenteAgregado) {
                dropzoneProcesador.style.stroke = "#17202a";
            }
        });
    });

    dropzoneProcesador.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneProcesador.classList.add("hover");
    });

    dropzoneProcesador.addEventListener("dragleave", () => {
        dropzoneProcesador.classList.remove("hover");
    });

    dropzoneProcesador.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        const motherboard = document.querySelector(".datos-motherboard");
        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar la tarjeta madre primero",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-procesador')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        //Datos del gabinete para la compatibilidad
        const motherboardCompatibilidad = document.querySelector(".datos-motherboard");
        const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datos ? datos.split(",") : [];
        const socketMotherboard = valoresMotherboard[1];
        console.log(socketMotherboard);
        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-procesador");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
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
        const idComponente = valores[10];

        if (motherboardCompatibilidad) {
            if (socketMotherboard != socket) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad detectada",
                    text: "El socket del procesador no es compatible con el de la tarjeta madre",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        dropzoneProcesador.innerHTML = ""; // Esto borra todo el contenido
        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('procesador');
        componenteAgregado.innerHTML = `
                <div draggable="true" class="datos drag-item-procesador">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>

            <input type="hidden" name="idProcesador" value ="${idComponente}" hidden>
            <button hidden class="datos-procesador" value="${socket},${tdp},${graficosIntegrados},${marca}">
            <button class="eliminar eliminar-procesador-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        const areaProcesador = document.querySelector('.area-procesador');
        const procesadorAMD = document.querySelector('.procesador-amd');
        const procesadorIntel = document.querySelector('.procesador-intel');
        areaProcesador.innerHTML = "";
        areaProcesador.appendChild(componenteAgregado);
        const btncerrar = document.querySelector('.eliminar-procesador-ensamblaje');
        if (marca === "AMD") {
            const procesadorfill = document.querySelector('.fill-amd');
            procesadorAMD.style.display = "block";
            procesadorIntel.style.display = "none";
            procesadorAMD.style.stroke = "#17202a";
            procesadorfill.style.fill = "#dc7633";
            eliminarComponente(btncerrar, componenteAgregado, dropzoneProcesador, procesadorAMD);
        } else {
            const procesadorfill = document.querySelector('.fill-intel');
            procesadorIntel.style.display = "block";
            procesadorAMD.style.display = "none";
            procesadorIntel.style.stroke = "#17202a";
            procesadorfill.style.fill = "#3498db";
            eliminarComponente(btncerrar, componenteAgregado, dropzoneProcesador, procesadorIntel);
        }
    });
}

function dragDisipador() {
    const draggableItemsdisipador = document.querySelectorAll(".drag-item-disipador");
    const dropzonedisipador = document.getElementById("drop-zone-disipador");

    draggableItemsdisipador.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            dropzonedisipador.style.stroke = "#0C70F2";
            dropzonedisipador.classList.add("dropzone-pulsando"); // Añadir clase de animación
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzonedisipador.classList.remove("dropzone-pulsando");
            dropzonedisipador.style.display = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-disipador');
            if (componenteAgregado) {
                dropzonedisipador.style.stroke = "#17202a";
            }
        });
    });

    dropzonedisipador.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzonedisipador.classList.add("hover");
    });

    dropzonedisipador.addEventListener("dragleave", () => {
        dropzonedisipador.classList.remove("hover");
    });

    dropzonedisipador.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");

        const procesador = document.querySelector(".datos-procesador");
        if (!procesador) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar primero el procesador",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-disipador')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }


        //Datos del gabinete para la compatibilidad
        const gabineteCompatibilidad = document.querySelector(".datos-gabinete");
        const datosGabinete = gabineteCompatibilidad ? gabineteCompatibilidad.value : null;
        const valoresGabinete = datosGabinete ? datosGabinete.split(",") : [];
        const soporteDisipadorGabinete = valoresGabinete[1];
        console.log(soporteDisipadorGabinete);

        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-disipador");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0];
        const marca = valores[1];
        const nombre = valores[2];
        const rpmMin = valores[3];
        const rpmMax = valores[4];
        const tamañoDisipador = valores[5];
        const tdp = valores[6];
        const imagen = valores[7];
        console.log(tamañoDisipador);

        if (tamañoDisipador > soporteDisipadorGabinete) {
            Swal.fire({
                icon: "warning",
                title: "Incompatibilidad detectada",
                text: "El disipador elegido excede el tamaño máximo permitido por el gabinete. Por favor, revisa las especificaciones de ambos componentes.",
                footer: '<a href="#">¿Cómo elegir un disipador compatible?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        dropzonedisipador.innerHTML = ""; // Esto borra todo el contenido
        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('disipador-datos')
        componenteAgregado.innerHTML = `
                <div draggable="true" class="datos drag-item-disipador ">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>
            <input type="hidden" name="idDisipador" value ="${idComponente}" hidden>
            <button hidden class="datos-disipador" value="${tamañoDisipador},${tdp}">
            <button class="eliminar eliminar-disipador-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop
        const areaDisipador = document.querySelector('.area-disipador');
        const procesadorAMD = document.querySelector('.procesador-amd');
        const procesadorIntel = document.querySelector('.procesador-intel');
        const disipador = document.querySelector('.disipador');
        areaDisipador.innerHTML = "";
        areaDisipador.appendChild(componenteAgregado);
        if (componenteAgregado) {
            disipador.style.display = "block";
            procesadorIntel.style.display = "none";
            procesadorAMD.style.display = "none";
        }
        const btncerrar = document.querySelector('.eliminar-disipador-ensamblaje');
        eliminarComponente(btncerrar, componenteAgregado, dropzonedisipador, disipador);
    });
}

function dragRam() {
    const draggableItemsram = document.querySelectorAll(".drag-item-ram");
    const dropzoneram = document.getElementById("drop-zone-ram");

    draggableItemsram.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            dropzoneram.classList.add("dropzone-pulsando"); // Añadir clase de animación
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzoneram.classList.remove("dropzone-pulsando");
            dropzoneram.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-ram');
            if (componenteAgregado) {
                dropzoneram.style.stroke = "#17202a";
            }
        });
    });

    dropzoneram.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneram.classList.add("hover");
    });

    dropzoneram.addEventListener("dragleave", () => {
        dropzoneram.classList.remove("hover");
    });

    dropzoneram.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        const motherboard = document.querySelector(".datos-motherboard");

        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar la tarjeta madre primero",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-ram')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta área",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        // Extraer valores del botón de la RAM
        const button = newElement.querySelector("button.info-ram");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0];
        const nombre = valores[1];
        const tipo = valores[2];
        const capacidad = valores[3];
        const frecuencia = valores[4];
        const tdp = valores[5];
        const marca = valores[7];
        const imagen = valores[6];

        // Verificar compatibilidad con la motherboard
        const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
        const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datos ? datos.split(",") : [];
        const tipoRamMotherboard = valoresMotherboard[2];
        const modulosRamMotherboard = valoresMotherboard[3];

        if (motherboardCompatibilidad) {
            if (tipoRamMotherboard != tipo) {
                Swal.fire({
                    icon: "warning",
                    title: "Error al ensamblar",
                    text: "Las tecnologías de la RAM no son compatibles con la tarjeta madre",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        dropzoneram.innerHTML = ""; // Limpiar la zona de drop

        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('ram-datos');
        componenteAgregado.innerHTML = `

        <div draggable="true" class="datos drag-item-ram ram">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
                        <select class="cantidadRAM" id="cantidad" name="cantidadRAM">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
            </div>
            
            <input type="hidden" name="idRAM" value ="${idComponente}" hidden>
            <button hidden class="datos-ram" value="${tipo}, ${capacidad},${tdp}">
            <button class="eliminar eliminar-ram-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        const areaRAM = document.querySelector('.area-ram');
        areaRAM.innerHTML = "";
        areaRAM.appendChild(componenteAgregado);

        const ram1 = document.querySelectorAll('.ram1'); // Selecciona todos los elementos con la clase 'ram1'
        ram1.forEach(element => {
            element.style.stroke = "#17202a";
            element.style.display = "block"; // Aplica el estilo a cada elemento
        });

        // Manejar la eliminación del componente
        const btncerrar = componenteAgregado.querySelector(".eliminar-ram-ensamblaje");
        eliminarComponente(btncerrar, componenteAgregado, dropzoneram);
    });

    // Validación global de selects de cantidad
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('cantidadRAM')) {
            const cantidadSeleccionada = parseInt(e.target.value, 10);
            // Obtener la cantidad máxima soportada por la motherboard
            const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
            const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
            const valoresMotherboard = datos ? datos.split(",") : [];
            const modulosRamMotherboard = parseInt(valoresMotherboard[3], 10);
            const maxRAMmotherboard = parseInt(valoresMotherboard[6], 10);

            const button = document.querySelector("button.info-ram");
            const buttonValue = button ? button.value : null;
            const valores = buttonValue ? buttonValue.split(",") : [];
            const capacidad = parseInt(valores[3], 10);

            // Validación de capacidad total de RAM
            const totalRAM = cantidadSeleccionada * capacidad;
            if (totalRAM > maxRAMmotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Capacidad de RAM excedida",
                    text: `La cantidad total de memoria RAM (${totalRAM} GB) supera el límite soportado por la tarjeta madre (${maxRAMmotherboard} GB). Verifica las especificaciones antes de continuar.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });

                // Restablecer el valor al máximo permitido basado en la capacidad
                const maxSeleccionable = Math.floor(maxRAMmotherboard / capacidad);
                e.target.value = maxSeleccionable;
                pintarRAM(maxSeleccionable);
                return;
            }
            // Validación de cantidad de módulos RAM
            if (cantidadSeleccionada > modulosRamMotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de módulos RAM excedido",
                    text: `La tarjeta madre solo soporta ${modulosRamMotherboard} módulo(s) de RAM.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });

                // Restablecer el valor al máximo permitido
                e.target.value = modulosRamMotherboard;
                pintarRAM(modulosRamMotherboard);
                return;
            }
            pintarRAM(cantidadSeleccionada);
        }
    });
}

function dragSATA() {
    const draggableItemsSATA = document.querySelectorAll(".drag-item-almacenamiento");
    const dropzoneSATA = document.getElementById("drop-zone-SATA");

    draggableItemsSATA.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            const botonInterno = e.target.querySelector(".info-almacenamiento");
            const valorTarjet = botonInterno ? botonInterno.value : null;
            const valores = valorTarjet ? valorTarjet.split(",") : [];
            const tipoAlmacenamiento = valores[2];
            console.log(tipoAlmacenamiento);
            if (tipoAlmacenamiento === 'HDD' || tipoAlmacenamiento === 'SSD') {
                dropzoneSATA.style.stroke = "#0C70F2";
                dropzoneSATA.classList.add("dropzone-pulsando"); // Añadir clase de animación
            }
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzoneSATA.classList.remove("dropzone-pulsando");
            dropzoneSATA.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-SATA');
            if (componenteAgregado) {
                dropzoneSATA.style.stroke = "#17202a";
            }
        });
    });

    dropzoneSATA.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneSATA.classList.add("hover");
    });

    dropzoneSATA.addEventListener("dragleave", () => {
        dropzoneSATA.classList.remove("hover");
    });


    dropzoneSATA.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        const motherboard = document.querySelector(".datos-motherboard");

        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar la tarjeta madre primero",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-almacenamiento')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-almacenamiento");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0];
        const nombre = valores[1];
        const tipo = valores[2];
        const capacidad = valores[3];
        const velocidadLectura = valores[4];
        const velocidadEscritura = valores[5];
        const marca = valores[7];
        const imagen = valores[6];

        const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
        const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datos ? datos.split(",") : [];
        const tipoSATAMotherboard = valoresMotherboard[2];
        const puertosSATAMotherboard = valoresMotherboard[4];

        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('HDD-datos');
        componenteAgregado.innerHTML = `
                <div draggable="true" class="datos drag-item-SATA">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
                <select class="cantidad${tipo}" name="cantidad${tipo}">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
            </div>
            <input type="hidden" name="id${tipo}" value ="${idComponente}" hidden>
            <button hidden class="datos-SATA" value="${tipo}">
            <button class="eliminar eliminar-${tipo}-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop
        if (tipo != 'HDD' && tipo != 'SSD') {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        const areaHDD = document.querySelector('.area-HDD');
        const areaSSD = document.querySelector('.area-SSD');
        const SATA = document.querySelector('.SATA');

        if (tipo === 'HDD') {
            areaHDD.innerHTML = "";
            const cantidadSSD = document.querySelector('.cantidadssd');
            if (cantidadSSD) {
                const cantSSD = cantidadSSD.value;
                if (cantSSD === puertosSATAMotherboard) {
                    Swal.fire({
                        icon: "warning",
                        title: "Límite de dispositivos SATA excedido",
                        text: `La tarjeta madre solo soporta ${puertosSATAMotherboard} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                        footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                        customClass: {
                            title: 'swal-custom-title',
                            htmlContainer: 'swal-custom-text',
                            footer: 'swal-custom-footer'
                        }
                    });
                    return;
                }
            }
            areaHDD.appendChild(componenteAgregado);
            if (componenteAgregado) {
                SATA.style.display = "block";
            }
            const btncerrar = document.querySelector(".eliminar-HDD-ensamblaje");
            eliminarComponente(btncerrar, componenteAgregado, dropzoneSATA, SATA);
        }
        if (tipo === 'SSD') {
            areaSSD.innerHTML = "";
            const cantidadHDD = document.querySelector('.cantidadhdd');
            if (cantidadHDD) {
                const cantHDD = cantidadHDD.value;
                if (cantHDD === puertosSATAMotherboard) {
                    Swal.fire({
                        icon: "warning",
                        title: "Límite de dispositivos SATA excedido",
                        text: `La tarjeta madre solo soporta ${puertosSATAMotherboard} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                        footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                        customClass: {
                            title: 'swal-custom-title',
                            htmlContainer: 'swal-custom-text',
                            footer: 'swal-custom-footer'
                        }
                    });
                    return;
                }
            }
            areaSSD.appendChild(componenteAgregado);
            if (componenteAgregado) {
                SATA.style.display = "block";
            }
            const btncerrar = document.querySelector(".eliminar-SSD-ensamblaje");
            eliminarComponente(btncerrar, componenteAgregado, dropzoneSATA, SATA);
        }
    });

    document.addEventListener('change', (e) => {
        const cantidadHDD = document.querySelector('.cantidadhdd');
        const cantidadSSD = document.querySelector('.cantidadssd');
        const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
        const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datos ? datos.split(",") : [];
        const puertosSATAMotherboard = valoresMotherboard[4];
        if (cantidadHDD && !cantidadSSD) {
            const cantHDD = cantidadHDD.value;
            if (cantHDD > puertosSATAMotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos SATA excedido",
                    text: `La tarjeta madre solo soporta ${puertosSATAMotherboard} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                cantidadHDD.value = puertosSATAMotherboard;
            }
        }
        if (cantidadSSD && !cantidadHDD) {
            const cantSSD = cantidadSSD.value;
            if (cantSSD > puertosSATAMotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos SATA excedido",
                    text: `La tarjeta madre solo soporta ${puertosSATAMotherboard} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                cantidadSSD.value = puertosSATAMotherboard;
            }
        }
        if (cantidadHDD && cantidadSSD) {
            const cantHDD = parseInt(cantidadHDD.value);
            const cantSSD = parseInt(cantidadSSD.value);
            const total = cantHDD + cantSSD;
            if (total > puertosSATAMotherboard) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos SATA excedido",
                    text: `La tarjeta madre solo soporta ${puertosSATAMotherboard} dispositivo(s) conectado(s) a los puertos SATA disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                cantidadSSD.value = parseInt(puertosSATAMotherboard / 2);
                cantidadHDD.value = parseInt(puertosSATAMotherboard / 2);
            }
        }
    });
}

function dragM2() {
    const draggableItemsM2 = document.querySelectorAll(".drag-item-almacenamiento");
    const dropzoneM2 = document.getElementById("drop-zone-M2");
    draggableItemsM2.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            const botonInterno = e.target.querySelector(".info-almacenamiento");
            const valorTarjet = botonInterno ? botonInterno.value : null;
            const valores = valorTarjet ? valorTarjet.split(",") : [];
            const tipoAlmacenamiento = valores[2];
            console.log(tipoAlmacenamiento);
            if (tipoAlmacenamiento === 'M.2') {
                dropzoneM2.style.stroke = "#0C70F2";
                dropzoneM2.classList.add("dropzone-pulsando"); // Añadir clase de animación
            }
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            dropzoneM2.classList.remove("dropzone-pulsando");
            dropzoneM2.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-M2');
            if (componenteAgregado) {
                dropzoneM2.style.stroke = "#17202a";
            }
        });
    });

    dropzoneM2.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzoneM2.classList.add("hover");
    });

    dropzoneM2.addEventListener("dragleave", () => {
        dropzoneM2.classList.remove("hover");
    });


    dropzoneM2.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        const motherboard = document.querySelector(".datos-motherboard");

        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar la tarjeta madre primero",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-almacenamiento')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-almacenamiento");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0];
        const nombre = valores[1];
        const tipo = valores[2];
        const capacidad = valores[3];
        const velocidadLectura = valores[4];
        const velocidadEscritura = valores[5];
        const marca = valores[7];
        const imagen = valores[6];

        const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
        const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
        const valoresMotherboard = datos ? datos.split(",") : [];
        const tipoM2Motherboard = valoresMotherboard[2];

        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('M2-datos');
        componenteAgregado.innerHTML = `
        
                <div draggable="true" class="datos drag-item-M2">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
                
                        <select class="cantidadM2" name="cantidadM2">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
            </div>
            <input type="hidden" name="idM2" value ="${idComponente}" hidden>
            <button hidden class="datos-M2" value="${tipo}">
            <button class="eliminar eliminar-M2-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop

        if (tipo != 'M.2') {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        const areaM2 = document.querySelector('.area-M2');
        const M2 = document.querySelector('.M2');
        const tornillo = document.querySelectorAll('.tornillo');
        areaM2.innerHTML = "";
        areaM2.appendChild(componenteAgregado);
        if (componenteAgregado) {
            M2.style.display = "block";
            tornillo.forEach((e) => {
                e.style.stroke = "#17202a";
            })
        }
        const btncerrar = document.querySelector(".eliminar-M2-ensamblaje");
        eliminarComponente(btncerrar, componenteAgregado, dropzoneM2, M2);
    });

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('cantidadM2')) {
            const cantidadSeleccionada = parseInt(e.target.value, 10);

            // Obtener la cantidad máxima soportada por la motherboard
            const motherboardCompatibilidad = document.querySelector("button.datos-motherboard");
            const datos = motherboardCompatibilidad ? motherboardCompatibilidad.value : null;
            const valoresMotherboard = datos ? datos.split(",") : [];
            const puertosM2Motherboard = valoresMotherboard[5];
            console.log(puertosM2Motherboard);

            if (cantidadSeleccionada > parseInt(puertosM2Motherboard, 10)) {
                Swal.fire({
                    icon: "warning",
                    title: "Límite de dispositivos SATA excedido",
                    text: `La tarjeta madre solo soporta ${puertosM2Motherboard} dispositivo(s) conectado(s) a los puertos M2 disponibles.`,
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });

                // Restablecer el valor al máximo permitido
                e.target.value = puertosM2Motherboard;
            }
        }
    });
}

function dragGrafica() {
    const draggableItemsgrafica = document.querySelectorAll(".drag-item-grafica");
    const dropzonegrafica = document.getElementById("drop-zone-grafica");
    //const grafica = document.querySelector('.datos-grafica');

    draggableItemsgrafica.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            const grafica = document.querySelector('.datos-grafica');
            if (grafica) {
                const graficaNvidia = document.querySelector('.grafica-nvidia');
                const graficaRadeon = document.querySelector('.grafica-radeon');
                graficaNvidia.style.transform = "translateX(100px)";
                graficaRadeon.style.transform = "translateX(100px)";
            }
            dropzonegrafica.style.stroke = "#0C70F2";
            dropzonegrafica.classList.add("dropzone-pulsando"); // Añadir clase de animación
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            const grafica = document.querySelector('.datos-grafica');
            if (grafica) {
                const graficaNvidia = document.querySelector('.grafica-nvidia');
                const graficaRadeon = document.querySelector('.grafica-radeon');
                graficaNvidia.style.transform = "translateX(0px)";
                graficaRadeon.style.transform = "translateX(0px)";
            }
            dropzonegrafica.classList.remove("dropzone-pulsando");
            dropzonegrafica.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-grafica');
            if (componenteAgregado) {
                dropzonegrafica.style.stroke = "#17202a";
            }
        });
    });

    dropzonegrafica.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzonegrafica.classList.add("hover");
    });

    dropzonegrafica.addEventListener("dragleave", () => {
        dropzonegrafica.classList.remove("hover");
    });

    dropzonegrafica.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");
        const motherboard = document.querySelector(".datos-motherboard");

        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "Debes de colocar la tarjeta madre primero",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            dropzonedisipador.style.stroke = "#e1e1e1";
            return;
        }

        if (!itemDrag.classList.contains('drag-item-grafica')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        //Datos del gabinete para la compatibilidad
        const gabineteCompatibilidad = document.querySelector(".datos-gabinete");
        const datosGabinete = gabineteCompatibilidad ? gabineteCompatibilidad.value : null;
        const valoresGabinete = datosGabinete ? datosGabinete.split(",") : [];
        const soportegraficaGabinete = valoresGabinete[2];
        console.log(soportegraficaGabinete);

        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-grafica");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0]
        const nombre = valores[1];
        const vram = valores[2];
        const tdp = valores[3];
        const numVentiladores = valores[4];
        const imagen = valores[5];
        const marca = valores[6];

        if (gabineteCompatibilidad) {
            if (numVentiladores > soportegraficaGabinete) {
                Swal.fire({
                    icon: "warning",
                    title: "Incompatibilidad de ventiladores",
                    text: `La tarjeta gráfica tiene más ventiladores de los que el gabinete puede soportar. El gabinete solo soporta hasta ${soportegraficaGabinete} ventiladores para la gráfica, mientras que la tarjeta gráfica tiene ${numVentiladores} ventiladores.`,
                    footer: '<a href="#">¿Cómo elegir un gabinete compatible con la tarjeta gráfica?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        dropzonegrafica.innerHTML = ""; // Esto borra todo el contenido
        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('grafica-datos')
        componenteAgregado.innerHTML = `
                <div draggable="true" class="datos drag-item-grafica">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>
            <input type="hidden" name="idGrafica" value ="${idComponente}" hidden>
            <button hidden class="datos-grafica" value="${tdp},${numVentiladores}">
            <button class="eliminar eliminar-grafica-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop
        const areaGrafica = document.querySelector('.area-grafica');
        const graficaNvidia = document.querySelector('.grafica-nvidia');
        const graficaRadeon = document.querySelector('.grafica-radeon');
        areaGrafica.innerHTML = "";
        areaGrafica.appendChild(componenteAgregado);

        if (componenteAgregado) {
            if (marca === "Radeon") {
                graficaRadeon.style.display = "block";
                graficaNvidia.style.display = "none"
            }
            if (marca === "Nvidia") {
                graficaNvidia.style.display = "block";
                graficaRadeon.style.display = "none"
            }
        }
        const btncerrar = document.querySelector('.eliminar-grafica-ensamblaje');
        eliminarComponente(btncerrar, componenteAgregado, dropzonegrafica);
    });


}

function dragFuente() {
    const draggableItemsfuente = document.querySelectorAll(".drag-item-fuente");
    const dropzonefuente = document.getElementById("drop-zone-fuente");

    draggableItemsfuente.forEach((item) => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.outerHTML);
            const fuente = document.querySelector('.datos-fuente');
            if (fuente) {
                const fuentePartes = document.querySelectorAll('.fuente-partes');
                fuentePartes.forEach((e) => {
                    e.style.stroke = "#0C70F2";
                    e.style.fill = "#0C70F2";
                    e.classList.add("dropzone-pulsando");
                })
            }
            dropzonefuente.style.stroke = "#0C70F2";
            dropzonefuente.classList.add("dropzone-pulsando"); // Añadir clase de animación
            console.log("Drag iniciado: ", e.target);
        });

        item.addEventListener("dragend", () => {
            // Restaurar el borde al color gris después de terminar el arrastre
            const fuente = document.querySelector('.datos-fuente');
            if (fuente) {
                const fuentePartes = document.querySelectorAll('.fuente-partes');
                fuentePartes.forEach((e) => {
                    e.style.stroke = "#17202a";
                    e.style.fill = "#17202a";
                    e.classList.remove("dropzone-pulsando");
                })
            }
            dropzonefuente.classList.remove("dropzone-pulsando");
            dropzonefuente.style.stroke = "#e1e1e1";
            const componenteAgregado = document.querySelector('.datos-fuente');
            if (componenteAgregado) {
                dropzonefuente.style.stroke = "#17202a";
            }
        });
    });

    dropzonefuente.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzonefuente.classList.add("hover");
    });

    dropzonefuente.addEventListener("dragleave", () => {
        dropzonefuente.classList.remove("hover");
    });

    dropzonefuente.addEventListener("drop", (e) => {
        e.preventDefault();

        const draggedHTML = e.dataTransfer.getData("text/plain");
        const newElement = document.createElement("div");
        newElement.innerHTML = draggedHTML;
        const itemDrag = newElement.querySelector("DIV");

        if (!itemDrag.classList.contains('drag-item-fuente')) {
            Swal.fire({
                icon: "warning",
                title: "Error al ensamblar",
                text: "No puedes colocar el componente en esta area",
                footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        //Datos del gabinete para la compatibilidad
        const gabineteCompatibilidad = document.querySelector(".datos-gabinete");
        const datosGabinete = gabineteCompatibilidad ? gabineteCompatibilidad.value : null;
        const valoresGabinete = datosGabinete ? datosGabinete.split(",") : [];
        const soportefuenteGabinete = valoresGabinete[1];
        console.log(soportefuenteGabinete);

        const procesadorCompatibilidad = document.querySelector(".datos-procesador");
        const datosprocesador = procesadorCompatibilidad ? procesadorCompatibilidad.value : null;
        const valoresprocesador = datosprocesador ? datosprocesador.split(",") : [];
        const tdpProcesador = valoresprocesador[1];

        const disipadorCompatibilidad = document.querySelector(".datos-disipador");
        const datosdisipador = disipadorCompatibilidad ? disipadorCompatibilidad.value : null;
        const valoresdisipador = datosdisipador ? datosdisipador.split(",") : [];
        const tdpdisipador = valoresdisipador[1];

        const ramCompatibilidad = document.querySelector(".datos-ram");
        const datosram = ramCompatibilidad ? ramCompatibilidad.value : null;
        const valoresram = datosram ? datosram.split(",") : [];
        const tdpram = valoresram[2];

        const graficaCompatibilidad = document.querySelector(".datos-grafica");
        const datosgrafica = graficaCompatibilidad ? graficaCompatibilidad.value : null;
        const valoresgrafica = datosgrafica ? datosgrafica.split(",") : [];
        const tdpgrafica = valoresgrafica[0];


        const tdpProcesadorInt = parseInt(tdpProcesador);
        const tdpDisipadorInt = parseInt(tdpdisipador);
        const tdpramInt = parseInt(tdpram);
        const tdpgraficaInt = parseInt(tdpgrafica);

        // Acceder al botón dentro de newElement

        const button = newElement.querySelector("button.info-fuente");
        const buttonValue = button ? button.value : null;
        const valores = buttonValue ? buttonValue.split(",") : [];
        const idComponente = valores[0]
        const nombre = valores[1];
        const potencia = valores[2];
        const certificacion = valores[3];
        const imagen = valores[4];
        const marca = valores[5];

        if (procesadorCompatibilidad && disipadorCompatibilidad && ramCompatibilidad && graficaCompatibilidad
            && tdpProcesadorInt) {
            const totaltdp = tdpProcesadorInt + tdpDisipadorInt + tdpramInt + tdpgraficaInt;
            const totalTDP = totaltdp + 200;

            if (potencia < totalTDP) {
                Swal.fire({
                    icon: "warning",
                    title: "Error al ensamblar",
                    text: `La potencia de la fuente de alimentación (${potencia} W) es insuficiente para soportar el consumo total de los componentes (${totalTDP} W). Verifica los requisitos de potencia y selecciona una fuente adecuada.`,
                    footer: '<a href="#">¿Cómo calcular la potencia adecuada para tu PC?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }
        dropzonefuente.innerHTML = ""; // Esto borra todo el contenido
        // Crear un nuevo componente con los valores extraídos
        const componenteAgregado = document.createElement('DIV');
        componenteAgregado.classList.add('fuente-datos');
        componenteAgregado.innerHTML = `
                <div draggable="true" class="datos drag-item-fuente">
            <div class="img-tex">
                <img src="../../imagenes/${imagen}" alt="">
                <div>
                    <label class="buscar-card marca" for="">${marca}</label>
                    <label class="buscar-card" for="">${nombre}</label>
                </div>
            </div>
            <input type="hidden" name="idFuente" value ="${idComponente}" hidden>
            <button hidden class="datos-fuente" value="">
            <button class="eliminar eliminar-fuente-ensamblaje"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            </div>
        `;
        // Añadir el componente a la zona de drop
        const areaFuente = document.querySelector('.area-fuente');
        const fuente = document.querySelector('.fuente');
        areaFuente.innerHTML = "";
        areaFuente.appendChild(componenteAgregado);
        if (componenteAgregado) {
            fuente.style.display = "block";
            const indicacion = document.querySelector('.indicacion-ensamblaje');
            indicacion.style.display = "none";
        }
        const btncerrar = document.querySelector('.eliminar-fuente-ensamblaje');
        eliminarComponente(btncerrar, componenteAgregado, dropzonefuente, fuente);
    });


}
//Funcion reutilizable para eliminar el componente del ensamblaje
function eliminarComponente(boton, componenteAgregado, referencia, contorno) {
    boton.addEventListener('click', function (event) {
        // Prevenir el comportamiento por defecto del botón (como el envío de un formulario)
        event.preventDefault();
        const procesador = document.querySelector('.datos-procesador');
        const disipador = document.querySelector('.datos-disipador');
        const ram = document.querySelector('.datos-ram');
        const grafica = document.querySelector('.datos-grafica');
        const M2 = document.querySelector('.datos-M2');

        //Comprobar que no existan componentes en la tarjeta madre
        if (boton.classList.contains('eliminar-gabinete-ensamblaje')) {
            const partesGabinete = document.querySelectorAll('.partes-gabinete');
            partesGabinete.forEach((e) => {
                e.style.stroke = "#e1e1e1";
            })
            const indicacion = document.querySelector('.indicacion-ensamblaje');
            indicacion.style.display = "block";
            componenteAgregado.remove();
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-motherboard-ensamblaje')) {
            if (procesador || disipador || ram || grafica || M2) {
                Swal.fire({
                    icon: "warning",
                    title: "Error al ensamblar",
                    text: "Primero debes retirar todos los componentes instalados antes de quitar la placa base.",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
            componenteAgregado.remove();
            const indicacion = document.querySelector('.indicacion-ensamblaje');
            indicacion.style.display = "block";
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-procesador-ensamblaje')) {
            const procesadorAMD = document.querySelector('.procesador-amd');
            const procesadorIntel = document.querySelector('.procesador-intel');
            const datos = procesador ? procesador.value : null;
            const valoresProcesador = datos ? datos.split(",") : [];
            const marca = valoresProcesador[3];
            if (marca === "AMD") {
                const procesadorfill = document.querySelector('.fill-amd');
                procesadorAMD.style.display = "block";
                procesadorIntel.style.display = "none";
                procesadorAMD.style.stroke = "#17202a";
                procesadorfill.style.fill = "#dc7633";
            } else {
                const procesadorfill = document.querySelector('.fill-intel');
                procesadorIntel.style.display = "block";
                procesadorAMD.style.display = "none";
                procesadorIntel.style.stroke = "#17202a";
                procesadorfill.style.fill = "#3498db";
            }
            if (disipador) {
                Swal.fire({
                    icon: "warning",
                    title: "Error al ensamblar",
                    text: "Primero debes retirar el disipador para poder retirar el procesador",
                    footer: '<a href="#">¿Cómo saber qué componentes son compatibles?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                procesadorAMD.style.display = "none";
                procesadorIntel.style.display = "none";
                return;
            }

            componenteAgregado.remove();
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-disipador-ensamblaje')) {
            const procesadorAMD = document.querySelector('.procesador-amd');
            const procesadorIntel = document.querySelector('.procesador-intel');
            const datos = procesador ? procesador.value : null;
            const valoresProcesador = datos ? datos.split(",") : [];
            const marca = valoresProcesador[3];
            if (marca === "AMD") {
                const procesadorfill = document.querySelector('.fill-amd');
                procesadorAMD.style.display = "block";
                procesadorIntel.style.display = "none";
                procesadorAMD.style.stroke = "#17202a";
                procesadorfill.style.fill = "#dc7633";
            } else {
                const procesadorfill = document.querySelector('.fill-intel');
                procesadorIntel.style.display = "block";
                procesadorAMD.style.display = "none";
                procesadorIntel.style.stroke = "#17202a";
                procesadorfill.style.fill = "#3498db";
            }

            componenteAgregado.remove();
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-ram-ensamblaje')) {
            const ram1 = document.querySelectorAll('.ram1');
            const ram2 = document.querySelectorAll('.ram2');
            const ram3 = document.querySelectorAll('.ram3');
            const ram4 = document.querySelectorAll('.ram4');
            ram1.forEach(element => {
                element.style.display = "none";
                ram1[0].style.display = "block";
            });
            ram2.forEach(element => {
                element.style.display = "none";
                ram2[0].style.display = "block";
                ram2[0].style.stroke = "#e1e1e1";
            });
            ram3.forEach(element => {
                element.style.display = "none";
                ram3[0].style.display = "block";
                ram3[0].style.stroke = "#e1e1e1";
            });
            ram4.forEach(element => {
                element.style.display = "none";
                ram4[0].style.display = "block";
                ram4[0].style.stroke = "#e1e1e1";
            });

            componenteAgregado.remove();
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-HDD-ensamblaje')) {
            const ssd = document.querySelector('.eliminar-SSD-ensamblaje');
            if (ssd) {
                contorno.style.display = "block";
            } else {
                contorno.style.display = "none";
                referencia.style.stroke = "#e1e1e1";
            }
            componenteAgregado.remove();
        }
        if (boton.classList.contains('eliminar-SSD-ensamblaje')) {
            const hdd = document.querySelector('.eliminar-HDD-ensamblaje');
            if (hdd) {
                contorno.style.display = "block";
            } else {
                contorno.style.display = "none";
                referencia.style.stroke = "#e1e1e1";
            }
            componenteAgregado.remove();
        }
        if (boton.classList.contains('eliminar-M2-ensamblaje')) {
            componenteAgregado.remove();
            const tornillo = document.querySelectorAll('.tornillo');
            tornillo.forEach((e) => {
                e.style.stroke = "#e1e1e1";
            })
            if (contorno) {
                contorno.style.display = "none";
            }
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-grafica-ensamblaje')) {
            const graficaNvidia = document.querySelector('.grafica-nvidia');
            const graficaRadeon = document.querySelector('.grafica-radeon');
            graficaNvidia.style.display = "none";
            graficaRadeon.style.display = "none";
            componenteAgregado.remove();
            referencia.style.stroke = "#e1e1e1";
        }
        if (boton.classList.contains('eliminar-fuente-ensamblaje')) {
            componenteAgregado.remove();
            contorno.style.display = "none";
            referencia.style.stroke = "#e1e1e1";
            const indicacion = document.querySelector('.indicacion-ensamblaje');
            indicacion.style.display = "block";
        }
    });
}

function btnEnsamblar() {
    const btnEnsamblar = document.querySelector('.btn-ensamblar');
    btnEnsamblar.addEventListener('click', (e) => {
        const gabinete = document.querySelector('.datos-gabinete');
        const motherboard = document.querySelector('.datos-motherboard');
        const procesador = document.querySelector('.datos-procesador');
        const disipador = document.querySelector('.datos-disipador');
        const ram = document.querySelector('.datos-ram');
        const datosSATA = document.querySelector('.datos-SATA');
        const datosM2 = document.querySelector('.datos-M2');
        const grafica = document.querySelector('.datos-grafica');
        const fuente = document.querySelector('.datos-fuente');

        const datosProcesador = procesador ? procesador.value : null;
        const valoresProcesador = datosProcesador ? datosProcesador.split(",") : [];
        const graficosIntegrados = valoresProcesador[2];

        if (!gabinete) {
            Swal.fire({
                icon: "warning",
                title: "Gabinete no detectado",
                text: "No se ha colocado un gabinete en el ensamblaje. Por favor, selecciona y arrastra un gabinete compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar un gabinete primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!motherboard) {
            Swal.fire({
                icon: "warning",
                title: "Tarjeta madre no detectada",
                text: "No se ha colocado una tarjeta madre en el ensamblaje. Por favor, selecciona y arrastra una tarjeta madre compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar una tarjeta madre primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!procesador) {
            Swal.fire({
                icon: "warning",
                title: "Procesador no detectada",
                text: "No se ha colocado un procesador en el ensamblaje. Por favor, selecciona y arrastra un procesador compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar un procesador primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!disipador) {
            Swal.fire({
                icon: "warning",
                title: "Disipador no detectada",
                text: "No se ha colocado un disipador en el ensamblaje. Por favor, selecciona y arrastra un disipador compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar un disipador primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!ram) {
            Swal.fire({
                icon: "warning",
                title: "Memoria RAM no detectada",
                text: "No se ha colocado una memoria RAM en el ensamblaje. Por favor, selecciona y arrastra una memoria RAM compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar una memoria RAM primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!datosM2 && !datosSATA) {
            Swal.fire({
                icon: "warning",
                title: "Almacenamiento no detectado",
                text: "No se ha colocado un almacenamiento en el ensamblaje. Por favor, selecciona y arrastra un almacenamiento compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar un almacenamiento primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }
        if (!fuente) {
            Swal.fire({
                icon: "warning",
                title: "Fuente de poder no detectada",
                text: "No se ha colocado una fuente de poder en el ensamblaje. Por favor, selecciona y arrastra una fuente de poder compatible antes de continuar.",
                footer: '<a href="#">¿Por qué es importante seleccionar una fuente de poder primero?</a>',
                customClass: {
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    footer: 'swal-custom-footer'
                }
            });
            return;
        }

        if (!grafica) {
            if (graficosIntegrados == 0) {
                Swal.fire({
                    icon: "warning",
                    title: "Gráfica no detectada",
                    text: "No se ha colocado una tarjeta gráfica ni el procesador tiene gráficos integrados. Por favor, selecciona y coloca una tarjeta gráfica compatible o un procesador con gráficos integrados antes de continuar.",
                    footer: '<a href="#">¿Por qué es importante tener una tarjeta gráfica o gráficos integrados?</a>',
                    customClass: {
                        title: 'swal-custom-title',
                        htmlContainer: 'swal-custom-text',
                        footer: 'swal-custom-footer'
                    }
                });
                return;
            }
        }

        const modalEnsamblaje = document.createElement('DIV');
        modalEnsamblaje.classList.add('modal');
        modalEnsamblaje.innerHTML = `
        <div class="formulario-modal componente">
                    <h2>Introduzca un nombre al ensamblaje</h2>
                    <div class="input-nombre-ensamblaje">
                        <label for="">Nombre del ensamblaje</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre de su ensamblaje" id="nombre-ensamblaje">
                    </div>
                <div class ="acciones">
                    <button class ="cerrar-modal" type="button">Cancelar</button>
                    <input id="submit" type="submit" class="submit-crear-ensamblaje" value="Guardar">
                </div>
        </div>
        `;

        setTimeout(() => {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('animar');
        }, 0);

        modalEnsamblaje.addEventListener('click', function (e) {
            //e.preventDefault();
            if (e.target.classList.contains('cerrar-modal')) {
                const formulario = document.querySelector('.formulario-modal');
                formulario.classList.add('cerrar');
                setTimeout(() => {
                    modalEnsamblaje.remove();
                }, 500);
            }
            if (e.target.classList.contains('submit-crear-ensamblaje')) {
                const nombreEnsamblaje = document.querySelector('#nombre-ensamblaje').value;
                if (!nombreEnsamblaje) {
                    // Mostrar alerta de error
                    document.getElementById('submit').type = 'button';
                    mostrarAlerta('El nombre del ensamblaje es obligatorio', 'error', document.querySelector('.formulario-modal h2'));
                    return;
                } else {
                    document.getElementById('submit').type = 'submit';
                }
            }
        })
        // Añadir el componente a la zona de drop
        document.querySelector('form').appendChild(modalEnsamblaje);
    });
}
//Muestra un mensaje en la interfaz
function mostrarAlerta(mensaje, tipo, referencia) {
    //Previene la creacion de multiples alertas
    const alertaPrevia = document.querySelector('.alerta');
    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', tipo);
    alerta.textContent = mensaje;
    referencia.appendChild(alerta);

    //Eliminar la alerta despues de 5 segundos

    setTimeout(() => {
        alerta.remove();
    }, 5000)
}
//Pinta los modulos de ram
function pintarRAM(cantidadSeleccionada) {
    const ram1 = document.querySelectorAll('.ram1');
    const ram2 = document.querySelectorAll('.ram2');
    const ram3 = document.querySelectorAll('.ram3');
    const ram4 = document.querySelectorAll('.ram4');

    // Reinicia todos los módulos
    [ram1, ram2, ram3, ram4].forEach((ramSet, index) => {
        ramSet.forEach(element => {
            element.style.display = "none"; // Oculta todos los módulos
            element.style.stroke = "#e1e1e1"; // Restablece el color por defecto
        });
        if (ramSet[0]) {
            ramSet[0].style.display = "block"; // Muestra siempre el primero como placeholder
        }
    });

    // Pinta los módulos seleccionados
    if (cantidadSeleccionada >= 1) {
        ram1.forEach(element => {
            element.style.display = "block";
            element.style.stroke = "#17202a";
        });
    }
    if (cantidadSeleccionada >= 2) {
        ram2.forEach(element => {
            element.style.display = "block";
            element.style.stroke = "#17202a";
        });
    }
    if (cantidadSeleccionada >= 3) {
        ram3.forEach(element => {
            element.style.display = "block";
            element.style.stroke = "#17202a";
        });
    }
    if (cantidadSeleccionada === 4) {
        ram4.forEach(element => {
            element.style.display = "block";
            element.style.stroke = "#17202a";
        });
    }
}

function btnLimpiar() {
    const btnLimpiar = document.querySelector('.btn-limpiar');
    btnLimpiar.addEventListener('click', function (e) {
        e.preventDefault();
        //Eliminar Gabinete
        const gabinete = document.querySelector('.gabinete');
        const gabineteContorno = document.getElementById('drop-zone-gabinete');
        const partesGabinete = document.querySelectorAll('.partes-gabinete');
        partesGabinete.forEach((e) => {
            e.style.stroke = "#e1e1e1";
        })
        if (gabineteContorno) {
            gabineteContorno.style.stroke = "#e1e1e1";
        }

        //Eliminar Motherboard
        const motherboard = document.querySelector('.motherboard');
        const dropzoneMotherboard = document.getElementById('drop-zone-motherboard');
        dropzoneMotherboard.style.stroke = "#e1e1e1";

        //Eliminar Procesador
        const procesador = document.querySelector('.procesador');
        const dropzoneProcesador = document.getElementById('drop-zone-procesador');
        const AMD = document.querySelector('.procesador-amd');
        const intel = document.querySelector('.procesador-intel');
        AMD.style.display = "none";
        intel.style.display = "none";
        dropzoneProcesador.style.stroke = "#e1e1e1";

        //Eliminar Disipador
        const disipador = document.querySelector('.disipador');
        const disipadorDatos = document.querySelector('.disipador-datos');
        const disipadorDropzone = document.getElementById('drop-zone-disipador');
        disipador.style.display = "none";
        disipadorDropzone.style.stroke = "#e1e1e1";

        //Eliminar RAMs
        const ramDatos = document.querySelector('.ram-datos');
        const partesRAM = document.querySelectorAll('.ram');
        const ram1 = document.querySelector('.ram1');
        const ram2 = document.querySelector('.ram2');
        const ram3 = document.querySelector('.ram3');
        const ram4 = document.querySelector('.ram4');
        ram1.style.stroke = "#e1e1e1";
        ram2.style.stroke = "#e1e1e1";
        ram3.style.stroke = "#e1e1e1";
        ram4.style.stroke = "#e1e1e1";
        partesRAM.forEach((e) => {
            e.style.stroke = "#e1e1e1";
            e.style.display = "none";
        })

        //Eliminar M2
        const M2datos = document.querySelector('.M2-datos');
        const dropzoneM2 = document.getElementById('drop-zone-M2');
        const M2 = document.querySelector('.M2');
        const tornillos = document.querySelectorAll('.tornillo');
        tornillos.forEach((e) => {
            e.style.stroke = "#e1e1e1";
        })
        dropzoneM2.style.stroke = "#e1e1e1";
        M2.style.display = "none";

        //Eliminar SATA
        const HDDdatos = document.querySelector('.HDD-datos');
        const HDD = document.querySelector('.SATA');
        const dropzoneHDD = document.getElementById('drop-zone-SATA');
        HDD.style.display = "none";
        dropzoneHDD.style.stroke = "#e1e1e1";

        //Eliminar SSD
        const SSDdatos = document.querySelector('.SSD-datos');

        //Eliminar Grafica
        const graficaDatos = document.querySelector('.grafica-datos')
        const dropzoneGrafica = document.getElementById('drop-zone-grafica');
        const graficaNvidia = document.querySelector('.grafica-nvidia');
        const graficaRadeon = document.querySelector('.grafica-radeon');
        graficaNvidia.style.display = "none";
        graficaRadeon.style.display = "none";
        dropzoneGrafica.style.stroke = "#e1e1e1";

        //Eliminar Fuente
        const fuenteDatos = document.querySelector('.fuente-datos')
        const fuente = document.querySelector('.fuente')
        const dropzoneFuente = document.getElementById('drop-zone-fuente');
        fuente.style.display = "none";
        dropzoneFuente.style.stroke = "#e1e1e1";


        const indicacion = document.querySelector('.indicacion-ensamblaje');
        indicacion.style.display = "block";

        if (gabinete) {
            gabinete.remove();
        }
        if (motherboard) {
            motherboard.remove();
        }
        if (procesador) {
            procesador.remove();
        }
        if (disipadorDatos) {
            disipadorDatos.remove();
        }
        if (ramDatos) {
            ramDatos.remove();
        }
        if (M2datos) {
            M2datos.remove();
        }
        if (HDDdatos) {
            HDDdatos.remove();
        }
        if (SSDdatos) {
            SSDdatos.remove();
        }
        if (graficaDatos) {
            graficaDatos.remove();
        }
        if (fuenteDatos) {
            fuenteDatos.remove();
        }
    })
}
