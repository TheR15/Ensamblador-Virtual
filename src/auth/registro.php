<?php

use Classes\Email;

$nombrePagina = 'Registrarse | Ensambler';
include '../includes/header.php'
?>

<body>
    <header class="header inicio">
        <?php
        $pagina = 'registro';
        include '../includes/navegacion.php';
        require '../includes/database.php';
        require '../../classes/Email.php';
        $db = conectarDB();
        $query = '';
        //echo "<pre>"; 
        //    var_dump($_POST);
        //echo "</pre>";
        $errores = [];
        $nombre = '';
        $email = '';
        $contrasena = '';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $nombre = mysqli_real_escape_string($db, $_POST['nombre']);
            $email = mysqli_real_escape_string($db, $_POST['email']);
            $contrasena = mysqli_real_escape_string($db, $_POST['password']);
            $contrasena2 = mysqli_real_escape_string($db, $_POST['password2']);

            //Comprobar si ya existe un usuarios registrado con el mismo correo
            $query = "SELECT * FROM usuarios WHERE email = '$email';";

            $resultado = mysqli_query($db, $query);

            if (!$nombre || !$email || !$contrasena || !$contrasena2) {
                $errores[] = 'Todos los campos son obligatorios';
                //echo $errores;
            } else {
                if ($contrasena !== $contrasena2) {
                    $errores[] = 'Las contrasenas no son iguales';
                    //echo 'Las contrasenas no son iguales';
                } else {
                    if (mysqli_num_rows($resultado) > 0) {
                        $errores[] = 'El usuario ya esta registrado';
                        //echo 'El usuario ya esta registrado';
                    }
                }
            }

            if (empty($errores)) {
                //Hashear contrasena
                $contrasenahash = password_hash($contrasena, PASSWORD_BCRYPT);

                //Generar token de confirmacion
                $token = uniqid(); //md5 retorna 32 caracteres

                $confirmado = 0;

                $mail = new Email($email, $nombre, $token);

                $mail->enviarConfirmacion();

                $query = "INSERT INTO usuarios (nombre, email, contrasena , token, confirmado)
                VALUES ('$nombre', '$email', '$contrasenahash', '$token', '$confirmado');";


                $resultado = mysqli_query($db, $query);
                if ($resultado) {
                    echo "<style>
                        .swal2-title {
                            font-size: 24px; /* Tamaño de letra para el título */
                        }

                        .swal2-html-container {
                            font-size: 24px; /* Tamaño de letra para el contenido de texto */
                        }
                    </style>

                    <script>
                        function alerta() {
                            Swal.fire({
                                title: 'Confirme su cuenta!',
                                text: 'Hemos enviado instrucciones a su correo electrónico',
                                icon: 'success',
                                customClass: {
                                    title: 'swal2-title',
                                    htmlContainer: 'swal2-html-container'
                                }
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
        <main class="contenedor seccion ">

            <div class="registro">
                <form action="" class="formulario" method="POST">
                    <div id="referencia">
                    </div>
                    <?php foreach ($errores as $error) : ?>
                        <div class="error">
                            <?php echo $error; ?>
                        </div>
                    <?php endforeach; ?>
                    <h1>Crea tu cuenta</h1>
                    <p>Introduce tus datos para completar el registro</p>
                    <label for="nombre">Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" name="nombre" value="<?php echo $nombre ?>">
                    <label for="correo">Email</label>
                    <input type="email" placeholder="Ingrese su correo electronico" name="email" value="<?php echo $email ?>">
                    <label for="contrasena">Contraseña</label>
                    <input id="contrasena" type="password" placeholder="Ingrese su contraseña" name="password">
                    <label for="contrasena">Repite tu contraseña</label>
                    <input type="password" placeholder="Ingrese nuevamente su contraseña" name="password2">
                    <p>Ya tienes una cuenta? <a href="login.php">Inicia Sesion</a></p>
                    <input type="submit" value="Crear cuenta">
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
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>