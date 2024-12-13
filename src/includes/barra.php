<?php
session_start();
?>

<div class="barra-dashboard">
    <h3>Bienvenido: <span> <?php echo $nombre; ?></span> </h3>
    <a href="../auth/login.php?login=false">Cerrar sesion</a>
</div>