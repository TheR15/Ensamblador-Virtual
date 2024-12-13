document.addEventListener('DOMContentLoaded', function () {
    ventanaModal();
})

function ventanaModal() {
    const nuevoComponenteBtn = document.querySelector('.nuevoComponentebtn');
    nuevoComponenteBtn.addEventListener('click', abrirModal);
}

function abrirModal() {
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
                <div class="formulario-modal">
                    <h2>Selecciona el componente</h2>
                    <div class="componentes">
                        <button class = "procesador"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                        </svg> Procesador </button>
                        <button class = "motherboard"> <img src="../img/tarjeta-madre.svg" alt="">Motherboard </button>
                        <button class = "disipador"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                            <path d="M12 12v.01"></path>
                        </svg>Disipadores </button>
                        <button class = "ram"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="12" x2="2" y2="12"></line>
                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            <line x1="6" y1="16" x2="6.01" y2="16"></line>
                            <line x1="10" y1="16" x2="10.01" y2="16"></line>
                        </svg>Memorias Ram </button>
                        <button class = "almacenamiento"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="12" x2="2" y2="12"></line>
                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            <line x1="6" y1="16" x2="6.01" y2="16"></line>
                            <line x1="10" y1="16" x2="10.01" y2="16"></line>
                        </svg>Almacenamiento </button>
                        <button class = "grafica"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                            <line x1="12" y1="16" x2="12" y2="20"></line>
                            <line x1="8" y1="20" x2="16" y2="20"></line>
                            <polyline points="8 8 12 12 16 8"></polyline>
                        </svg>Tarjetas Graficas </button>
                        <button class = "gabinete"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                        </svg>Gabinentes </button>
                        <button class = "fuente-de-poder"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                            <line x1="12" y1="2" x2="12" y2="12"></line>
                        </svg>Fuentes de poder </button>
                    </div>
                    <button class = "cerrar-modal">Cancelar</button>
                </div>
        `;

    //Aparece la ventana modal
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);


    modal.addEventListener('click', function (e) {
        e.preventDefault();

        //Cerramos el modal
        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modal.remove();
            }, 500);
        }

        if (e.target.classList.contains('procesador')) {
            modal.remove();
            modalProcesador();
        }
        if (e.target.classList.contains('disipador')) {
            modal.remove();
            modalDisipador();
        }
        if (e.target.classList.contains('motherboard')) {
            modal.remove();
            modalMotherboard();
        }
        if (e.target.classList.contains('ram')) {
            modal.remove();
            modalRam();
        }
        if (e.target.classList.contains('almacenamiento')) {
            modal.remove();
            modalAlmacenamiento();
        }
        if (e.target.classList.contains('grafica')) {
            modal.remove();
            modalGrafica();
        }
        if (e.target.classList.contains('gabinete')) {
            modal.remove();
            modalGabinete();
        }
        if (e.target.classList.contains('fuente-de-poder')) {
            modal.remove();
            modalFuentePoder();
        }
    })

    //Agrega la ventana modal en el body
    document.querySelector('body').appendChild(modal);
}

//Modales

function modalProcesador() {
    const modalProcesador = document.createElement('DIV');
    modalProcesador.classList.add('modal');
    modalProcesador.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Procesador </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="AMD">AMD</option>
                            <option value="Intel">Intel</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el modelo" id="nombre">
                    </div>
                    <div>
                        <label for="">Frecuencia base</label>
                        <input type="number" name="frecuenciaBase" id="frecuenciaBase" step="0.01" placeholder="Introduce la frecuencia base" min="1" max="10">
                    </div>
                    <div>
                        <label for="">Frecuencia maxima</label>
                        <input type="number" name="frecuenciaMax" id="frecuenciaMax" step="0.01" placeholder="Introduce la frecuencia maxima" min="1" max="10">
                    </div>
                    <div>
                        <label for="">Número de nucleos</label>
                        <input type="number" name="nucleos" placeholder="Ingrese el numero de nucleos" id="nucleos">
                    </div>
                    <div>
                        <label for="">Número de Hilos</label>
                        <input type="number" name="hilos" placeholder="Ingrese el numero de hilos" id="hilos">
                    </div>
                    <div>
                        <label for="">TDP (Consumo)</label>
                        <input type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp">
                    </div>
                    <div>
                        <label for="">Socket</label>
                        <select name="socket" id="socket" required>
                            <option value="" disabled selected>--Seleccione el socket--</option>
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
                    <div class="graficos-integrados">
                        <label for="">Graficos Integrados</label>
                        <select name="graficosIntegrados" id="graficosIntegrados" required>
                            <option value=""disabled selected>--Seleccione una opcion--</option>
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="procesador">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalProcesador.addEventListener('click', function (e) {
        //e.preventDefault();
        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalProcesador.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalProcesador.classList.add('cerrar');

            setTimeout(() => {
                modalProcesador.remove();
                abrirModal();
            }, 0);
        }

        document.querySelector('#marca').addEventListener('change', function () {
            const marca = this.value;
            const amdGroup = document.querySelector('#amd');
            const intelGroup = document.querySelector('#intel');

            // Oculta ambos optgroup
            amdGroup.style.display = 'none';
            intelGroup.style.display = 'none';

            // Muestra el optgroup adecuado según la marca seleccionada
            if (marca === 'AMD') {
                amdGroup.style.display = 'block';
            } else if (marca === 'Intel') {
                intelGroup.style.display = 'block';
            }
        });
        //Cuando doy clic en submit
        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarProcesador();
        }
    })
    document.querySelector('body').appendChild(modalProcesador);
}

function modalDisipador() {
    const modalDisipador = document.createElement('DIV');
    modalDisipador.classList.add('modal');
    modalDisipador.innerHTML = `
            <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Disipador </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Cooler Master">Cooler Master</option>
                            <option value="NZXT">NZXT</option>
                            <option value="AeroCool">AeroCool</option>
                            <option value="Acteck">Acteck</option>
                            <option value="Eagle Warrior">Eagle Warrior</option>
                            <option value="Thermaltake">Thermaltake</option>
                            <option value="Enermax">Enermax</option>
                            <option value="Gigabyte">Gigabyte</option>
                            <option value="EVGA">EVGA</option>
                            <option value="Deep Cool">Deep Cool</option>
                            <option value="XPG">XPG</option>
                            <option value="Cougar">Cougar</option>
                            <option value="Yeyian">Yeyian</option>
                            <option value="Game Factor">Game Factor</option>
                            <option value="Munfrost">Munfrost</option>
                            <option value="Asus">Asus</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">RPM Minima</label>
                        <input type="number" name="rpmMin" id="rpmMin" step="0.01" placeholder="Ingrese el rpm minimo">
                    </div>
                    <div>
                        <label for="">RPM Maxima</label>
                        <input type="number" name="rpmMax" placeholder="Ingrese el rpm maximo" id="rpmMax">
                    </div>
                    <div>
                        <label for="">Tamaño</label>
                        <input type="number" name="tamaño" placeholder="Ingrese el tamaño" id="tamaño">
                    </div>
                    <div>
                        <label for="">TDP (Consumo)</label>
                        <input type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="disipador">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalDisipador.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalDisipador.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalDisipador.classList.add('cerrar');

            setTimeout(() => {
                modalDisipador.remove();
                abrirModal();
            }, 0);
        }

        //Cuando doy clic en submit
        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarDisipador();
        }
    })

    document.querySelector('body').appendChild(modalDisipador);
}

