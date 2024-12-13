<?php
session_start();
$nombrePagina = 'Ensamblaje';
include '../includes/header.php';
include '../includes/database.php';
$nombre = $_SESSION['nombre'];
$idUsuario = $_SESSION['idUsuario'];
if (!isset($_SESSION['nombre'])) {
    // Redirige al login si no está autenticado
    header("Location: ../auth/login.php");
    exit;
}
?>

<div class="barra">
    <div class="logo">
        <img src="../img/logo.png" alt="">
        <h1>Ensambler</h1>
    </div>
    <div class="mobile-menu">
        <img src="/src/img/menu.svg" alt="">
    </div>
    <nav class="navegacion">
        <a href="principal.php">Inicio</a>
        <a href="ensambles.php">Mis ensambles</a>
        <a href="../auth/login.php?login=false">Cerrar sesion</a>
    </nav>
</div>

<?php
$db = conectarDB();
//Eliminar Ensamblaje
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $eliminar = isset($_POST['eliminar']);
    if ($eliminar) {
        $idEnsamblaje = filter_var($_POST['eliminar'], FILTER_VALIDATE_INT);
        $query2 = "DELETE FROM ensamblajes WHERE idEnsamblajes = $idEnsamblaje;";
        $resultado2 = mysqli_query($db, $query2);

        if ($resultado2) {
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
                    title: 'Ensamblaje eliminado',
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
//Mostrar especificaciones de los CARDS
$query = "SELECT 
    ensamblajes.idEnsamblajes, 
    ensamblajes.idUsuarios AS idUsuarios, 
    ensamblajes.nombre AS nombre_ensamblaje, 
    usuarios.nombre AS usuario, 
    procesadores.nombre AS procesador, 
    procesadores.marca AS marcaProcesador, 
    disipadores.nombre AS disipador, 
    motherboards.nombre AS motherboard, 
    ram.almacenamiento AS capacidadRAM, 
    ram.tipo AS tipoRAM, 
    ram.frecuencia AS frecuenciaRAM, 
    almacenamientosSATA.tipo AS tipoSATA, 
    almacenamientosSATA.capacidad AS capacidadSATA, 
    tarjetasgraficas.nombre AS tarjeta_grafica, 
    tarjetasgraficas.marca AS marcaGrafica, 
    fuentespoder.nombre AS fuente_poder, 
    almacenamientosM2.tipo AS tipoM2, 
    almacenamientosM2.capacidad AS capacidadM2,
    almacenamientosSSD.tipo AS tipoSSD, 
    almacenamientosSSD.capacidad AS capacidadSSD,
    gabinetes.nombre AS nombreGabinete,
    ensamblajes.cantidadRAM, 
    ensamblajes.cantidadSATA, 
    ensamblajes.cantidadM2,
    ensamblajes.cantidadSSD, 
        ensamblajes.fechaCreacion 
    FROM 
        ensamblajes 
    LEFT JOIN usuarios ON ensamblajes.idUsuarios = usuarios.idUsuarios
    LEFT JOIN gabinetes ON ensamblajes.idGabinete = gabinetes.idGabinete 
    LEFT JOIN procesadores ON ensamblajes.idProcesador = procesadores.idProcesador 
    LEFT JOIN disipadores ON ensamblajes.idDisipador = disipadores.idDisipador 
    LEFT JOIN motherboards ON ensamblajes.idMotherboard = motherboards.idMotherboard 
    LEFT JOIN ram ON ensamblajes.idRam = ram.idRam 
    LEFT JOIN almacenamientos AS almacenamientosSATA ON ensamblajes.idSATA = almacenamientosSATA.idAlmacenamientos 
    LEFT JOIN tarjetasgraficas ON ensamblajes.idTarjetasGraficas = tarjetasgraficas.idTarjetasGraficas 
    LEFT JOIN fuentespoder ON ensamblajes.idFuentesPoder = fuentespoder.idFuentesPoder 
    LEFT JOIN almacenamientos AS almacenamientosM2 ON ensamblajes.idM2 = almacenamientosM2.idAlmacenamientos
    LEFT JOIN almacenamientos AS almacenamientosSSD ON ensamblajes.idSSD = almacenamientosSSD.idAlmacenamientos 
    WHERE 
        ensamblajes.idUsuarios = $idUsuario;
    ;
    ";
$resultado = mysqli_query($db, $query);
?>

<div class="contenedor-ensambles">
    
    <div class="titulo-boton">
        <div class="descripcion-pagina">
            <h1>Mis computadoras ensambladas</h1>
            <p>Aquí puedes ver las computadoras que has creado utilizando el ensamblador. Revisa sus detalles o realiza cambios si es necesario.</p>
        </div>
        <div class="btn-nueva-pc">
            <a href="ensamblaje.php">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>Nueva PC</a>
        </div>
    </div>
    <div class="ensambles">
        <?php while ($computadora = mysqli_fetch_assoc($resultado)) : ?>
            <div class="card-computadora-ensamblada">
                <div class="nombre-info">
                    <h2><?php echo $computadora['nombre_ensamblaje']; ?></h2>
                    <a href="pc.php?idEnsamblaje=<?php echo $computadora['idEnsamblajes']; ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg></a>
                </div>
                <div class="caracteristicas-eliminar">
                    <div class="caracteristicas-computadora">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                            <label for=""><?php echo $computadora['marcaProcesador']; ?>
                                <?php echo $computadora['procesador']; ?></label>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                            </svg>
                            <label for="">
                                <?php echo $computadora['marcaGrafica'] ?>
                                <?php echo $computadora['tarjeta_grafica']; ?></label>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="12" x2="2" y2="12"></line>
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                <line x1="10" y1="16" x2="10.01" y2="16"></line>
                            </svg>
                            <label for="">
                                <?php
                                $cantidadSATA = $computadora['cantidadSATA'];
                                $cantidadM2 = $computadora['cantidadM2'];
                                $cantidadSSD = $computadora['cantidadSSD'];

                                $capacidadSATA = $computadora['capacidadSATA'];
                                $capacidadM2 = $computadora['capacidadM2'];
                                $capacidadSSD = $computadora['capacidadSSD'];

                                $totalSATA = $cantidadSATA * $capacidadSATA;
                                $totalM2 = $cantidadM2 * $capacidadM2;
                                $totalSSD = $cantidadSSD * $capacidadSSD;

                                // Caso: No hay almacenamiento
                                if (!$cantidadSATA && !$cantidadM2 && !$cantidadSSD) {
                                    echo "No hay almacenamiento disponible.";
                                }

                                // Caso: Solo SATA
                                if ($cantidadSATA && !$cantidadM2 && !$cantidadSSD) {
                                    echo $totalSATA . ' GB ' . $computadora['tipoSATA'];
                                }

                                // Caso: Solo M2
                                if (!$cantidadSATA && $cantidadM2 && !$cantidadSSD) {
                                    echo $totalM2 . ' GB ' . $computadora['tipoM2'];
                                }

                                // Caso: Solo SSD
                                if (!$cantidadSATA && !$cantidadM2 && $cantidadSSD) {
                                    echo $totalSSD . ' GB ' . $computadora['tipoSSD'];
                                }

                                // Caso: SATA y M2
                                if ($cantidadSATA && $cantidadM2 && !$cantidadSSD) {
                                    echo $totalSATA . ' GB ' . $computadora['tipoSATA'] . ', ';
                                    echo $totalM2 . ' GB ' . $computadora['tipoM2'];
                                }

                                // Caso: SATA y SSD
                                if ($cantidadSATA && !$cantidadM2 && $cantidadSSD) {
                                    echo $totalSATA . ' GB ' . $computadora['tipoSATA'] . ', ';
                                    echo $totalSSD . ' GB ' . $computadora['tipoSSD'];
                                }

                                // Caso: M2 y SSD
                                if (!$cantidadSATA && $cantidadM2 && $cantidadSSD) {
                                    echo $totalM2 . ' GB ' . $computadora['tipoM2'] . ', ';
                                    echo $totalSSD . ' GB ' . $computadora['tipoSSD'];
                                }

                                // Caso: SATA, M2 y SSD
                                if ($cantidadSATA && $cantidadM2 && $cantidadSSD) {
                                    echo $totalSATA . ' GB ' . $computadora['tipoSATA'] . ', ';
                                    echo $totalM2 . ' GB ' . $computadora['tipoM2'] . ', ';
                                    echo $totalSSD . ' GB ' . $computadora['tipoSSD'];
                                }

                                ?>
                            </label>
                        </div>
                    </div>
                    <div class="eliminar-ensamble">
                        <button class="eliminar" value="<?php echo $computadora['idEnsamblajes']; ?>">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="ram-fecha">
                    <?php
                    $cantidadRAM = $computadora['cantidadRAM'];
                    $capacidadRAM = $computadora['capacidadRAM'];
                    $tipoRAM = $computadora['tipoRAM'];
                    $frecuenciaRAM = $computadora['frecuenciaRAM'];
                    $totalRAM = $cantidadRAM * $capacidadRAM;
                    ?>
                    <label class="ram" for=""><?php echo $totalRAM . 'GB ' . $tipoRAM . '-' . $frecuenciaRAM ?> </label>
                    <label class="fecha">Creado el <?php echo $computadora['fechaCreacion']; ?></label>
                </div>
            </div>
        <?php endwhile; ?>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="/src/js/eliminarEnsamble.js"></script>