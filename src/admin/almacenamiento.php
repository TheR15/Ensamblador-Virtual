<?php
session_start();
$nombre = $_SESSION['nombre'];
$titulo = 'almacenamiento';
$nombrePagina = 'Almacenamientos | Ensambler';
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
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //Campos
            $db = conectarDB();
            //Issets de los componentes
            $eliminar = isset($_POST['eliminar']);
            $editar = isset($_POST['editar']);

            //Eliminar disi$almacenamiento
            if ($eliminar) {
                $idAlmacenamiento = filter_var($_POST['eliminar'], FILTER_VALIDATE_INT);
                //Buscar nombre de la imagen para borrarla
                //Comprobar que no se este utilizando en un ensamblaje 
                $query = "SELECT * FROM ensamblajes WHERE idSATA = $idAlmacenamiento OR idM2 = $idAlmacenamiento OR idSSD = $idAlmacenamiento;";
                $resultado = mysqli_query($db, $query);
                if (mysqli_num_rows($resultado) > 0) {
                    echo "<script>
                            function alerta() {
                                Swal.fire({
                                    title: 'El componente esta en uso!',
                                    text: 'El componente no se elimino ya que esta siendo utilizado en un ensamblaje.',
                                    icon: 'warning'
                                });
                            }
                            document.addEventListener('DOMContentLoaded', (event) => {
                                alerta();
                            });
                        </script>";
                } else {
                    $query2 = "SELECT * FROM almacenamientos WHERE idAlmacenamientos = $idAlmacenamiento;";
                    $resultado2 = mysqli_query($db, $query2);
                    $Almacenamiento = mysqli_fetch_assoc($resultado2);
                    $imagenRuta = $Almacenamiento['imagen'];
                    $query = "DELETE FROM almacenamientos WHERE idAlmacenamientos = $idAlmacenamiento;";
                    $resultado = mysqli_query($db, $query);

                    $imagen = "../../imagenes/$imagenRuta";

                    if (unlink($imagen)) {
                        //echo 'se elimino';
                    } else {
                        //echo 'no se elimino';
                    }

                    if ($resultado) {
                        echo "<script>
                                function alerta() {
                                    Swal.fire({
                                        title: 'Eliminado!',
                                        text: 'El componente se eliminó correctamente.',
                                        icon: 'success'
                                    });
                                }
                                document.addEventListener('DOMContentLoaded', (event) => {
                                    alerta();
                                });
                            </script>";
                    }
                }
            }

            if ($editar) {
                //Campos a editar
                $nombre = $_POST['nombre'];
                $tipo = $_POST['tipo'];
                $capacidad = $_POST['capacidad'];
                $velocidadLectura = $_POST['lectura'];
                $velocidadEscritura = $_POST['escritura'];

                $idAlmacenamiento = filter_var($_POST['editar'], FILTER_VALIDATE_INT);

                $imagen = $_FILES['imagen'];
                $imagenAnterior = $_POST['imagenAnterior'];

                $imagen = $_FILES['imagen'];
                if ($imagen['name']) {
                    //Creamos carpeta de imagenes
                    $carpetaImagenes = '../../imagenes/';

                    if (!is_dir($carpetaImagenes)) {
                        mkdir($carpetaImagenes);
                    }

                    //Subir la imagen
                    move_uploaded_file($imagen['tmp_name'], $carpetaImagenes . $imagenAnterior);
                }

                $query = "UPDATE almacenamientos SET nombre = '$nombre', tipo = '$tipo', capacidad = $capacidad
                , velocidadLectura = $velocidadLectura, velocidadEscritura = $velocidadEscritura, imagen = '$imagenAnterior' WHERE
                idAlmacenamientos = $idAlmacenamiento;";
                $resultado = mysqli_query($db, $query);

                if ($resultado) {
                    echo "<script>
                            function alerta() {
                                Swal.fire({
                                    title: 'Actualizado!',
                                    text: 'El componente se actualizo correctamente.',
                                    icon: 'success'
                                });
                            }
                            document.addEventListener('DOMContentLoaded', (event) => {
                                alerta();
                            });
                        </script>";
                }
            }
        }
        ?>
        <div class="contenedor-agregar">
            <div class="titulo-agregar">
                <div>
                    <h1>Unidades de almacenamientos</h1>
                    <p>Listado de unidades de almacenamiento</p>
                </div>

                <div class="acciones-inicio">
                    <a href="../auth/login.php?login=false"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>Cerrar sesion</a>
                </div>
            </div>

            <div class="contenedor-busqueda">
                <label>Buscar</label>
                <input id="buscar" type="text" placeholder="Ingrese el nombre de la memoria almacenamiento a buscar">
            </div>

            <?php
            $db = conectarDB();
            $query = "SELECT * FROM almacenamientos;";
            $resultado = mysqli_query($db, $query);
            ?>

            <div class="contenedor-tabla">
                <table id="tabla" class="tabla">
                    <tr class="encabezado-tabla">
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Acciones</th>
                    </tr>
                    <?php while ($almacenamiento = mysqli_fetch_assoc($resultado)) : ?>
                        <tr class="datos-tabla">
                            <td><img src="../../imagenes/<?php echo $almacenamiento['imagen'] ?>" alt="No cargo"></td>
                            <td><?php echo $almacenamiento['nombre']; ?></td>
                            <td><?php echo $almacenamiento['marca']; ?></td>
                            <td>
                                <div class="acciones">
                                    <button class="editar" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos']
                                                                        . ',' . $almacenamiento['nombre'] . ',' . $almacenamiento['tipo']
                                                                        . ',' . $almacenamiento['capacidad'] . ',' . $almacenamiento['velocidadLectura'] . ',' . $almacenamiento['velocidadEscritura']
                                                                        . ',' . $almacenamiento['imagen']); ?>">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                        </svg></button>
                                    <button class="eliminar" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos'] . ',' . $titulo); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                        </svg></button>
                                    <button class="info-almacenamiento" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos']
                                                                                    . ',' . $almacenamiento['nombre'] . ',' . $almacenamiento['tipo']
                                                                                    . ',' . $almacenamiento['capacidad'] . ',' . $almacenamiento['velocidadLectura'] . ',' . $almacenamiento['velocidadEscritura']
                                                                                    . ',' . $almacenamiento['imagen'] . ',' . $almacenamiento['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg></button>
                                </div>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </table>
            </div>

            <?php
            $db = conectarDB();
            $query = "SELECT * FROM almacenamientos;";
            $resultado = mysqli_query($db, $query);
            ?>

            <?php while ($almacenamiento = mysqli_fetch_assoc($resultado)) : ?>
                <div class="tabla-moviles">
                    <div class="contenedor-tabla-moviles">
                        <div class="imagen-nombre-componente">
                            <img src="../../imagenes/<?php echo $almacenamiento['imagen'] ?>" alt="No cargo">
                            <h3 class="buscar-card"><?php echo $almacenamiento['nombre']; ?></h3>
                        </div>

                        <div class="datos-componentes">
                            <h3>Marca</h3>
                            <label class="buscar-card" for=""><?php echo $almacenamiento['marca']; ?></label>
                        </div>


                        <div class="acciones">
                            <button class="editar" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos']
                                                                . ',' . $almacenamiento['nombre'] . ',' . $almacenamiento['tipo']
                                                                . ',' . $almacenamiento['capacidad'] . ',' . $almacenamiento['velocidadLectura'] . ',' . $almacenamiento['velocidadEscritura']
                                                                . ',' . $almacenamiento['imagen']); ?>">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                </svg></button>
                            <button class="eliminar" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos'] . ',' . $titulo); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                </svg></button>
                            <button class="info-almacenamiento" value="<?php echo htmlspecialchars($almacenamiento['idAlmacenamientos']
                                                                            . ',' . $almacenamiento['nombre'] . ',' . $almacenamiento['tipo']
                                                                            . ',' . $almacenamiento['capacidad'] . ',' . $almacenamiento['velocidadLectura'] . ',' . $almacenamiento['velocidadEscritura']
                                                                            . ',' . $almacenamiento['imagen'] . ',' . $almacenamiento['marca']); ?>"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg></button>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
</div>
<script src="../js/acciones.js"></script>
<script src="../js/buscar.js"></script>
<script src="../js/almacenamiento.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>