function modalMotherboard() {
    const modalMotherboard = document.createElement('DIV');
    modalMotherboard.classList.add('modal');
    modalMotherboard.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Motherboard </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="Gigabyte">Gigabyte</option>
                            <option value="Asus">Asus</option>
                            <option value="Asrock">Asrock</option>
                            <option value="ECS">ECS</option>
                            <option value="Biostar">Biostar</option>
                            <option value="MSI">MSI</option>
                            <option value="Aorus">Aorus</option>
                            <option value="Foxconn">Foxconn</option>
                            <option value="ROG">ROG</option>
                            <option value="NZXT">NZXT</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el modelo" id="nombre">
                    </div>
                    <div>
                        <label for="socket">Socket</label>
                        <select name="socket" id="socket" required>
                            <option value="" disabled selected>--Seleccione el socket--</option>
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
                            <optgroup label="AMD">
                                <option value="A620">A620</option>
                                <option value="B650">B650</option>
                                <option value="B650E">B650E</option>
                                <option value="X670">X670</option>
                                <option value="X670E">X670E</option>
                                <option value="A520">A520</option>
                                <option value="B550">B550</option>
                                <option value="X570">X570</option>
                                <option value="X570S">X570S</option>
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
                        <input type="number" name="modulosRam" placeholder="Ingrese cuantos modulos de ram tiene" id="modulosram">
                    </div>
                    <div>
                        <label for="">Tipo de RAM</label>
                        <select name="tipoRam" id="tiporam">
                            <option value="" disabled selected>--Seleccione el tipo de ram--</option>
                            <option value="DDR2">DDR2</option>
                            <option value="DDR3">DDR3</option>
                            <option value="DDR4">DDR4</option>
                            <option value="DDR5">DDR5</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Ram Maxima</label>
                        <select name="maxRam" id="maxRam" required>
                            <option value="" disabled selected>--Seleccione la capacidad maxima de ram--</option>
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
                            <option value=""disabled selected>--Seleccione la cantidad de puertos SATA --</option>
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
                            <option value=""disabled selected>--Seleccione la cantidad de puertos SATA --</option>
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
                            <option value="1 PCIE">1 PCIE</option>
                            <option value="2Way Sli">2Way Sli</option>
                            <option value="2Way CFX">2Way CFX</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="motherboard">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalMotherboard.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalMotherboard.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalMotherboard.classList.add('cerrar');

            setTimeout(() => {
                modalMotherboard.remove();
                abrirModal();
            }, 0);
        }

        //Cuando doy clic en submit
        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarMotherboard();
        }
    })

    document.querySelector('body').appendChild(modalMotherboard);
}

