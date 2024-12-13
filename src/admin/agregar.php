<?php
session_start();
$nombre = $_SESSION['nombre'];
$titulo = 'Agregar';
$nombrePagina = 'Agregar | Ensambler';
// Verifica si el usuario está autenticado
if (!isset($_SESSION['nombre'])) {
    // Redirige al login si no está autenticado
    header("Location: ../auth/login.php");
    exit;
}
?>

<div class="dashboard">
    <?php
    include '../includes/sidebar.php'; ?>
    <div class="principal">
        <?php
        include '../includes/database.php';
        $db = conectarDB();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //Campos
            //Issets de los componentes
            $ram = isset($_POST['RAM']);
            $procesador = isset($_POST['procesador']);
            $motherboard = isset($_POST['motherboard']);
            $disipador = isset($_POST['disipador']);
            $almacenamiento = isset($_POST['almacenamiento']);
            $grafica = isset($_POST['grafica']);
            $gabinete = isset($_POST['gabinete']);
            $fuentePoder = isset($_POST['fuentePoder']);
            //Guardar Componentes
            if ($ram) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $tipo = $_POST['tipo'];
                $almacenamientoram = $_POST['almacenamientoram'];
                $frecuencia = $_POST['frecuencia'];
                $tdp = $_POST['tdp'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];
                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO ram(marca,nombre,tipo,almacenamiento,frecuencia,tdp,imagen)
                VALUES ('$marca','$nombre','$tipo',$almacenamientoram,$frecuencia, $tdp,'$nombreImagen');";

                $resultado = mysqli_query($db, $query);
                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($procesador) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $frecuenciaBase = $_POST['frecuenciaBase'];
                $frecuenciaMax = $_POST['frecuenciaMax'];
                $nucleos = $_POST['nucleos'];
                $hilos = $_POST['hilos'];
                $tdp = $_POST['tdp'];
                $socket = $_POST['socket'];
                $graficosIntegrados = $_POST['graficosIntegrados'];

                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO procesadores(marca,nombre,frecuenciaBase,frecuenciaMax,nucleos,hilos,tdp,socket,graficosIntregrados,imagen)
                VALUES ('$marca','$nombre',$frecuenciaBase,$frecuenciaMax, $nucleos, $hilos,$tdp,'$socket',$graficosIntegrados,'$nombreImagen');";
                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($motherboard) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $socket = $_POST['socket'];
                $formato = $_POST['formato'];
                $chipset = $_POST['chipset'];
                $modulosRam = $_POST['modulosRam'];
                $tipoRam = $_POST['tipoRam'];
                $maxRam = $_POST['maxRam'];
                $puertoSata = $_POST['puertoSATA'];
                $puertoM2 = $_POST['puertoM2'];
                $GPU = $_POST['GPU'];

                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO motherboards(marca,nombre,socket,formato,chipset,modulosRam,tipoRam,maxRam,tipoPciExpress,imagen, puertoSataNum, puertoM2Num)
                VALUES ('$marca','$nombre','$socket','$formato','$chipset', $modulosRam, '$tipoRam',$maxRam,'$GPU','$nombreImagen',$puertoSata,$puertoM2);";
                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($disipador) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $rpmMin = $_POST['rpmMin'];
                $rpmMax = $_POST['rpmMax'];
                $tamaño = $_POST['tamaño'];
                $tdp = $_POST['tdp'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO disipadores(marca,nombre,rpmMin,rpmMax,tamaño,tdp,imagen)
                VALUES ('$marca','$nombre',$rpmMin,$rpmMax,$tamaño, $tdp,'$nombreImagen');";
                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }   
            if ($almacenamiento) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $tipo = $_POST['tipo'];
                $capacidad = $_POST['capacidad'];
                $lectura = $_POST['lectura'];
                $escritura = $_POST['escritura'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO almacenamientos(marca,nombre,tipo,capacidad,velocidadLectura,velocidadEscritura,imagen)
                VALUES ('$marca','$nombre','$tipo',$capacidad,$lectura, $escritura,'$nombreImagen');";

                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($grafica) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $vram = $_POST['vram'];
                $tdp = $_POST['tdp'];
                $numVentiladores = $_POST['numVentiladores'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO tarjetasgraficas(marca,nombre,vram,tdp,numVentiladores,imagen)
                VALUES ('$marca','$nombre',$vram,$tdp,$numVentiladores,'$nombreImagen');";
                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($gabinete) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $iluminacion = $_POST['iluminacion'];
                $tipo = $_POST['tipo'];
                $soporteDisipador = $_POST['soporteDisipador'];
                $soporteGPU = $_POST['soporteGPU'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO gabinetes(marca,nombre,iluminacion,tipo,soporteDisipador,soporteGPU,imagen)
                VALUES ('$marca','$nombre','$iluminacion','$tipo',$soporteDisipador, $soporteGPU,'$nombreImagen');";

                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            if ($fuentePoder) {
                $marca = $_POST['marca'];
                $nombre = $_POST['nombre'];
                $potencia = $_POST['potencia'];
                $certificacion = $_POST['certificacion'];
                //Asingar files a una variable
                $imagen = $_FILES['imagen'];

                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }
                    //Generar token unico para la imagen
                    $nombreImagen = md5(uniqid(rand(), true)) . ".jpg";

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $nombreImagen);
                }

                //Query para insertar procesador
                $query = "INSERT INTO fuentespoder(marca,nombre,potencia,certificacion,imagen)
                VALUES ('$marca','$nombre',$potencia,'$certificacion','$nombreImagen');";

                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 20px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>
                    <script>
                        function alerta() {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Componente guardado',
                                showConfirmButton: false,
                                timer: 2000
                                });
                        }
                        document.addEventListener('DOMContentLoaded', (event) => {
                            alerta();
                        });
                    </script>
                    ";
                }
            }
            
        }
        ?>
        <div class="contenedor-agregar">
            <div class="titulo-agregar">
                <div>
                    <h1>Componentes</h1>
                    <p>Gestiona tu inventario de componentes</p>
                </div>

                <div class="acciones-inicio">
                    <a href="../auth/login.php?login=false"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>Cerrar sesion</a>
                    <button id="modal" class="nuevoComponentebtn">+ Agregar componente</button>
                </div>
            </div>

            <?php
            $db = conectarDB();
            //Card Procesadores
            $query = "SELECT * FROM procesadores;";
            $resultado = mysqli_query($db, $query);
            //Cantidad de procesadores
            $cantidad = mysqli_num_rows($resultado);


            //Card Disipadores
            $query2 = "SELECT * FROM disipadores;";
            $resultado2 = mysqli_query($db, $query2);
            //Cantidad de disipadores
            $cantidad2 = mysqli_num_rows($resultado2);


            //Card Motherboards
            $query3 = "SELECT * FROM motherboards;";
            $resultado3 = mysqli_query($db, $query3);
            //Cantidad de Motherboards
            $cantidad3 = mysqli_num_rows($resultado3);


            //Card Memorias Ram
            $query4 = "SELECT * FROM ram;";
            $resultado4 = mysqli_query($db, $query4);
            //Cantidad de Memorias Ram
            $cantidad4 = mysqli_num_rows($resultado4);


            //Card Almacenamiento
            $query5 = "SELECT * FROM almacenamientos;";
            $resultado5 = mysqli_query($db, $query5);
            //Cantidad de Almacenamiento
            $cantidad5 = mysqli_num_rows($resultado5);


            //Card Tarjetas de video
            $query6 = "SELECT * FROM tarjetasgraficas;";
            $resultado6 = mysqli_query($db, $query6);
            //Cantidad de procesadores
            $cantidad6 = mysqli_num_rows($resultado6);


            //Card Gabinetes
            $query7 = "SELECT * FROM gabinetes;";
            $resultado7 = mysqli_query($db, $query7);
            //Cantidad de Gabinetes
            $cantidad7 = mysqli_num_rows($resultado7);

            //Card fuentes de poder
            $query8 = "SELECT * FROM fuentespoder;";
            $resultado8 = mysqli_query($db, $query8);
            //Cantidad de fuentes de poder
            $cantidad8 = mysqli_num_rows($resultado8);
            
        
            ?>


            <div class="componentes">
                <div class="card-componentes">
                    <h2>Procesadores</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">Ryzen 5 5700x</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">AMD</label>
                        </div>
                        <a href="procesadores.php">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Disipadores</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad2 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">MAG</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">NZXT</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Motherboards</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad3 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">B570</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">Gigabyte</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Memorias RAM</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad4 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">Fury Beast</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">Kingston</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Almacenamientos</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad5 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">GREEN SN850</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">WD</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Tarjetas de video</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad6 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">RTX 4080 SUPER VENTUS 3X</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">Nvidia</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Gabinetes</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad7 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">STARKER AIR WHITE</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">XPG</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>

                <div class="card-componentes">
                    <h2>Fuentes de poder</h2>
                    <div class="datos-componentes">
                        <div>
                            <p>Cantidad</p>
                            <label for="" class="cantidad"><?php echo $cantidad8 ?></label>
                        </div>
                        <div>
                            <p>Mas usado</p>
                            <label for="">ROG STRIX B550</label>
                        </div>
                        <div>
                            <p>Marca mas usada</p>
                            <label for="">Asus</label>
                        </div>
                        <a href="">Ver detalles</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/modal.js"></script>