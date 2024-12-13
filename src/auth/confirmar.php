<?php
$nombrePagina = 'Iniciar Sesion | Ensambler';
include '../includes/header.php';
require '../includes/database.php';
$db = conectarDB();
$token = $_GET['token'];

if (!$token) {
    header('Location: registro.php');
}

$query = "SELECT * FROM usuarios WHERE token = '$token';";
$resultado = mysqli_query($db, $query);

if (mysqli_num_rows($resultado) > 0) {
    $usuario = mysqli_fetch_assoc($resultado);

    $confirmado = 1;
    $token = null;

    $query = "UPDATE usuarios SET confirmado = '$confirmado', token = NULL WHERE idUsuarios = {$usuario['idUsuarios']} ";
    $resultado = mysqli_query($db, $query);

    if ($resultado) {
        $exitos[] = "Cuenta comprobada correctamente";
    } else {
        echo "Error al confirmar la cuenta: " . mysqli_error($db);
    }
} else {
    // No se encontró un usuario con este token
    $errores[] = "Token no válido";
}
?>

<body>
    <header class="header inicio">
        <?php
        $pagina = 'login';
        include '../includes/navegacion.php';
        ?>
        <main class="contenedor">
            <?php foreach ($errores as $error) : ?>
                <div class="error">
                    <?php echo $error; ?>
                </div>
            <?php endforeach; ?>

            <?php foreach ($exitos as $exito) : ?>
                <div class="exito">
                    <?php echo $exito; ?>
                </div>
            <?php endforeach; ?>
            <div class="seccion-confirmar">
                <a class="btn-confirmar" href="../auth/login.php">Iniciar Sesion</a>
            </div>
        </main>
    </header>
    <?php
    include '../includes/footer.php'
    ?>
</body>

</html>