function modalRam() {
    const modalRam = document.createElement('DIV');
    modalRam.classList.add('modal');
    modalRam.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Memoria Ram </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Kingston">Kingston</option>
                            <option value="Crucial">Crucial</option>
                            <option value="Silicon Power">Silicon Power</option>
                            <option value="G.Skill">G.Skill</option>
                            <option value="Mushkin">Mushkin</option>
                            <option value="Aorus">Aorus</option>
                            <option value="Gigabyte">Gigabyte</option>
                            <option value="PNY">PNY</option>
                            <option value="Thermaltake">Thermaltake</option>
                            <option value="Acer">Acer</option>
                            <option value="XPG">XPG</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Tipo</label>
                        <select name="tipo" id="tipo" required>
                                <option value="" disabled selected>--Seleccione el tipo--</option>
                                <option value="DDR3">DDR3</option>
                                <option value="DDR4">DDR4</option>
                                <option value="DDR5">DDR5</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Almacenamiento</label>
                        <select name="almacenamientoram" id="almacenamiento" required>
                                <option value="" disabled selected>--Seleccione el almacenamiento--</option>
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
                                <option value="" disabled selected>--Seleccione la frecuencia--</option>
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
                        <input type="number" name="tdp"  id="tdp" placeholder="Ingrese el consumo">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" name = "imagen" accept="image/jpeg, image/png" >
                    </div>
                </div>
                <div class="acciones">
                    <button class = "cerrar-modal" type="button">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="RAM">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalRam.addEventListener('click', function (e) {
        //e.preventDefault();
        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalRam.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalRam.classList.add('cerrar');

            setTimeout(() => {
                modalRam.remove();
                abrirModal();
            }, 0);
        }
        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarRam();
        }
    })

    document.querySelector('body').appendChild(modalRam);
}

