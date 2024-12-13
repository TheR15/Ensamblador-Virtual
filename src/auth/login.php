<?php
session_start();
$nombrePagina = 'Iniciar Sesion | Ensambler';
include '../includes/header.php';
require '../includes/database.php';
$db = conectarDB();
?>

<body>
    <header class="header inicio">
        <?php
        $pagina = 'login';
        include '../includes/navegacion.php';
        $errores = [];

        if (isset($_GET['login']) && $_GET['login'] === 'false') {
            // Destruye todas las variables de sesión
            $_SESSION = [];
            session_unset();
            session_destroy();
        
            // Redirige al formulario de login
            header("Location: login.php");
            exit;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $email = mysqli_real_escape_string($db, $_POST['email']);
            $contrasena = mysqli_real_escape_string($db, $_POST['contrasena']);

            if(!$email || !$contrasena){
                $errores [] = 'Todos los campos son obligatorios';
            }

            if(empty($errores)){
                //Verificamos que el usuario exista
                $query = "SELECT * FROM usuarios WHERE email = '$email';";
                $resultado = mysqli_query($db,$query);

                $usuario = mysqli_fetch_assoc($resultado);
                $confirmado = $usuario['confirmado'];
                $idUsuario = $usuario['idUsuarios'];
                $nombre = $usuario['nombre'];
                

                if(mysqli_num_rows($resultado)>0){
                    //Si existe
                    if($confirmado === "1"){
                        //Si esta confirmado
                        $contrasenahash = $usuario['contrasena'];
                        if(password_verify($contrasena,$contrasenahash)){
                            //Contrasena correcta
                            $emailAdmin = 'rodrigochg17@gmail.com';
                            $contrasenaAdmin = '21940097';
                            //Inicio de sesion para admin
                            if ($emailAdmin === $email && password_verify($contrasenaAdmin, $contrasenahash)) {
                                session_start();
                                $_SESSION['idUsuario'] = $idUsuario;
                                $_SESSION['nombre'] = $nombre;
                                $_SESSION['login'] = true;
                                header("Location: ../admin/agregar.php");
                                exit;
                            }
                            else{
                                session_start();
                                $_SESSION['idUsuario'] = $idUsuario;
                                $_SESSION['nombre'] = $nombre;
                                $_SESSION['login'] = true;
                                header("Location: ../users/principal.php");
                            }
                        }else{
                            //Contrasena incorrecta
                            $errores[]= 'Contraseña incorrecta';

                        }
                    }else{
                        $errores[]= 'El usuario no esta confirmado';
                    }
                }else{
                    //No existe
                    $errores[]= 'El usuario no existe';
                }
            }

        }
        ?>
        <main class="contenedor seccion">
        
            <div class="registro">
                <form action="" class="formulario" method="POST">
                <?php foreach ($errores as $error) : ?>
                <div class="error">
                    <?php echo $error; ?>
                </div>
        <?php endforeach; ?>
                    <h1>Iniciar sesion</h1>
                    <p>Aun no tienes una cuenta? <a href="registro.php">Crea tu cuenta</a></p>
                    <label for="correo">Email</label>
                    <input type="email" placeholder="Ingrese su correo electronico" name="email" value="<?php echo $email?>">
                    <label for="contrasena">Contraseña</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="contrasena">
                    <p>Olvidaste tu contraseña? <a href="recuperar.php">Recupera tu contraseña</a></p>
                    <input type="submit" value="Iniciar sesion">
                </form>
                <div class="derecha">
                </div>
            </div>
        </main>
    </header>
    <?php
    include '../includes/footer.php'
    ?>
</body>

</html>