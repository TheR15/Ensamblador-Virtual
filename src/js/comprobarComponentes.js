document.addEventListener('DOMContentLoaded', function () {
    pintarContornos();

    const procesadores = document.querySelector('.procesadores');
    const disipador = document.querySelector('.disipador');
    const infoProcesador = document.querySelector('.info-procesador');
    const datosProcesador = infoProcesador ? infoProcesador.value : null;
    const valoresProcesador = datosProcesador ? datosProcesador.split(",") : [];
    const marcaProcesador = valoresProcesador[0];

    const infoGrafica = document.querySelector('.info-grafica');
    const datosGrafica = infoGrafica ? infoGrafica.value : null;
    const valoresGrafica = datosGrafica ? datosGrafica.split(",") : [];
    const marcaGrafica = valoresGrafica[6];

    const infoRAM = document.querySelector('.info-ram');
    const datosRAM = infoRAM ? infoRAM.value : null;
    const valoresRAM = datosRAM ? datosRAM.split(",") : [];
    const cantidadRAM = valoresRAM[8];

    //Mostrar contorno M2
    const M2 = document.querySelector('.almacenamientoM2');
    const datosM2 = M2 ? M2.value : null;
    const valoresM2 = datosM2 ? datosM2.split(",") : [];
    const tipo = valoresM2[2];
    const contornoM2 = document.querySelector('.contorno-M2');

    if (tipo) {
        contornoM2.style.display = "block";
    } else {
        contornoM2.style.display = "none";
    }
    //Mostrar contorno SATA
    const HDD = document.querySelector('.almacenamientoHDD');
    const datosHDD = HDD ? HDD.value : null;
    const valoresHDD = datosHDD ? datosHDD.split(",") : [];
    const tipoHDD = valoresHDD[2];
    const SSD = document.querySelector('.almacenamientoSSD');
    const datosSSD = SSD ? SSD.value : null;
    const valoresSSD = datosSSD ? datosSSD.split(",") : [];
    const tipoSSD = valoresSSD[2];
    const contornoHDD = document.querySelector('.SATA');
    if (tipoHDD || tipoSSD) {
        contornoHDD.style.display = "block";
    } else {
        contornoHDD.style.display = "none";
    }

    //PINTAR SLOTS DEPENDIENDO DE LA CANTIDAD
    if (cantidadRAM === '1') {
        const ram1 = document.querySelectorAll('.ram1');
        ram1.forEach((e) => {
            e.style.stroke = "#17202a";
        })
    }
    if (cantidadRAM === '2') {
        const ram1 = document.querySelectorAll('.ram1');
        ram1.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram2 = document.querySelectorAll('.ram2');
        ram2.forEach((e) => {
            e.style.stroke = "#17202a";
        })
    }
    if (cantidadRAM === '3') {
        const ram1 = document.querySelectorAll('.ram1');
        ram1.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram2 = document.querySelectorAll('.ram2');
        ram2.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram3 = document.querySelectorAll('.ram3');
        ram3.forEach((e) => {
            e.style.stroke = "#17202a";
        })
    }
    if (cantidadRAM === '4') {
        const ram1 = document.querySelectorAll('.ram1');
        ram1.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram2 = document.querySelectorAll('.ram2');
        ram2.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram3 = document.querySelectorAll('.ram3');
        ram3.forEach((e) => {
            e.style.stroke = "#17202a";
        })
        const ram4 = document.querySelectorAll('.ram4');
        ram4.forEach((e) => {
            e.style.stroke = "#17202a";
        })
    }

    //Apareze la tarjea grafica dependiendo cual sea
    if (marcaGrafica === "Nvidia") {
        const graficaNvidia = document.querySelector('.grafica-nvidia');
        graficaNvidia.style.display = "block";
    }
    if (marcaGrafica === "Radeon") {
        const graficaRadeon = document.querySelector('.grafica-radeon');
        graficaRadeon.style.display = "block";
    }

    //Animacion donde aparece el procesador y se va el disipador
    procesadores.addEventListener('mouseenter', function () {
        if (marcaProcesador === 'AMD') {
            const AMDContorno = document.querySelector('.AMD');
            AMDContorno.style.opacity = "1";
            AMDContorno.style.display = "block";
        }
        if (marcaProcesador === 'Intel') {
            const intelContorno = document.querySelector('.intel');
            intelContorno.style.opacity = "1";
            intelContorno.style.display = "block";
        }
        disipador.style.transform = "translateX(250px)";
    });

    procesadores.addEventListener('mouseleave', function () {
        if (marcaProcesador === 'AMD') {
            const AMDContorno = document.querySelector('.AMD');
            AMDContorno.style.opacity = "0";
            AMDContorno.style.display = "none";
        }
        if (marcaProcesador === 'Intel') {
            const intelContorno = document.querySelector('.intel');
            intelContorno.style.opacity = "0";
            intelContorno.style.display = "none";
        }
        disipador.style.transform = "translateX(0)";
    });
});