function modalAlmacenamiento() {
    const modaAlmacenamiento = document.createElement('DIV');
    modaAlmacenamiento.classList.add('modal');
    modaAlmacenamiento.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Almacenamiento </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="Adata">Adata</option>
                            <option value="Kingston">Kingston</option>
                            <option value="Sandisk">Sandisk</option>
                            <option value="PNY">PNY</option>
                            <option value="Zotac">Zotac</option>
                            <option value="LITEON">LITEON</option>
                            <option value="Samsung">Samsung</option>
                            <option value="WD">WD</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Gigabyte">Gigabyte</option>
                            <option value="Toshiba">Toshiba</option>
                            <option value="Crucial">Crucial</option>
                            <option value="Seagate">Seagate</option>
                            <option value="Acer">Acer</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el modelo" id="nombre">
                    </div>
                    <div>
                        <label for="">Tipo</label>
                        <select name="tipo" id="tipo" required>
                            <option value="" disabled selected>--Seleccione el tipo--</option>
                            <option value="SSD">SSD</option>
                            <option value="M.2">M.2</option>
                            <option value="HDD">HDD</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Capacidad</label>
                        <select name="capacidad" id="capacidad" required>
                            <option value="" disabled selected>--Seleccione la capacidad--</option>
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
                        <input type="number" name="lectura" placeholder="Ingrese el numero de nucleos" id="lectura">
                    </div>
                    <div>
                        <label for="">Velocidad de escritura</label>
                        <input type="number" name="escritura" placeholder="Ingrese el numero de hilos" id="escritura">
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="almacenamiento">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modaAlmacenamiento.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modaAlmacenamiento.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modaAlmacenamiento.classList.add('cerrar');

            setTimeout(() => {
                modaAlmacenamiento.remove();
                abrirModal();
            }, 0);
        }

        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarAlmacenamiento();
        }
    })

    document.querySelector('body').appendChild(modaAlmacenamiento);
}

function modalGrafica() {
    const modalGrafica = document.createElement('DIV');
    modalGrafica.classList.add('modal');
    modalGrafica.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Tarjeta Grafica </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="Radeon">Radeon</option>
                            <option value="Nvidia">Nvidia</option>
                            <option value="Intel">Intel</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Memoria de Video (VRAM) </label>
                        <select name="vram" id="vram" required>
                            <option value="" disabled selected>--Seleccione la VRAM--</option>
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
                        <input type="number" name="tdp" placeholder="Ingrese el consumo" id="tdp">
                    </div>
                    <div>
                        <label for="">Numero de ventiladores</label>
                        <select name="numVentiladores" id="numVentiladores" required>
                                <option value="" disabled selected>--Seleccione el numero de ventiladores--</option>
                                <option value="1">1 ventilador</option>
                                <option value="2">2 ventiladores</option>
                                <option value="3">3 ventiladores</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="grafica">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalGrafica.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalGrafica.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalGrafica.classList.add('cerrar');

            setTimeout(() => {
                modalGrafica.remove();
                abrirModal();
            }, 0);
        }


        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarGrafica();
        }
    })

    document.querySelector('body').appendChild(modalGrafica);
}

