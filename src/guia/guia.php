<?php
session_start();
include '../includes/header.php';
$nombre = $_SESSION['nombre'];
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
        <a href="../users/principal.php">Inicio</a>
        <a href="../users/ensambles.php">Mis ensambles</a>
        <a href="../auth/login.php?login=false">Cerrar sesion</a>
    </nav>
</div>

<div class="contenedor-aprendizaje">
    <div class="descripcion-pagina">
        <h1>Guia de Aprendizaje</h1>
        <p>Explora la información esencial sobre los componentes clave de una computadora. Aprende cómo funcionan, cómo elegirlos y cómo ensamblarlos para crear un sistema eficiente y personalizado. Esta guía te ayudará a comprender las partes internas de tu PC y a tomar decisiones informadas para tus proyectos.</p>
    </div>

    <div class="contenedor-cards">
        <div class="card">
            <div class="componente-icono">
                <h2>Gabinete</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>
            </div>
            <lite-youtube videoid="rmaV0ED4RpA"></lite-youtube>
            <button class="info-gabinete">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Tarjeta Madre</h2>
                <svg stroke="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <g>
                                    <path d="M490.667,64h-64V42.667c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64h-21.333V42.667 c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64h-21.333V42.667 c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333V64H21.333C9.551,64,0,73.551,0,85.333v384 c0,11.782,9.551,21.333,21.333,21.333h469.333c11.782,0,21.333-9.551,21.333-21.333v-384C512,73.551,502.449,64,490.667,64z M469.333,448H42.667V106.667h42.667v106.667c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333V106.667 h42.667V256c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333V106.667h256V448z"></path>
                                    <path d="M277.333,149.333c-11.782,0-21.333,9.551-21.333,21.333v128c0,11.782,9.551,21.333,21.333,21.333h128 c11.782,0,21.333-9.551,21.333-21.333v-128c0-11.782-9.551-21.333-21.333-21.333H277.333z M384,277.333h-85.333V192H384V277.333z "></path>
                                    <rect x="85.333" y="362.667" width="42.667" height="42.667"></rect>
                                    <rect x="170.667" y="320" width="42.667" height="42.667"></rect>
                                    <path d="M384,362.667h-85.333c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333H384 c11.782,0,21.333-9.551,21.333-21.333S395.782,362.667,384,362.667z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <lite-youtube videoid="1RQ8OmZfk8s"></lite-youtube>
            <button class="info-tarjeta-madre">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Procesador</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
            </div>
            <lite-youtube videoid="G7MxRqDmXR8"></lite-youtube>
            <button class="info-procesador">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Disipador</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                    <path d="M12 12v.01"></path>
                </svg>
            </div>
            <lite-youtube videoid="v4ADp0VG4HI"></lite-youtube>
            <button class="info-disipador">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Memoria RAM</h2>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" >
                    <path d="M240-360h80v-240h-80v240Zm200 0h80v-240h-80v240Zm200 0h80v-240h-80v240Zm-480 80h640v-400H160v400Zm0 0v-400 400Zm40 160v-80h-40q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40v-80h80v80h160v-80h80v80h160v-80h80v80h40q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200h-40v80h-80v-80H520v80h-80v-80H280v80h-80Z" />
                </svg>
            </div>
            <lite-youtube videoid="_abAWnq0Gs8"></lite-youtube>
            <button class="info-ram">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Almacenamiento</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                </svg>
            </div>
            <lite-youtube videoid="hjVu7Td6doI"></lite-youtube>
            <button class="info-almacenamiento">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Tarjeta de video</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                    <line x1="12" y1="16" x2="12" y2="20"></line>
                    <line x1="8" y1="20" x2="16" y2="20"></line>
                    <polyline points="8 8 12 12 16 8"></polyline>
                </svg>
            </div>
            <lite-youtube videoid="lSTKcpz6Ioo"></lite-youtube>
            <button class="info-grafica">Mas informacion</button>
        </div>

        <div class="card">
            <div class="componente-icono">
                <h2>Fuente de alimentacion</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                    <line x1="12" y1="2" x2="12" y2="12"></line>
                </svg>
            </div>
            <lite-youtube videoid="xU0P791DCq8"></lite-youtube>
            <button class="info-fuente">Mas informacion</button>
        </div>

    </div>
</div>
<script src="/src/js/app.js"></script>
<script src="/src/js/aprendizaje.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js"></script>