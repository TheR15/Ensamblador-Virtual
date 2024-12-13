document.addEventListener('DOMContentLoaded', function () {
    AbrirlistaGabinete();
    AbrirlistaMotherboard();
    AbrirlistaProcesador();
    AbrirlistaDisipador();
    AbrirlistaRAM();
    AbrirlistaAlmacenamiento();
    AbrirlistaGrafica();
    AbrirlistaFuente();
})

function AbrirlistaGabinete() {
    //Al presionar el boton
    const btn = document.querySelector('.btngabinete');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";
        btn.classList.add('activo');

        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesadores = document.querySelector('.btnprocesador');
        const btndisipadores = document.querySelector('.btndisipador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btnmotherboards.classList.remove('activo');
        btnprocesadores.classList.remove('activo');
        btndisipadores.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');

        //Muestra los gabinetes
        gabinetes.style.display = "block";

        //Elimina todos los demas componentes
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        rams.style.display = "none";
        almacenamiento.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";
    });
}


function AbrirlistaMotherboard() {
    //Al presionar el boton
    const btn = document.querySelector('.btnmotherboard');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnprocesadores = document.querySelector('.btnprocesador');
        const btndisipadores = document.querySelector('.btndisipador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnprocesadores.classList.remove('activo');
        btndisipadores.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');

        //Muestra los gabinetes
        motherboards.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        rams.style.display = "none";
        almacenamiento.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";


    });
}

function AbrirlistaProcesador() {
    //Al presionar el boton
    const btn = document.querySelector('.btnprocesador');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        procesadores.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        disipadores.style.display = "none";
        rams.style.display = "none";
        almacenamiento.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btndisipadores = document.querySelector('.btndisipador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btndisipadores.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');

    });
}


function AbrirlistaDisipador() {
    //Al presionar el boton
    const btn = document.querySelector('.btndisipador');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        disipadores.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        rams.style.display = "none";
        almacenamiento.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesador = document.querySelector('.btnprocesador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btnprocesador.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');
    });
}

function AbrirlistaRAM() {
    //Al presionar el boton
    const btn = document.querySelector('.btnram');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        rams.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        almacenamiento.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesador = document.querySelector('.btnprocesador');
        const btndisipadores = document.querySelector('.btndisipador');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btnprocesador.classList.remove('activo');
        btndisipadores.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');
    });
}

function AbrirlistaAlmacenamiento() {
    //Al presionar el boton
    const btn = document.querySelector('.btnalmacenamiento');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        almacenamiento.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        rams.style.display = "none";
        grafica.style.display = "none";
        fuente.style.display = "none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesador = document.querySelector('.btnprocesador');
        const btnrams = document.querySelector('.btnram');
        const btndisipador= document.querySelector('.btndisipador');
        const btngrafica = document.querySelector('.btngrafica');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btnprocesador.classList.remove('activo');
        btnrams.classList.remove('activo');
        btndisipador.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btnfuente.classList.remove('activo');
    });
}


function AbrirlistaGrafica() {
    //Al presionar el boton
    const btn = document.querySelector('.btngrafica');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        grafica.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        almacenamiento.style.display = "none";
        rams.style.display = "none";
        fuente.style.display = "none";

        btn.classList.add('activo');

        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesador = document.querySelector('.btnprocesador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btndisipador = document.querySelector('.btndisipador');
        const btnfuente = document.querySelector('.btnfuente');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btnprocesador.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btndisipador.classList.remove('activo');
        btnfuente.classList.remove('activo');
    });
}

function AbrirlistaFuente() {
    //Al presionar el boton
    const btn = document.querySelector('.btnfuente');
    btn.addEventListener('click', function () {
        const gabinetes = document.querySelector('.gabinetes');
        const motherboards = document.querySelector('.motherboards');
        const procesadores = document.querySelector('.procesadores');
        const disipadores = document.querySelector('.disipadores');
        const rams = document.querySelector('.rams');
        const almacenamiento = document.querySelector('.almacenamientos');
        const grafica = document.querySelector('.graficas');
        const fuente = document.querySelector('.fuentes');

        
        const indicacion = document.querySelector('.indicacion');
        indicacion.style.display="none";

        //Muestra los gabinetes
        fuente.style.display = "block";

        //Elimina todos los demas componentes
        gabinetes.style.display = "none";
        motherboards.style.display = "none";
        procesadores.style.display = "none";
        disipadores.style.display = "none";
        almacenamiento.style.display = "none";
        rams.style.display = "none";
        grafica.style.display = "none";

        btn.classList.add('activo');
        const btngabinete = document.querySelector('.btngabinete');
        const btnmotherboards = document.querySelector('.btnmotherboard');
        const btnprocesador = document.querySelector('.btnprocesador');
        const btnrams = document.querySelector('.btnram');
        const btnalmacenamiento = document.querySelector('.btnalmacenamiento');
        const btngrafica = document.querySelector('.btngrafica');
        const btndisipador = document.querySelector('.btndisipador');

        btngabinete.classList.remove('activo');
        btnmotherboards.classList.remove('activo');
        btnprocesador.classList.remove('activo');
        btnrams.classList.remove('activo');
        btnalmacenamiento.classList.remove('activo');
        btngrafica.classList.remove('activo');
        btndisipador.classList.remove('activo');
    });
}