function modalGabinete() {
    const modaGabinete = document.createElement('DIV');
    modaGabinete.classList.add('modal');
    modaGabinete.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Gabinete </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
                            <option value="NZXT">NZXT</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Cooler Master">Cooler Master</option>
                            <option value="Eagle Warrior">Eagle Warrior</option>
                            <option value="Acteck">Acteck</option>
                            <option value="KMEX">KMEX</option>
                            <option value="True Basix">True Basix</option>
                            <option value="Thermaltake">Thermaltake</option>
                            <option value="Game Factor">Game Factor</option>
                            <option value="Fractal Desing">Fractal Desing</option>
                            <option value="Jaguar Warrior">Jaguar Warrior</option>
                            <option value="XPG">XPG</option>
                            <option value="Munfrost"> Munfrost</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Nombre</label>
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Iluminacion</label>
                        <select name="iluminacion" id="iluminacion" required>
                            <option value="" disabled selected>--Seleccione el tipo de iluminacion--</option>
                            <option value="LED 1 Solo Color">LED 1 Solo Color</option>
                            <option value="LED Multicolor">LED Multicolor</option>
                            <option value="LED RGB">LED RGB</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipo">Tipo</label>
                        <select name="tipo" id="tipo" required>
                            <option value="" disabled selected>--Seleccione el tipo--</option>
                            <option value="Mini-ITX">Mini-ITX</option>
                            <option value="Micro-ATX">Micro-ATX</option>
                            <option value="ATX">ATX</option>
                            <option value="E-ATX">E-ATX</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Soporte de disipador</label>
                        <select name="soporteDisipador" id="soporteDisipador" required>
                            <option value="" disabled selected>--Seleccione el soporte del disipador--</option>
                            <option value="140">140mm</option>
                            <option value="160">160mm</option>
                            <option value="161">161mm o mas</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Soporte de GPU (Ventiladores)</label>
                        <select name="soporteGPU" id="soporteGPU" required>
                            <option value="" disabled selected>----</option>
                            <option value="1">1 Ventilador</option>
                            <option value="2">2 Ventiladores</option>
                            <option value="3">3 Ventiladores</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Imagen</label>
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="gabinete">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modaGabinete.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modaGabinete.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modaGabinete.classList.add('cerrar');

            setTimeout(() => {
                modaGabinete.remove();
                abrirModal();
            }, 0);
        }
        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarGabinete();
        }
    })

    document.querySelector('body').appendChild(modaGabinete);
}

function modalFuentePoder() {
    const modalFuentePoder = document.createElement('DIV');
    modalFuentePoder.classList.add('modal');
    modalFuentePoder.innerHTML = `
        <div class="formulario-modal componente">
            <form method="POST" action="agregar.php" enctype="multipart/form-data">
            <button class="regresar-btn">Regresar</button>
            <h2> Fuente de Poder </h2>
                <div class="caracteristicas">
                    <div>
                        <label for="">Marca</label>
                        <select name="marca" id="marca" required>
                            <option value="" disabled selected>--Seleccione la marca--</option>
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
                        <input name="nombre" type="text" placeholder="Ingrese el nombre" id="nombre">
                    </div>
                    <div>
                        <label for="">Potencia</label>
                        <select name="potencia" id="potencia" required>
                            <option value="" disabled selected>--Seleccione la potencia--</option>
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
                            <option value="" disabled selected>--Seleccione el tipo de certificacion--</option>
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
                        <input type="file" id="imagen" accept="image/jpeg, image/png" name = "imagen">
                    </div>
                </div>
                <div class = "acciones">
                    <button class = "cerrar-modal">Cancelar</button>
                    <input id="submit" type="submit" class="submit-agregar-componente" value="Guardar" name="fuentePoder">
                </div>
            </form>
        </div>
    `
    setTimeout(() => {
        const formulario = document.querySelector('.formulario-modal');
        formulario.classList.add('animar');
    }, 0);

    modalFuentePoder.addEventListener('click', function (e) {
        //e.preventDefault();

        if (e.target.classList.contains('cerrar-modal')) {
            const formulario = document.querySelector('.formulario-modal');
            formulario.classList.add('cerrar');
            setTimeout(() => {
                modalFuentePoder.remove();
            }, 500);
        }
        if (e.target.classList.contains('regresar-btn')) {

            modalFuentePoder.classList.add('cerrar');

            setTimeout(() => {
                modalFuentePoder.remove();
                abrirModal();
            }, 0);
        }
        

        if (e.target.classList.contains('submit-agregar-componente')) {
            submitAgregarFuentePoder();
        }
    })

    document.querySelector('body').appendChild(modalFuentePoder);
}