function pintarContornos() {
    //Pintar gabinete
    const contornoGabinente = document.querySelectorAll('.contorno-gabinete');
    const gabinete = document.querySelector('.gabinetes');
    gabinete.addEventListener('mouseenter', function () {
        contornoGabinente.forEach((e) => {
            e.style.stroke = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    gabinete.addEventListener('mouseleave', function () {
        contornoGabinente.forEach((e) => {
            e.style.stroke = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })
    //Pintar motherboard
    const contornoMotherboard = document.querySelector('.contorno-motherboard');
    const motherboard = document.querySelector('.motherboards');
    motherboard.addEventListener('mouseenter', function () {
        contornoMotherboard.style.stroke = "#0C70F2";
        contornoMotherboard.classList.add('dropzone-pulsando');
    })
    motherboard.addEventListener('mouseleave', function () {
        contornoMotherboard.style.stroke = "#1d1d1d";
        contornoMotherboard.classList.remove('dropzone-pulsando');
    })
    //Pintar disipador
    const contornoDisipador = document.querySelectorAll('.contorno-disipador');
    const disipador = document.querySelector('.disipadores');
    disipador.addEventListener('mouseenter', function () {
        contornoDisipador.forEach((e) => {
            e.style.stroke = "#0C70F2";
            e.style.fill = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    disipador.addEventListener('mouseleave', function () {
        contornoDisipador.forEach((e) => {
            e.style.stroke = "#1d1d1d";
            e.style.fill = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })
    //Pintar ram
    const ram1 = document.querySelectorAll('.ram1');
    const ram2 = document.querySelectorAll('.ram2');
    const ram3 = document.querySelectorAll('.ram3');
    const ram4 = document.querySelectorAll('.ram4');
    const infoRAM = document.querySelector('.info-ram');
    const datosRAM = infoRAM ? infoRAM.value : null;
    const valoresRAM = datosRAM ? datosRAM.split(",") : [];
    const cantidadRAM = valoresRAM[8];
    const ram = document.querySelector('.rams');
    ram.addEventListener('mouseenter', function () {
        if (cantidadRAM === '1') {
            ram1.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
        }
        if (cantidadRAM === '2') {
            ram1.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
        }
        if (cantidadRAM === '3') {
            ram1.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram3.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })

        }
        if (cantidadRAM === '4') {
            ram1.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram3.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
            ram4.forEach((e) => {
                e.style.stroke = "#0C70F2";
                e.classList.add('dropzone-pulsando');
            })
        }
    })
    ram.addEventListener('mouseleave', function () {
        if (cantidadRAM === '1') {
            ram1.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
        }
        if (cantidadRAM === '2') {
            ram1.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
        }
        if (cantidadRAM === '3') {
            ram1.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram3.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
        }
        if (cantidadRAM === '4') {
            ram1.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram2.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram3.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
            ram4.forEach((e) => {
                e.style.stroke = "#1d1d1d";
                e.classList.remove('dropzone-pulsando');
            })
        }
    })

    //Pintar M2
    const M2contorno= document.querySelectorAll('.M2-contorno');
    const M2 = document.querySelector('.M2');

    M2.addEventListener('mouseenter', function(){
        M2contorno.forEach((e) =>{
            e.style.stroke = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    M2.addEventListener('mouseleave', function(){
        M2contorno.forEach((e) =>{
            e.style.stroke = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })

    //Pintar SATA
    const HDDcontorno= document.querySelectorAll('.HDD-contorno');
    const HDD = document.querySelector('.HDD');
    const SSD = document.querySelector('.SSD');
    HDD.addEventListener('mouseenter', function(){
        HDDcontorno.forEach((e) =>{
            e.style.stroke = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    HDD.addEventListener('mouseleave', function(){
        HDDcontorno.forEach((e) =>{
            e.style.stroke = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })
    SSD.addEventListener('mouseenter', function(){
        HDDcontorno.forEach((e) =>{
            e.style.stroke = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    SSD.addEventListener('mouseleave', function(){
        HDDcontorno.forEach((e) =>{
            e.style.stroke = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })

    //GRAFICA
    const graficas = document.querySelector('.graficas');
    const nvidiaContorno = document.querySelector('.grafica-nvidia')
    graficas.addEventListener('mouseenter', function(){
        nvidiaContorno.style.transition = 'all .3s ease';
        nvidiaContorno.style.transform = 'scale(1.05) translateY(-10px)';

    })
    graficas.addEventListener('mouseleave', function(){
        nvidiaContorno.style.transition = 'all .3s ease';
        nvidiaContorno.style.transform='scale(100%)';
    })
    const amdContorno = document.querySelector('.grafica-radeon')
    graficas.addEventListener('mouseenter', function(){
        amdContorno.style.transition = 'all .3s ease';
        amdContorno.style.transform = 'scale(1.05) translateY(-10px)';

    })
    graficas.addEventListener('mouseleave', function(){
        amdContorno.style.transition = 'all .3s ease';
        amdContorno.style.transform='scale(100%)';
    })
    
    //fuente
    const fuentes = document.querySelector('.fuentes');
    const fuentesContorno = document.querySelectorAll('.fuente-contorno');

    fuentes.addEventListener('mouseenter', function(){
        fuentesContorno.forEach((e) => {
            e.style.stroke = "#0C70F2";
            e.classList.add('dropzone-pulsando');
        })
    })
    fuentes.addEventListener('mouseleave', function(){
        fuentesContorno.forEach((e) => {
            e.style.stroke = "#1d1d1d";
            e.classList.remove('dropzone-pulsando');
        })
    })

}
