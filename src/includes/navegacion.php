<?php if ($pagina == 'registro') {
    $paginaOpuesta = 'login.php';
    $nombrePagina = 'Iniciar Sesion';
}
if ($pagina == 'login') {
    $paginaOpuesta = 'registro.php';
    $nombrePagina = 'Registrarse';
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
        <a href="<?php echo $paginaOpuesta; ?>"><?php echo $nombrePagina; ?></a>
    </nav>
</div>