//Submits

function submitAgregarMotherboard() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const socket = document.querySelector('#socket').value;
    const formato = document.querySelector('#formato').value;
    const chipset = document.querySelector('#chipset').value;
    const modulosram = document.querySelector('#modulosram').value;
    const tiporam = document.querySelector('#tiporam').value;
    const maxram = document.querySelector('#maxram').value;
    const modulosAlmacenamiento = document.querySelector('#modulosAlmacenamiento').value;
    const GPU = document.querySelector('#GPU').value;
    const imagenInput = document.querySelector('#imagen');
    if (!marca || !nombre || !formato || !chipset || !modulosram || !tiporam
        || !maxram || !socket || !modulosAlmacenamiento || !GPU || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarProcesador() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const frecuenciaBase = document.querySelector('#frecuenciaBase').value;
    const frecuenciaMax = document.querySelector('#frecuenciaMax').value;
    const nucleos = document.querySelector('#nucleos').value;
    const hilos = document.querySelector('#hilos').value;
    const tdp = document.querySelector('#tdp').value;
    const socket = document.querySelector('#socket').value;
    const graficosIntegrados = document.querySelector('#graficosIntegrados').value;
    const imagenInput = document.querySelector('#imagen');
    if (!marca || !nombre || !frecuenciaBase || !frecuenciaMax || !nucleos || !hilos
        || !tdp || !socket || !graficosIntegrados || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarDisipador() {

    console.log('di clicjm');
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const rpmMin = document.querySelector('#rpmMin').value;
    const rpmMax = document.querySelector('#rpmMax').value;
    const tamaño = document.querySelector('#tamaño').value;
    const tdp = document.querySelector('#tdp').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !rpmMin || !rpmMax || !tamaño
        || !tdp || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarRam() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const tipo = document.querySelector('#tipo').value;
    const almacenamiento = document.querySelector('#almacenamiento').value;
    const frecuencia = document.querySelector('#frecuencia').value;
    const tdp = document.querySelector('#tdp').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !tipo || !almacenamiento || !frecuencia
        || !tdp || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarAlmacenamiento() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const tipo = document.querySelector('#tipo').value;
    const almacenamiento = document.querySelector('#capacidad').value;
    const lectura = document.querySelector('#lectura').value;
    const escritura = document.querySelector('#escritura').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !tipo || !almacenamiento || !lectura
        || !escritura || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarGrafica() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const vram = document.querySelector('#vram').value;
    const tdp = document.querySelector('#tdp').value;
    const numVentiladores = document.querySelector('#numVentiladores').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !vram || !tdp || !numVentiladores || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarGabinete() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const iluminacion = document.querySelector('#iluminacion').value;
    const tipo = document.querySelector('#tipo').value;
    const soporteDisipador = document.querySelector('#soporteDisipador').value;
    const soporteGPU = document.querySelector('#soporteGPU').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !iluminacion || !tipo || !soporteDisipador || !soporteGPU || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
}

function submitAgregarFuentePoder() {
    const marca = document.querySelector('#marca').value;
    const nombre = document.querySelector('#nombre').value;
    const potencia = document.querySelector('#potencia').value;
    const certificacion = document.querySelector('#certificacion').value;
    const imagenInput = document.querySelector('#imagen');

    if (!marca || !nombre || !potencia || !certificacion || imagenInput.files.length === 0) {
        // Mostrar alerta de error
        document.getElementById('submit').type = 'button';
        mostrarAlerta('Todos los campos son obligatorios', 'error', document.querySelector('.formulario-modal h2'));
        return;
    } else {
        document.getElementById('submit').type = 'submit';
    }
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