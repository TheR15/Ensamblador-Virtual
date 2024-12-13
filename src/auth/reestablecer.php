<?php
$nombrePagina = 'Iniciar Sesion | Ensambler';
include '../includes/header.php';
require '../includes/database.php';
$db = conectarDB();
$token = $_GET['token'];
$mostrar = true;
if (!$token) {
    header('Location: login.php');
}

$query = "SELECT * FROM usuarios WHERE token = '$token'";

$resultado = mysqli_query($db, $query);

if (mysqli_num_rows($resultado) > 0) {
    //Si existe 
    
} else {
    $errores[] = 'Token no valido';
    $mostrar = false;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contrasena = mysqli_real_escape_string($db, $_POST['contrasena']);
    $usuario = mysqli_fetch_assoc($resultado);
    if (strlen($contrasena) < 6) {
        $errores = ['La contraseña debe contener al menos 6 caracteres'];
    }
    if(!$contrasena){
        $errores[] = 'Introduzca la nueva contrasena';
    }

    if(empty($errores)){
        //Hasheamos la nueva contrasena
        $contrasenahash = password_hash($contrasena, PASSWORD_BCRYPT);

        $idUsuario = $usuario['idUsuarios'];

        //Actualizamos la contrasena

        $query = "UPDATE usuarios SET contrasena = '$contrasenahash', token = NULL WHERE idUsuarios = '$idUsuario';";

        $resultado = mysqli_query($db,$query);

        if($resultado){
            header('Location: login.php');
        }
    }
}
?>

<body>
    <header class="header inicio">
        <?php
        $pagina = 'login';
        include '../includes/navegacion.php'
        ?>
        <main class="contenedor seccion">
        <?php foreach ($errores as $error) : ?>
                <div class="error">
                    <?php echo $error; ?>
                </div>
        <?php endforeach; ?>
            <?php if ($mostrar) { ?>
                <div class="registro">
                    <form action="" class="formulario" method="POST">
                        <h1>Introduce tu nueva contraseña</h1>
                        <label for="correo">Contraseña</label>
                        <input type="password" placeholder="Ingresa tu nueva contraseña" name="contrasena">
                        <p></p>
                        <input type="submit" value="Guardar contraseña">
                    </form>
                    <div class="derecha">
                    </div>
                <?php } ?>
                </div>
        </main>
    </header>
    <?php
    include '../includes/footer.php'
    ?>
</body>

</html>