<?php

use Classes\Email;

$nombrePagina = 'Iniciar Sesion | Ensambler';
include '../includes/header.php';
?>

<body>
    <header class="header inicio">
        <?php
        $pagina = 'login';
        include '../includes/navegacion.php';
        require '../includes/database.php';
        require '../../classes/Email.php';
        $db = conectarDB();

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $email = mysqli_real_escape_string($db, $_POST['email']);

            if (!$email) {
                $errores[] = "El email es obligatorio";
            }

            if (empty($errores)) {
                //echo $email;
                $query = "SELECT * FROM usuarios WHERE email = '$email'";

                $resultado = mysqli_query($db, $query);

                if (mysqli_num_rows($resultado) > 0) {

                    $usuario = mysqli_fetch_assoc($resultado);
                    //echo $usuario['confirmado'];

                    //cho $usuario['confirmado'];

                    if ($usuario['confirmado'] === "1") {
                        //El usuario si esta confirmado

                        //Generamos un nuevo token

                        $token = uniqid();

                        //Actualizamos el usuario con su nuevo token

                        $query = "UPDATE usuarios SET token = '$token' WHERE idUsuarios = {$usuario['idUsuarios']};";

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
                                title: 'Hemos enviado instrucciones a tu Email',
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

                        //Enviar Email
                        $nombre = $usuario['nombre'];

                        $mail = new Email($email, $nombre, $token);

                        $mail->enviarInstrucciones();
                    } else {
                        $errores[] = "El usuario no esta confirmado";
                    }
                } else {
                    $errores[] = "El usuario no existe";
                }
            }
        }

        ?>
        <main class="contenedor seccion">
            <div class="registro">
                <form action="recuperar.php" class="formulario" method="POST">
                    <?php foreach ($errores as $error) : ?>
                        <div class="error">
                            <?php echo $error; ?>
                        </div>
                    <?php endforeach; ?>

                    <?php foreach ($exitos as $exito) : ?>
                        <div class="alerta-exito">
                            <?php echo $exito; ?>
                        </div>
                    <?php endforeach; ?>
                    <h1>Recupera tu contraseña</h1>
                    <label for="correo">Email</label>
                    <input type="email" placeholder="Ingrese su correo electronico" name="email">
                    <p></p>
                    <input type="submit" value="Enviar instrucciones">
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