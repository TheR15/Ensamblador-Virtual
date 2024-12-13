<form action="ensamblaje.php" method="POST">
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

    <div class="contenedor-ensamblaje">
        <div class="area-componentes">
            <h2>Area de componentes</h2>
            <div class="botones-lista">
                <div class="botones-componente">
                    <button class="btngabinete" type="button">Gabinetes</button>

                    <button class="btnmotherboard" type="button">Tarjetas madre</button>

                    <button class="btnprocesador" type="button">Procesadores</button>

                    <button class="btndisipador" type="button">Disipadores</button>

                    <button class="btnram" type="button">Memorias RAM</button>

                    <button class="btnalmacenamiento" type="button">Almacenamientos</button>

                    <button class="btngrafica" type="button">Tarjetas graficas</button>

                    <button class="btnfuente" type="button">Fuentes de poder</button>
                </div>

                <?php
                $db = conectarDB();
                $queryGabinetes = "SELECT * FROM gabinetes;";
                $resultadoGabinetes = mysqli_query($db, $queryGabinetes);

                $queryAlmacenamientos = "SELECT * FROM almacenamientos;";
                $resultadoAlmacenamientos = mysqli_query($db, $queryAlmacenamientos);

                $queryProcesadores = "SELECT * FROM procesadores;";
                $resultadoProcesadores = mysqli_query($db, $queryProcesadores);

                $queryDisipadores = "SELECT * FROM disipadores;";
                $resultadoDisipadores = mysqli_query($db, $queryDisipadores);

                $queryRAM = "SELECT * FROM ram;";
                $resultadoRAM = mysqli_query($db, $queryRAM);

                $queryGraficas = "SELECT * FROM tarjetasgraficas;";
                $resultadoGraficas = mysqli_query($db, $queryGraficas);

                $queryFuentes = "SELECT * FROM fuentespoder;";
                $resultadoFuentes = mysqli_query($db, $queryFuentes);

                $queryMotherboards = "SELECT * FROM motherboards;";
                $resultadoMotherboards = mysqli_query($db, $queryMotherboards);
                ?>

                <div class="lista-componente">
                    <p class="indicacion">Selecciona el componente que deseas buscar</p>
                    <div class="gabinetes">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre del gabinete">
                            </div>
                            <?php while ($gabinete = mysqli_fetch_assoc($resultadoGabinetes)) : ?>
                                <div draggable="true" class="datos drag-item-gabinete">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $gabinete['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $gabinete['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $gabinete['nombre'] ?></label>
                                        </div>
                                    </div>

                                    <button type="button" class="info-gabinete" value="<?php echo htmlspecialchars($gabinete['idGabinete']
                                                                                            . ',' . $gabinete['nombre'] . ',' . $gabinete['iluminacion']
                                                                                            . ',' . $gabinete['tipo'] . ',' . $gabinete['soporteDisipador'] . ',' . $gabinete['soporteGPU']
                                                                                            . ',' . $gabinete['imagen'] . ',' . $gabinete['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                    <div class="motherboards">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre de la tarjeta madre">
                            </div>
                            <?php while ($motherboard = mysqli_fetch_assoc($resultadoMotherboards)) : ?>
                                <div draggable="true" class="datos drag-item-motherboard">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $motherboard['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $motherboard['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $motherboard['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-motherboard" value="<?php echo htmlspecialchars($motherboard['idMotherboard']
                                                                                                . ',' . $motherboard['marca'] . ',' . $motherboard['nombre'] . ',' . $motherboard['socket']
                                                                                                . ',' . $motherboard['formato'] . ',' . $motherboard['chipset'] . ',' . $motherboard['modulosRam']
                                                                                                . ',' . $motherboard['tipoRam'] . ',' . $motherboard['maxRam']
                                                                                                . ',' . $motherboard['tipoPciExpress'] . ',' . $motherboard['imagen'] . ',' . $motherboard['puertoSataNum'] . ',' . $motherboard['puertoM2Num']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                    <div class="procesadores">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre del procesador">
                            </div>
                            <?php while ($procesador = mysqli_fetch_assoc($resultadoProcesadores)) : ?>
                                <div draggable="true" class="datos drag-item-procesador">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $procesador['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $procesador['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $procesador['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-procesador" value="<?php echo htmlspecialchars($procesador['marca'] . ',' . $procesador['nombre'] . ',' . $procesador['frecuenciaBase'] . ',' . $procesador['frecuenciaMax'] . ',' . $procesador['nucleos'] . ',' . $procesador['hilos'] . ',' . $procesador['tdp'] . ',' . $procesador['socket'] . ',' . $procesador['graficosIntregrados'] . ',' . $procesador['imagen'] . ',' . $procesador['idProcesador']) ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                    <div class="disipadores">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre del disipador">
                            </div>
                            <?php while ($disipador = mysqli_fetch_assoc($resultadoDisipadores)) : ?>
                                <div draggable="true" class="datos drag-item-disipador">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $disipador['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $disipador['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $disipador['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-disipador" value="<?php echo htmlspecialchars($disipador['idDisipador'] . ',' . $disipador['marca'] . ',' . $disipador['nombre'] . ',' . $disipador['rpmMin'] . ',' . $disipador['rpmMax'] . ',' . $disipador['tamaño'] . ',' . $disipador['tdp'] . ',' . $disipador['imagen']) ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                    <div class="rams">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre de la memoria RAM">
                            </div>
                            <?php while ($ram = mysqli_fetch_assoc($resultadoRAM)) : ?>
                                <div draggable="true" class="datos drag-item-ram">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $ram['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $ram['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $ram['nombre'] ?></label>
                                        </div>
                                    </div>

                                    <button type="button" class="info-ram" value="<?php echo htmlspecialchars($ram['idRam']
                                                                                        . ',' . $ram['nombre'] . ',' . $ram['tipo']
                                                                                        . ',' . $ram['almacenamiento'] . ',' . $ram['frecuencia'] . ',' . $ram['tdp']
                                                                                        . ',' . $ram['imagen']
                                                                                        . ',' . $ram['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                    <div class="almacenamientos">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre de la unidad de almacenamiento">
                            </div>
                            <?php while ($almacenamiento = mysqli_fetch_assoc($resultadoAlmacenamientos)) : ?>
                                <div draggable="true" class="datos drag-item-almacenamiento">

                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $almacenamiento['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $almacenamiento['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $almacenamiento['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-almacenamiento" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos']
                                                                                                    . ',' . $almacenamiento['nombre'] . ',' . $almacenamiento['tipo']
                                                                                                    . ',' . $almacenamiento['capacidad'] . ',' . $almacenamiento['velocidadLectura'] . ',' . $almacenamiento['velocidadEscritura']
                                                                                                    . ',' . $almacenamiento['imagen'] . ',' . $almacenamiento['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                    <div class="graficas">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre de la tarjeta grafica">
                            </div>
                            <?php while ($grafica = mysqli_fetch_assoc($resultadoGraficas)) : ?>
                                <div draggable="true" class="datos drag-item-grafica">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $grafica['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $grafica['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $grafica['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-grafica" value="<?php echo htmlspecialchars($grafica['idTarjetasGraficas']
                                                                                            . ',' . $grafica['nombre'] . ',' . $grafica['vram']
                                                                                            . ',' . $grafica['tdp'] . ',' . $grafica['numVentiladores']
                                                                                            . ',' . $grafica['imagen'] . ',' . $grafica['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                    <div class="fuentes">
                        <div class="card-componente">
                            <div class="contenedor-busqueda">
                                <input id="buscar" class="buscar" type="text" placeholder="Ingrese el nombre de la fuente de poder">
                            </div>
                            <?php while ($fuente = mysqli_fetch_assoc($resultadoFuentes)) : ?>
                                <div draggable="true" class="datos drag-item-fuente">
                                    <div class="img-tex">
                                        <img src="../../imagenes/<?php echo $fuente['imagen'] ?>" alt="">
                                        <div>
                                            <label class="buscar-card marca" for=""><?php echo $fuente['marca'] ?></label>
                                            <label class="buscar-card" for=""><?php echo $fuente['nombre'] ?></label>
                                        </div>
                                    </div>
                                    <button type="button" class="info-fuente" value="<?php echo htmlspecialchars($fuente['idFuentesPoder']
                                                                                            . ',' . $fuente['nombre'] . ',' . $fuente['potencia']
                                                                                            . ',' . $fuente['certificacion'] . ',' . $fuente['imagen'] . ',' . $fuente['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <?php
        $db = conectarDB();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $idGabinete = $_POST['idGabinete'];
            $idMotherboard = $_POST['idMotherboard'];
            $idProcesador = $_POST['idProcesador'];
            $idDisipador = $_POST['idDisipador'];
            $idRAM = $_POST['idRAM'];
            $idHDD = $_POST['idHDD'];
            $idM2 = $_POST['idM2'];
            $idGrafica = $_POST['idGrafica'];
            $idFuente = $_POST['idFuente'];
            $nombreEnsamblaje = $_POST['nombre'];

            $cantidadRAM = $_POST['cantidadRAM'];
            $cantidadHDD = $_POST['cantidadHDD'];
            $cantidadM2 = $_POST['cantidadM2'];


            $idSSD = $_POST['idSSD'];
            $cantidadSSD = $_POST['cantidadSSD'];

            $fecha = date("Y-m-d H:i:s");

            // Validar idHDD y cantidadHDD
            $idHDD = !empty($idHDD) ? $idHDD : "NULL";
            $cantidadHDD = $idHDD !== "NULL" ? $cantidadHDD : "NULL";

            // Validar idSSD y cantidadSSD
            $idSSD = !empty($idSSD) ? $idSSD : "NULL";
            $cantidadSSD = $idSSD !== "NULL" ? $cantidadSSD : "NULL";

            // Validar idM2 y cantidadM2
            $idM2 = !empty($idM2) ? $idM2 : "NULL";
            $cantidadM2 = $idM2 !== "NULL" ? $cantidadM2 : "NULL";

            // Validar idTarjetasGraficas
            $idGrafica = !empty($idGrafica) ? $idGrafica : "NULL";

            // Construir el query
            $query = "INSERT INTO ensamblajes (idUsuarios, nombre, idProcesador, idDisipador,
            idMotherboard, idRam, idSATA, idTarjetasGraficas, idFuentesPoder, fechaCreacion,
            idM2, cantidadRAM, cantidadSATA, cantidadM2, cantidadSSD, idSSD, idGabinete)
            VALUES ($idUsuario, '$nombreEnsamblaje', $idProcesador, $idDisipador, $idMotherboard,
            $idRAM, $idHDD, $idGrafica, $idFuente, '$fecha', $idM2, $cantidadRAM, $cantidadHDD,
            $cantidadM2, $cantidadSSD, $idSSD, $idGabinete);";
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
                                title: 'Ensamblaje guardado',
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
        ?>
        <div class="area-ensamblaje">

            <div class="boton-titulo">
                <h2>Area de Ensamblaje</h2>
                <button class="btn-ensamblar" type="button">Crear ensamblaje</button>
            </div>

            <div class="PC-info">
                <svg class="PC " xmlns="http://www.w3.org/2000/svg" id="Capa_2" data-name="Capa 2" viewBox="0 0 553.34 499.9">
                    <defs>
                        <style>
                            .cls-1 {
                                font-size: 5.25px;
                            }

                            .cls-1,
                            .cls-2,
                            .cls-3,
                            .cls-4,
                            .cls-5 {
                                fill: #1d1d1b;
                            }

                            .cls-1,
                            .cls-3 {
                                font-family: GillSansMT-Bold, 'Gill Sans MT';
                            }

                            .cls-1,
                            .cls-3,
                            .cls-4 {
                                font-weight: 700;
                            }

                            .cls-6 {
                                stroke-width: 3px;
                            }

                            .cls-6,
                            .cls-7,
                            .cls-2,
                            .cls-8,
                            .cls-9 {
                                stroke-miterlimit: 10;
                            }

                            .cls-6,
                            .cls-7,
                            .cls-8,
                            .cls-9 {
                                fill: #fff;
                                stroke: #1d1d1b;
                            }

                            .cls-7,
                            .cls-2 {
                                stroke-width: 4px;
                            }


                            .cls-13 {
                                fill: none;
                            }

                            .cls-10 {
                                letter-spacing: 0em;
                            }

                            .cls-11 {
                                letter-spacing: -.02em;
                            }

                            .cls-2 {
                                stroke: #fff;

                            }

                            .cls-12 {
                                letter-spacing: 0em;
                                font-weight: 700;
                            }

                            .cls-13 {
                                letter-spacing: 0em;
                                font-weight: 700;
                            }

                            .cls-14 {
                                letter-spacing: .09em;
                                font-weight: 700;
                            }

                            .cls-3 {
                                font-size: 8px;
                            }

                            .cls-15 {
                                letter-spacing: .02em;
                                font-weight: 700;
                            }

                            .cls-8 {
                                stroke-width: 2px;
                            }

                            .cls-4 {
                                font-family: Bahnschrift-Bold, Bahnschrift;
                                font-size: 12.57px;
                                font-variation-settings: 'wght' 700, 'wdth' 100;
                                fill: #1d1d1b;
                            }

                            .cls-16 {
                                letter-spacing: 0em;
                            }

                            .cls-17 {
                                letter-spacing: -.01em;
                            }

                            .E {
                                letter-spacing: -.06em;
                            }
                        </style>
                    </defs>
                    <g id="Capa_1-2" data-name="Capa 1">
                        <!-- Contenedor Gabinete-->
                        <path id="drop-zone-gabinete" class="cls-6 borde-gris-componente" d="m444.27,445.78H105.26c-21.5,45.3-32.33,52.59-53.53,52.62-50.23.06-50.23-27.93-50.23-45.36V28.06C1.5,13.39,15.53,1.5,32.84,1.5h484.38c19.12,0,34.62,13.13,34.62,29.33v418.5c0,21.74,0,49.55-39.72,49.06-50.05-.62-45.54-7.14-67.85-52.61Z" />
                        <polyline class="cls-6 borde-gris-componente partes-gabinete" points="490 1.5 490 444.83 59.54 444.83 1.5 444.83" />
                        <line class="cls-6 borde-gris-componente partes-gabinete" x1="1.5" y1="341.83" x2="490" y2="341.83" />
                        <!-- Contenedor Fuente-->
                        <path id="drop-zone-fuente" class="cls-7 borde-gris-componente" d="m206.92,430.37H22.69c-3.93,0-7.12-2.61-7.12-5.84v-67.18c0-3.22,3.19-5.84,7.12-5.84h184.23c3.93,0,7.12,2.61,7.12,5.84v67.18c0,3.22-3.19,5.84-7.12,5.84Z" />
                        <g class="fuente">
                            <path class="cls-7 fuente-partes" d="m42.32,430.37h30.24v5.49c0,2.9-3.09,5.25-6.91,5.25h-15.99c-4.06,0-7.34-2.5-7.34-5.58v-5.17Z" />
                            <path class="cls-7 fuente-partes" d="m156.09,430.37h30.24v5.49c0,2.9-3.09,5.25-6.91,5.25h-15.99c-4.06,0-7.34-2.5-7.34-5.58v-5.17Z" />
                            <ellipse class="cls-8 fuente-partes" cx="27.2" cy="361.8" rx="5.04" ry="3.83" />
                            <ellipse class="cls-8 fuente-partes" cx="27.2" cy="421.43" rx="5.04" ry="3.83" />
                            <ellipse class="cls-8 fuente-partes" cx="197.72" cy="361.8" rx="5.04" ry="3.83" />
                            <ellipse class="cls-8 fuente-partes" cx="197.72" cy="421.43" rx="5.04" ry="3.83" />
                            <path class="cls-7 fuente-partes" d="m214.04,416.64l8.8-2.97v-14.24c-2.93-.69-5.87-1.38-8.8-2.08v19.29Z" />
                            <path class="cls-2 fuente-partes" d="m119.17,367.35h10.47c4.05,0,6.07,4.01,3.2,6.35l-11.29,9.2h8.68c3.46,0,5,3.57,2.3,5.35l-43.86,28.91c-2.04,1.34-4.84-.61-3.56-2.47l13.97-20.26-11.25.56c-3.14.16-4.89-2.92-2.71-4.78l18.59-20.35c3.28-2.82,10.72-2.51,15.48-2.51Z" />
                        </g>
                        <!-- Contenedor Motherboard-->
                        <rect id="drop-zone-motherboard" class="cls-7 borde-gris-componente" x="33.22" y="26.46" width="262.61" height="279.81" rx="10.7" ry="10.7" />
                        <!-- Contenedor procesador-->
                        <rect id="drop-zone-procesador" class="cls-7 borde-gris-componente" x="98.48" y="62.05" width="67.92" height="64.13" rx="8.61" ry="8.61" />
                        <g>
                            <!-- Contenedor RAMS-->
                            <rect id="drop-zone-ram" class="cls-7 borde-gris-componente ram1" x="196.36" y="49.8" width="8.78" height="91.87" rx="2.47" ry="2.47" />
                            <line class="cls-7 borde-gris-componente ram ram1" x1="200.75" y1="50.25" x2="200.75" y2="41.8" />
                            <line class="cls-7 borde-gris-componente ram ram1" x1="200.75" y1="141.84" x2="200.75" y2="150.28" />
                            <line class="cls-7 borde-gris-componente ram ram1" x1="196.36" y1="100.74" x2="205.14" y2="100.74" />
                            <rect id="drop-zone-ram2" class="cls-7 borde-gris-componente ram2" x="220.71" y="49.49" width="8.78" height="91.87" rx="2.47" ry="2.47" />
                            <line class="cls-7 borde-gris-componente ram ram2" x1="225.1" y1="49.94" x2="225.1" y2="41.5" />
                            <line class="cls-7 borde-gris-componente ram ram2" x1="225.1" y1="141.53" x2="225.1" y2="149.98" />
                            <line class="cls-7 borde-gris-componente ram ram2" x1="220.71" y1="100.44" x2="229.49" y2="100.44" />
                        </g>
                        <polygon id="drop-zone-grafica" class="cls-7 borde-gris-componente" points="190.86 259.28 76.47 259.28 76.47 244.8 190.86 244.8 190.86 252.04 190.86 259.28" />
                        <line class="cls-7 borde-gris-componente" x1="201.23" y1="252.04" x2="190.86" y2="252.04" />
                        <rect id="drop-zone-disipador" class="cls-7 borde-gris-componente" x="48.57" y="50.4" width="26.83" height="84.43" />
                        <g>
                            <rect class="cls-7 borde-gris-componente ram3" x="242.7" y="49.34" width="8.78" height="91.87" rx="2.47" ry="2.47" />
                            <line class="cls-7 borde-gris-componente ram ram3" x1="247.09" y1="49.78" x2="247.09" y2="41.34" />
                            <line class="cls-7 borde-gris-componente ram ram3" x1="247.09" y1="141.38" x2="247.09" y2="149.82" />
                            <line class="cls-7 borde-gris-componente ram ram3" x1="242.7" y1="100.28" x2="251.48" y2="100.28" />
                            <rect class="cls-7 borde-gris-componente ram4" x="267.05" y="49.03" width="8.78" height="91.87" rx="2.47" ry="2.47" />
                            <line class="cls-7 borde-gris-componente ram ram4" x1="271.44" y1="49.48" x2="271.44" y2="41.03" />
                            <line class="cls-7 borde-gris-componente ram ram4" x1="271.44" y1="141.07" x2="271.44" y2="149.52" />
                            <line class="cls-7 borde-gris-componente ram ram4" x1="267.05" y1="99.98" x2="275.83" y2="99.98" />
                        </g>
                        <!-- Contenedor grafica -->
                        <g class="grafica-nvidia">
                            <path class="grafica-contenedor" class="cls-7" d="m67.11,212.94h84.9c2.78,0,5.49.62,7.77,1.77l6.13,3.1c1.93.97,5.43,1.77,7.77,1.77h65.5c2.34,0,5.84-.8,7.77-1.77l6.13-3.1c2.28-1.15,4.99-1.77,7.77-1.77h86.08c10.07,0,18.24,5.97,18.24,13.34v41.7c0,7.37-8.17,13.34-18.24,13.34h-85.9c-2.88,0-5.69-.67-8.03-1.9l-1.94-1.03c-2.33-1.24-5.14-1.9-8.03-1.9h-73.21c-2.88,0-5.69.67-8.03,1.9l-1.94,1.03c-2.33,1.24-5.14,1.9-8.03,1.9h-84.73c-10.07,0-18.24-5.97-18.24-13.34v-41.7c0-7.37,8.17-13.34,18.24-13.34Z" />
                            <path transform="translate(0, 1)" class="cls-7 grafica-placa-nvidia" d="m156.11,212.94l5.52,3.09c2.89,1.93,6.46,2.98,10.13,2.98h69.15c3.5,0,6.91-.95,9.73-2.72l4.44-3.35h-98.97Z" />
                            <line class="cls-8 grafica-disipador" x1="168.78" y1="223.07" x2="168.78" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="175.5" y1="223.07" x2="175.5" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="182.63" y1="223.07" x2="182.63" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="189.35" y1="223.07" x2="189.35" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="196.48" y1="223.07" x2="196.48" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="202.77" y1="223.07" x2="202.77" y2="276.48" />
                            <rect class="cls-9 grafica-disipador" x="208.65" y="219.57" width="23.5" height="6.87" />
                            <line class="cls-9" x1="208.65" y1="223.01" x2="232.15" y2="223.01" />
                            <line class="cls-9" x1="214.1" y1="219.57" x2="214.1" y2="226.44" />
                            <line class="cls-9" x1="220.4" y1="219.57" x2="220.4" y2="226.44" />
                            <line class="cls-9" x1="225.85" y1="219.57" x2="225.85" y2="226.44" />
                            <line class="cls-8 grafica-disipador" x1="208.65" y1="230.13" x2="208.65" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="214.1" y1="230.13" x2="214.1" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="220.4" y1="230.13" x2="220.4" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="225.85" y1="230.13" x2="225.85" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="232.15" y1="230.13" x2="232.15" y2="276.48" />
                            <text class="cls-4" transform="translate(261.16 249.78) scale(1.01 1)">
                                <tspan class="cls-15 cls-12 letraNvidia" x="0" y="0">N</tspan>
                                <tspan class="cls-12 letraNvidia" x="9.05" y="0">V</tspan>
                                <tspan class="cls-12 letraNvidia" x="16.48" y="0">I</tspan>
                                <tspan class="cls-15 cls-12 letraNvidia" x="19.94" y="0">DI</tspan>
                                <tspan class="cls-12 letraNvidia" x="31.41" y="0">A </tspan>
                                <tspan class="cls-15 cls-12 letraNvidia" x="42.92" y="0">G</tspan>
                                <tspan class="cls-10 letraNvidia" x="50.92" y="0">EF</tspan>
                                <tspan class="cls-16 letraNvidia" x="65.46" y="0">O</tspan>
                                <tspan class="cls-11 letraNvidia" x="73.45" y="0">R</tspan>
                                <tspan class="cls-15 cls-12 letraNvidia" x="81.4" y="0">C</tspan>
                                <tspan class="cls-12 cls-15 letraNvidia" x="89.05" y="0">E</tspan>
                            </text>
                        </g>
                        <g class="grafica-radeon">
                            <path class="grafica-contenedor" class="cls-7" d="m67.11,212.94h84.9c2.78,0,5.49.62,7.77,1.77l6.13,3.1c1.93.97,5.43,1.77,7.77,1.77h65.5c2.34,0,5.84-.8,7.77-1.77l6.13-3.1c2.28-1.15,4.99-1.77,7.77-1.77h86.08c10.07,0,18.24,5.97,18.24,13.34v41.7c0,7.37-8.17,13.34-18.24,13.34h-85.9c-2.88,0-5.69-.67-8.03-1.9l-1.94-1.03c-2.33-1.24-5.14-1.9-8.03-1.9h-73.21c-2.88,0-5.69.67-8.03,1.9l-1.94,1.03c-2.33,1.24-5.14,1.9-8.03,1.9h-84.73c-10.07,0-18.24-5.97-18.24-13.34v-41.7c0-7.37,8.17-13.34,18.24-13.34Z" />
                            <path class="cls-7 grafica-placa-radeon" transform="translate(0, 1)" d="m156.11,212.94l5.52,3.09c2.89,1.93,6.46,2.98,10.13,2.98h69.15c3.5,0,6.91-.95,9.73-2.72l4.44-3.35h-98.97Z" />
                            <line class="cls-8 grafica-disipador" x1="168.78" y1="223.07" x2="168.78" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="175.5" y1="223.07" x2="175.5" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="182.63" y1="223.07" x2="182.63" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="189.35" y1="223.07" x2="189.35" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="196.48" y1="223.07" x2="196.48" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="202.77" y1="223.07" x2="202.77" y2="276.48" />
                            <rect class="cls-9 grafica-disipador" x="208.65" y="219.57" width="23.5" height="6.87" />
                            <line class="cls-9" x1="208.65" y1="223.01" x2="232.15" y2="223.01" />
                            <line class="cls-9" x1="214.1" y1="219.57" x2="214.1" y2="226.44" />
                            <line class="cls-9" x1="220.4" y1="219.57" x2="220.4" y2="226.44" />
                            <line class="cls-9" x1="225.85" y1="219.57" x2="225.85" y2="226.44" />
                            <line class="cls-8 grafica-disipador" x1="208.65" y1="230.13" x2="208.65" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="214.1" y1="230.13" x2="214.1" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="220.4" y1="230.13" x2="220.4" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="225.85" y1="230.13" x2="225.85" y2="276.48" />
                            <line class="cls-8 grafica-disipador" x1="232.15" y1="230.13" x2="232.15" y2="276.48" />
                            <text class="cls-4" transform="translate(261.16 249.78) scale(1.01 1)">
                                <tspan class="cls-15 cls-12 letraRadeon" x="0" y="0">A</tspan>
                                <tspan class="cls-15 cls-12 letraRadeon" x="0" y="0">A</tspan>
                                <tspan class="cls-12 letraRadeon" x="9.05" y="0">M</tspan>
                                <tspan class="cls-15 cls-12 letraRadeon" x="19.94" y="0">D</tspan>
                                <tspan class="cls-12 letraRadeon" x="33.41" y="0"></tspan>
                                <tspan class="cls-15 cls-12 letraRadeon" x="42.92" y="0">R</tspan>
                                <tspan class="cls-10 letraRadeon E" x="50.92" y="0">AD</tspan>
                                <tspan class="cls-15 cls-12 letraRadeon E" x="65.46" y="0">E</tspan>
                                <tspan class="cls-11 letraRadeon" x="73.45" y="0">O</tspan>
                                <tspan class="cls-15 cls-12 letraRadeon" x="81.4" y="0">N</tspan>
                            </text>
                        </g>
                        <!-- Contenedor discos duros-->
                        <rect id="drop-zone-SATA" class="cls-7 borde-gris-componente" x="328.29" y="350" width="150" height="85" />
                        <g class="SATA">
                            <path transform="translate(-5, -5)" class="cls-7" d="m351.83,364.32h115.88c4.83,0,8.75,4.26,8.75,9.51v5.59c0,5.25-3.92,9.51-8.75,9.51h-115.88c-4.83,0-8.75-4.26-8.75-9.51v-5.59c0-5.25,3.92-9.51,8.75-9.51Z" />
                            <ellipse transform="translate(-5, -5)" class="cls-7" cx="460.11" cy="376.62" rx="5.83" ry="5" />
                            <path transform="translate(-5, -5)" class="cls-7" d="m361.94,371.63h76.69c3.57,0,6.47,2.24,6.47,5h0c0,2.76-2.9,5-6.47,5h-76.69c-3.57,0-6.47-2.24-6.47-5h0c0-2.76,2.9-5,6.47-5Z" />
                            <g>
                                <path transform="translate(-5, -5)" class="cls-7" d="m351.52,388.92h115.88c4.83,0,8.75,4.26,8.75,9.51v5.59c0,5.25-3.92,9.51-8.75,9.51h-115.88c-4.83,0-8.75-4.26-8.75-9.51v-5.59c0-5.25,3.92-9.51,8.75-9.51Z" />
                                <ellipse transform="translate(-5, -5)" class="cls-7" cx="459.79" cy="401.22" rx="5.83" ry="5" />
                                <path transform="translate(-5, -5)" class="cls-7" d="m361.62,396.23h76.69c3.57,0,6.47,2.24,6.47,5h0c0,2.76-2.9,5-6.47,5h-76.69c-3.57,0-6.47-2.24-6.47-5h0c0-2.76,2.9-5,6.47-5Z" />
                            </g>
                            <path transform="translate(-5, -5)" class="cls-7" d="m351.52,413.52h115.88c4.83,0,8.75,4.26,8.75,9.51v5.59c0,5.25-3.92,9.51-8.75,9.51h-115.88c-4.83,0-8.75-4.26-8.75-9.51v-5.59c0-5.25,3.92-9.51,8.75-9.51Z" />
                            <ellipse transform="translate(-5, -5)" class="cls-7" cx="459.79" cy="425.82" rx="5.83" ry="5" />
                            <path transform="translate(-5, -5)" class="cls-7" d="m361.62,420.83h76.69c3.57,0,6.47,2.24,6.47,5h0c0,2.76-2.9,5-6.47,5h-76.69c-3.57,0-6.47-2.24-6.47-5h0c0-2.76,2.9-5,6.47-5Z" />
                        </g>
                        <!-- Contenedor M2-->
                        <g class="M2">
                            <path class="cls-7" d="m201.33,194.49H69.27c-2.35,0-4.26-1.64-4.26-3.64v-5.7c0-.35.26-.67.64-.8h0c6.52.04,6.61-7.56,0-7.62h0c-.39-.13-.64-.45-.64-.8v-5.7c0-2,1.92-3.64,4.26-3.64h132.06c2.35,0,4.26,1.64,4.26,3.64v20.62c0,2-1.92,3.64-4.26,3.64Z" />
                            <rect class="cls-7" x="82.23" y="173.16" width="19.76" height="13.53" />
                            <rect class="cls-7" x="110.66" y="173.16" width="19.76" height="13.53" />
                            <rect class="cls-7" x="137.96" y="173.16" width="19.76" height="13.53" />
                            <rect class="cls-7" x="167.48" y="175.57" width="22.18" height="8.71" />
                        </g>
                        <ellipse class="cls-9 borde-gris-componente tornillo" cx="56.69" cy="180.54" rx="4.63" ry="3.44" />
                        <line class="cls-9 borde-gris-componente tornillo" x1="56.69" y1="177.1" x2="56.69" y2="183.98" />
                        <line class="cls-9 borde-gris-componente tornillo" x1="61.32" y1="180.54" x2="52.06" y2="180.54" />
                        <!-- Contenedor m2-->
                        <path id="drop-zone-M2" class="cls-6 borde-gris-componente" d="m215.77,166.37h6.26c1.66,0,3,1.34,3,3v22.12c0,1.66-1.34,3-3,3h-6.26v-28.12h0Z" />

                        <!-- Contenedor procesador-->

                        <g class="procesador-amd">
                            <rect class="cls-9 fill-amd" x="109.04" y="69.64" width="47.39" height="49.64" rx="6.14" ry="6.14" />
                            <rect class="cls-9" x="113.53" y="74.6" width="37.91" height="39.71" rx="7" ry="7" />
                            <g>
                                <line class="cls-9" x1="121.36" y1="69.64" x2="121.36" y2="65.95" />
                                <line class="cls-9" x1="127.05" y1="69.64" x2="127.05" y2="65.95" />
                                <line class="cls-9" x1="132.73" y1="69.64" x2="132.73" y2="65.95" />
                                <line class="cls-9" x1="138.42" y1="69.64" x2="138.42" y2="65.95" />
                                <line class="cls-9" x1="144.11" y1="69.64" x2="144.11" y2="65.95" />
                            </g>
                            <g>
                                <line class="cls-9" x1="159.95" y1="104.39" x2="156.43" y2="104.39" />
                                <line class="cls-9" x1="159.95" y1="98.43" x2="156.43" y2="98.43" />
                                <line class="cls-9" x1="159.95" y1="92.47" x2="156.43" y2="92.47" />
                                <line class="cls-9" x1="159.95" y1="86.52" x2="156.43" y2="86.52" />
                                <line class="cls-9" x1="159.95" y1="80.56" x2="156.43" y2="80.56" />
                            </g>
                            <g>
                                <line class="cls-9" x1="108.93" y1="104.39" x2="105.41" y2="104.39" />
                                <line class="cls-9" x1="109.06" y1="98.43" x2="105.41" y2="98.43" />
                                <line class="cls-9" x1="108.8" y1="92.47" x2="105.02" y2="92.47" />
                                <line class="cls-9" x1="108.93" y1="86.52" x2="105.41" y2="86.52" />
                                <line class="cls-9" x1="108.93" y1="80.56" x2="105.41" y2="80.56" />
                            </g>
                            <g>
                                <line class="cls-9" x1="144.11" y1="119.28" x2="144.11" y2="122.97" />
                                <line class="cls-9" x1="138.42" y1="119.28" x2="138.42" y2="122.97" />
                                <line class="cls-9" x1="132.73" y1="119.28" x2="132.73" y2="122.97" />
                                <line class="cls-9" x1="127.05" y1="119.28" x2="127.05" y2="122.97" />
                                <line class="cls-9" x1="121.36" y1="119.28" x2="121.36" y2="122.97" />
                            </g>
                            <text class="cls-1 marca-color" transform="translate(118.85 88.14) scale(.95 1)">
                                <tspan style="fill :burlywood;" x="0" y="0">AMD</tspan>
                            </text>
                            <text class="cls-3" transform="translate(118.9 95.42) scale(.97 1)">
                                <tspan class="cls-17" x="0" y="0">R</tspan>
                                <tspan class="cls-14" x="4.87" y="0">YZEN</tspan>
                            </text>
                            <polygon class="cls-5" points="136.34 86.52 134.47 88.41 132.29 88.41 132.29 86.24 133.97 83.95 133.95 86.51 136.34 86.52" />
                            <g>
                                <polygon class="cls-9 borde-gris-componente" points="136.54 83.49 135.04 83.49 134.64 83.23 136.54 83.23 136.54 83.49" />
                                <polygon class="cls-9 borde-gris-componente" points="136.98 83.99 136.98 85.48 137.39 85.88 137.39 83.99 136.98 83.99" />
                                <rect class="cls-9 borde-gris-componente" x="136.98" y="83.23" width=".41" height=".32" />
                            </g>
                        </g>

                        <g class="procesador-intel">
                            <rect class="cls-9 fill-intel" x="109.04" y="69.64" width="47.39" height="49.64" rx="6.14" ry="6.14" />
                            <rect class="cls-9" x="113.53" y="74.6" width="37.91" height="39.71" rx="7" ry="7" />
                            <g>
                                <line class="cls-9" x1="121.36" y1="69.64" x2="121.36" y2="65.95" />
                                <line class="cls-9" x1="127.05" y1="69.64" x2="127.05" y2="65.95" />
                                <line class="cls-9" x1="132.73" y1="69.64" x2="132.73" y2="65.95" />
                                <line class="cls-9" x1="138.42" y1="69.64" x2="138.42" y2="65.95" />
                                <line class="cls-9" x1="144.11" y1="69.64" x2="144.11" y2="65.95" />
                            </g>
                            <g>
                                <line class="cls-9" x1="159.95" y1="104.39" x2="156.43" y2="104.39" />
                                <line class="cls-9" x1="159.95" y1="98.43" x2="156.43" y2="98.43" />
                                <line class="cls-9" x1="159.95" y1="92.47" x2="156.43" y2="92.47" />
                                <line class="cls-9" x1="159.95" y1="86.52" x2="156.43" y2="86.52" />
                                <line class="cls-9" x1="159.95" y1="80.56" x2="156.43" y2="80.56" />
                            </g>
                            <g>
                                <line class="cls-9" x1="108.93" y1="104.39" x2="105.41" y2="104.39" />
                                <line class="cls-9" x1="109.06" y1="98.43" x2="105.41" y2="98.43" />
                                <line class="cls-9" x1="108.8" y1="92.47" x2="105.02" y2="92.47" />
                                <line class="cls-9" x1="108.93" y1="86.52" x2="105.41" y2="86.52" />
                                <line class="cls-9" x1="108.93" y1="80.56" x2="105.41" y2="80.56" />
                            </g>
                            <g>
                                <line class="cls-9" x1="144.11" y1="119.28" x2="144.11" y2="122.97" />
                                <line class="cls-9" x1="138.42" y1="119.28" x2="138.42" y2="122.97" />
                                <line class="cls-9" x1="132.73" y1="119.28" x2="132.73" y2="122.97" />
                                <line class="cls-9" x1="127.05" y1="119.28" x2="127.05" y2="122.97" />
                                <line class="cls-9" x1="121.36" y1="119.28" x2="121.36" y2="122.97" />
                            </g>
                            <text class="cls-1" transform="translate(118.85 88.14) scale(.95 1)">
                                <tspan x="0" y="0">intel</tspan>
                            </text>
                            <text class="cls-3" transform="translate(118.9 95.42) scale(.97 1)">
                                <tspan class="cls-17" x="0" y="0">C</tspan>
                                <tspan class="cls-14" x="4.87" y="0">ORE</tspan>
                            </text>
                        </g>

                        <g class="disipador">
                            <path d="m107.49,54.61c-1.22.41-2.27,1.23-2.92,2.32-.55.87-.63,1.21-.72,3.16l-.13,2.21-1.91.07c-2.27.11-3.79.58-5.2,1.58-1.3.95-2.23,2.05-2.9,3.44l-.55,1.17-.06,27.96c-.02,18.3.02,28.32.17,28.99.5,2.45,2.34,4.57,4.9,5.71.8.35,1.6.65,1.75.65.23,0,.29.5.29,2.47,0,5.78,1.03,8.44,4.42,11.49,1.96,1.73,4.59,2.99,7.22,3.42,2.46.41,39.07.41,41.53,0,2.61-.43,5.26-1.69,7.22-3.42,3.37-3.01,4.4-5.67,4.42-11.42,0-2.03.06-2.55.29-2.55.15,0,.95-.3,1.75-.65,1.62-.71,3.3-2.14,4.04-3.4,1.12-1.93,1.09-.95,1.03-31.22l-.06-28.04-.48-1.06c-1.47-3.22-4.69-5.17-8.56-5.17h-1.51l-.13-2.21c-.08-1.99-.17-2.32-.72-3.22-1.79-2.94-6.23-3.44-8.69-.97-1.09,1.1-1.33,1.8-1.43,4.22l-.08,2.19-1.73-.06-1.7-.06-.11-2.32c-.11-2.1-.17-2.4-.67-3.18-1.83-2.75-6.06-3.18-8.5-.87-1.22,1.13-1.43,1.71-1.51,4.18l-.08,2.29h-7.07l-.08-2.29c-.08-2.47-.29-3.05-1.51-4.18-2.44-2.31-6.67-1.88-8.48.86-.55.8-.59,1.08-.69,3.2l-.11,2.32-1.7.06-1.73.06-.08-2.19c-.06-1.39-.21-2.44-.42-2.86-.46-.93-1.56-1.99-2.57-2.44-1.09-.48-3.11-.61-4.21-.26Zm2.97,3.35c.57.45.59.5.59,2.38v1.92l-1.73.06-1.75.06v-1.97c0-1.84.04-1.99.53-2.42.65-.59,1.58-.59,2.36-.02Zm14.39.09c.59.54.61.59.61,2.42v1.88h-3.58v-1.92c.02-1.95.13-2.29.95-2.7.69-.35,1.37-.24,2.02.32Zm17.51-.32c.86.39.97.73.99,2.7v1.92h-3.58v-1.88c0-1.82.02-1.88.61-2.42.65-.58,1.24-.67,1.98-.32Zm14.94.35c.29.32.36.76.36,2.34v1.93l-1.73-.06-1.75-.06v-1.92c0-1.9,0-1.93.61-2.4.5-.37.76-.45,1.37-.35.42.06.93.28,1.14.5Zm-49.76,11.51l-.06,4.09-.69.59-.67.61-4.73.06-4.73.06v-2.58c0-3.37.27-4.26,1.77-5.52.59-.52,1.41-1.04,1.81-1.15s2.23-.2,4.06-.22l3.35-.02-.08,4.09Zm46.58.22c.06,4.13.08,4.37.57,5.24.61,1.08,1.62,2.01,2.82,2.57.84.41,1.16.43,6,.48l5.09.06v38.1h-9.83l-1.28.58c-1.43.61-2.21,1.32-2.86,2.58-.4.76-.44,1.26-.5,5.15l-.08,4.33h-42.84l-.08-4.33c-.06-3.89-.11-4.39-.5-5.17-.61-1.17-1.56-2.05-2.76-2.58-.99-.45-1.16-.46-6.1-.52l-5.11-.06v-38.1h4.73c4.23,0,4.84-.04,5.87-.37,1.39-.46,2.61-1.47,3.3-2.71.48-.87.5-1.1.57-5.24l.08-4.31h42.84l.08,4.31Zm10.73-4.09c1.12.3,2.76,1.62,3.24,2.6.29.61.4,1.47.46,3.74l.08,2.94-4.76-.06-4.76-.06-.67-.61-.69-.59-.06-4.09-.08-4.09h3.2c1.87,0,3.56.09,4.04.22Zm-58.66,53.92c1.18.46,1.28.82,1.35,5.22l.08,4.07-3.56-.07c-4-.07-4.63-.24-5.95-1.56-1.18-1.19-1.33-1.73-1.43-4.96l-.08-2.92h4.52c2.99,0,4.73.07,5.07.22Zm62.37,2.7c-.11,3.24-.25,3.77-1.43,4.96-1.33,1.32-1.96,1.49-5.95,1.56l-3.56.07.08-4.07c.08-5.71-.23-5.43,6.35-5.45h4.59l-.08,2.92Zm-60.98,13.07c.11,2.97.15,3.33.61,4.18.69,1.23,2.1,2.44,3.56,3.03l1.2.5h39.35l1.2-.5c1.45-.59,2.86-1.8,3.56-3.03.46-.86.5-1.21.61-4.18l.11-3.25h3.58l-.02,3.09c-.02,2.58-.11,3.31-.46,4.37-.84,2.4-2.74,4.43-5.26,5.62-2.48,1.17-2.02,1.15-22.91,1.15-12.96,0-19.34-.06-20.09-.2-1.56-.28-3.89-1.3-5.05-2.21-1.33-1.02-2.61-2.75-3.11-4.26-.34-.91-.48-1.97-.57-4.13-.06-1.6-.06-3.05,0-3.22.13-.26.42-.3,1.87-.26l1.75.06.11,3.25Zm7.15.67v4.02l-.67-.13c-1.05-.19-2.17-.91-2.55-1.64-.29-.52-.36-1.23-.36-3.46v-2.81h3.58v4.02Zm7.15-.02v4h-3.58v-8h3.58v4Zm17.88,0v4h-14.31v-8h14.31v4Zm7.15,0v4h-3.58v-8h3.58v4Zm7.15-1.19c0,2.23-.06,2.94-.36,3.46-.38.73-1.49,1.45-2.52,1.64l-.69.13v-8.03h3.58v2.81Z" />
                            <path d="m101.1,68.97c-.74.45-.93,1.1-.57,1.86.74,1.58,3.26,1.1,3.26-.65,0-1.25-1.54-1.93-2.69-1.21Z" />
                            <path d="m130.41,70.27c-5.74.52-10.86,2.12-15.17,4.76-2.63,1.6-6.21,4.83-7.93,7.14-2.31,3.09-3.89,6.45-4.71,10.06-.55,2.47-.5,7.88.11,10.34,2.65,10.67,11.36,18.44,23.48,20.99,2.63.56,9.83.61,12.48.09,8.54-1.67,15.65-6.1,20.09-12.55,1.85-2.7,3.05-5.45,3.87-8.96.53-2.19.55-7.6.02-9.91-1.26-5.52-4.04-10.13-8.54-14.08-5.72-5.02-12.48-7.6-20.54-7.88-1.26-.04-2.69-.04-3.16,0Zm.61,4.35c1.7,2.34,2.52,4.82,2.5,7.62,0,2.25-.4,3.96-1.37,5.8l-.63,1.25-1.47.39c-.82.22-1.51.37-1.56.33s-.32-.56-.61-1.17c-2.04-4.05-6.61-7.77-11.13-9.04-.88-.24-1.6-.5-1.6-.59,0-.07.74-.61,1.64-1.21,3.09-2.03,7.22-3.61,10.9-4.2,2.5-.41,2.4-.43,3.32.82Zm6.25-.82c3.85.58,8.1,2.16,11.15,4.15l1.41.91-.21,1c-.93,4.63-4.69,8.7-9.7,10.49l-1.64.59-1.41-.65c-.78-.35-1.39-.74-1.37-.87.02-.11.34-.91.67-1.78,1.58-4,1.28-8.63-.82-12.57-.95-1.8-1.07-1.71,1.91-1.26Zm17.67,10.15c1.98,2.62,3.2,5.19,4,8.33.61,2.42.57,2.68-.48,3.31-4.46,2.7-10.31,3.2-15.28,1.28l-1.56-.59-.5-1.38c-.29-.74-.48-1.38-.46-1.39.04-.02.48-.2,1.01-.39,5.01-1.88,9.81-6.64,11.03-10.95q.15-.52.57-.19c.25.2.99,1.08,1.68,1.97Zm-40.63-1.51c1.98.48,4.38,1.58,6.02,2.75,2.08,1.51,4.17,4.22,4.92,6.47.23.69.23.82-.15,1.3-.23.28-.53.8-.67,1.12-.17.33-.32.61-.34.61-.04,0-1.09-.32-2.36-.69l-2.27-.71h-3.58c-3.09,0-3.79.06-5.22.43-1.3.33-3.07.97-4.61,1.67-.5.22.13-3.25,1.01-5.63,1.22-3.25,4.21-7.72,5.2-7.72.25,0,1.18.17,2.04.39Zm20.51,10.47c1.98.8,3.11,2.4,3.11,4.3-.02,1.84-.9,3.18-2.78,4.15-.82.43-1.2.5-2.55.5s-1.73-.07-2.55-.5c-1.14-.59-2.02-1.45-2.46-2.38-.4-.86-.4-2.71,0-3.55.84-1.73,2.92-2.96,5.01-2.96.78,0,1.51.15,2.21.45Zm-15.61,3.76c.84.17,2.19.58,2.99.91l1.49.59.36,1.1c.21.59.42,1.19.48,1.32.06.15-.42.45-1.28.78-2.04.82-4.08,2.08-5.79,3.59-2.34,2.06-3.35,3.55-5.03,7.49-.15.32-.34.15-1.43-1.13-1.62-1.93-3.03-4.37-3.93-6.79-.76-2.03-1.33-4.59-1.12-5.08.32-.73,4.04-2.36,6.35-2.81,1.79-.35,5.09-.33,6.9.02Zm40.13,2.94c0,1.93-1.24,5.69-2.8,8.39-1.03,1.82-2.97,4.37-3.32,4.37-.9,0-3.58-.73-5.13-1.41-3.07-1.32-5.51-3.4-7.01-6.01-1.43-2.44-1.45-2.62-.63-4.02.38-.67.76-1.21.84-1.21s.97.24,2,.54c2.69.8,4.4,1,7.2.89,2.71-.11,5.28-.67,7.34-1.62.65-.3,1.26-.54,1.37-.56.08,0,.15.28.15.63Zm-31.56,4.2c.34.2.95.5,1.37.67.61.22.74.35.61.59-1.39,2.75-1.98,6.08-1.58,8.89.25,1.93,1.18,4.67,2.04,6.01.27.45.46.86.42.91-.19.15-4.4-.56-6.12-1.02-2.25-.61-5.53-2.06-7.53-3.31-1.81-1.15-1.7-.84-1.07-3.16,1.16-4.24,5.13-8.01,10.08-9.59.59-.19,1.09-.33,1.12-.35.04,0,.36.17.67.37Zm10.06,2.51c.72,1.32,1.83,2.75,3.16,4.03,1.7,1.65,5.24,3.61,7.89,4.35.65.19,1.18.43,1.14.52-.15.41-3.47,2.36-5.51,3.25-2.42,1.06-4.84,1.77-7.43,2.16l-1.83.3-.57-.59c-.84-.87-1.98-3.01-2.5-4.72-.65-2.05-.65-5-.02-7.01.57-1.78,1.41-3.48,1.77-3.57.15-.02.84-.22,1.54-.41q1.26-.35,1.45.02c.11.2.53.95.93,1.67Z" />
                            <path d="m161.99,69.06c-1.03.71-.59,2.42.67,2.68.9.17,1.7-.19,2.04-.91.74-1.54-1.22-2.81-2.71-1.77Z" />
                            <path d="m100.93,123.04c-1.2.91-.4,2.71,1.2,2.71,1.47,0,2.23-1.75,1.14-2.7-.65-.59-1.58-.59-2.34-.02Z" />
                            <path d="m161.97,123.05c-1.09.95-.34,2.7,1.14,2.7,1.6,0,2.4-1.8,1.2-2.71-.76-.58-1.68-.58-2.34.02Z" />
                        </g>

                    </g>
                </svg>
                <div class="info">
                    <div class="h2-limpiar">
                        <h2>Componentes</h2>
                        <button class="btn-limpiar"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M440-520h80v-280q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800v280ZM200-360h560v-80H200v80Zm-58 240h98v-80q0-17 11.5-28.5T280-240q17 0 28.5 11.5T320-200v80h120v-80q0-17 11.5-28.5T480-240q17 0 28.5 11.5T520-200v80h120v-80q0-17 11.5-28.5T680-240q17 0 28.5 11.5T720-200v80h98l-40-160H182l-40 160Zm676 80H142q-39 0-63-31t-14-69l55-220v-80q0-33 23.5-56.5T200-520h160v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h160q33 0 56.5 23.5T840-440v80l55 220q13 38-11.5 69T818-40Zm-58-400H200h560Zm-240-80h-80 80Z" />
                            </svg>
                        </button>
                    </div>
                    <p class="indicacion indicacion-ensamblaje">Arrastre los componentes al area que aparezca en azul</p>
                    <div class="area-motherboard">

                    </div>
                    <div class="area-gabinete">

                    </div>
                    <div class="area-procesador">

                    </div>
                    <div class="area-disipador">

                    </div>
                    <div class="area-ram">

                    </div>
                    <div class="area-HDD">

                    </div>
                    <div class="area-SSD">

                    </div>
                    <div class="area-M2">

                    </div>
                    <div class="area-grafica">

                    </div>
                    <div class="area-fuente">

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="/src/js/info.js"></script>
    <script src="/src/js/drag.js"></script>
    <script src="/src/js/buscarCompo.js"></script>
    <script src="/src/js/listaComponente.js"></script>
</form>