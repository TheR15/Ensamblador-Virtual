<?php if ($pagina == 'registro') {
    $paginaActual = 'login.php';
    $nombrePagina = 'Iniciar Sesion';
}
if ($pagina == 'login') {
    $paginaActual = 'registro.php';
    $nombrePagina = 'Registrarse';
}
?>

<footer>
    <div class="contenedor contenedor-footer">
        
    <h2>Contactanos</h2>
        <div class="redes-sociales">
            <a href="https://www.facebook.com/?locale=es_LA"><img src="/src/img/logo-facebook.png" alt=""></a>
            <a href="https://www.instagram.com/"><img src="/src/img/logo-instagram.png" alt=""></a>
        </div>
        <nav class="navegacion">
            <a href="<?php print $paginaActual ?>"><?php echo $nombrePagina; ?></a>
        </nav>
    </div>
</footer>
<script src="/src/js/app.js"></script>
<script src="/src/js/validacion.js"></script>