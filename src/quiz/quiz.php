<?php
session_start();
$nombre = $_SESSION['nombre'];
$idUsuario = $_SESSION['idUsuario'];
$titulo = 'Procesadores';
$nombrePagina = 'Procesadores | Ensambler';
// Verifica si el usuario está autenticado
if (!isset($_SESSION['nombre'])) {
    // Redirige al login si no está autenticado
    header("Location: ../auth/login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizzes de Componentes de PC</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styleQuiz.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
</head>

<body>
    <?php
    include '../includes/database.php';
    $db = conectarDB();
    $query = "SELECT * FROM quiz WHERE idUsuarios = $idUsuario;";
    $resultado = mysqli_query($db, $query);
    
    $quiz = mysqli_fetch_assoc($resultado);
    $puntajeFuente = $quiz['fuenteQuiz'];
    $puntajeGabinete = $quiz['gabineteQuiz'];
    $puntajeGrafica = $quiz['graficaQuiz'];
    $puntajeMotherboard =  $quiz['motherboardQuiz'];
    $puntajeProcesador =  $quiz['procesadorQuiz'];
    $puntajeAlmacenamiento = $quiz['almacenamientoQuiz'];
    $puntajeDisipador = $quiz['disipadorQuiz'];
    $puntajeRAM = $quiz['ramQuiz'];

    if (!mysqli_num_rows($resultado) > 0) {
        $query1 = "INSERT INTO quiz (idUsuarios) VALUES ($idUsuario);";
        $resultado1 = mysqli_query($db, $query1);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $QuizFuente = isset($_POST['fuente']);
        $QuizGabinete = isset($_POST['gabinete']);
        $QuizGrafica = isset($_POST['gpu']);
        $QuizMotherboard = isset($_POST['motherboard']);
        $QuizProcesador = isset($_POST['procesador']);
        $QuizAlmacenamiento = isset($_POST['almacenamiento']);
        $QuizDisipador = isset($_POST['disipador']);
        $QuizRAM = isset($_POST['ram']);
        if ($QuizFuente == 1) {
            $puntaje = filter_var($_POST['fuente'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET fuenteQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizGabinete == 1) {
            $puntaje = filter_var($_POST['gabinete'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET gabineteQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizGrafica == 1) {
            $puntaje = filter_var($_POST['gpu'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET graficaQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizProcesador == 1) {
            $puntaje = filter_var($_POST['procesador'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET procesadorQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizAlmacenamiento == 1) {
            $puntaje = filter_var($_POST['almacenamiento'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET almacenamientoQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizDisipador == 1) {
            $puntaje = filter_var($_POST['disipador'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET disipadorQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
        if ($QuizRAM == 1) {
            $puntaje = filter_var($_POST['ram'], FILTER_VALIDATE_INT);
            $query = "UPDATE quiz SET ramQuiz = $puntaje WHERE idUsuarios = $idUsuario;";
            $resultado = mysqli_query($db, $query);
        }
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
            <a href="../users/principal.php">Menu</a>
            <a href="../users/ensamblaje.php">Mis ensambles</a>
            <a href="../auth/login.php?login=false">Cerrar sesion</a>
        </nav>
    </div>
    <div class="contenedor">
        <div class="contenedor-quiz">
            <div class="main-content">
                <div class="descripcion-pagina">
                    <div class="titulo-parrafo">
                        <h1 class="titulo">Quiz de Componentes de Computadora</h1>
                        <p class="descripcion">En esta sección, podrás poner a prueba tus conocimientos sobre los componentes de una computadora. Responde preguntas diseñadas para evaluar lo que sabes sobre procesadores, tarjetas gráficas, memoria RAM y más.</p>
                    </div>
                    <button id="certificateBtn" disabled><i class="fas fa-certificate"></i> Obtener Certificación</button>
                </div>
                <div class="progress-container">
                    <div class="texto-progreso">
                        <h3 class="texto-progreso">Progreso total:</h3>
                        <p id="progressText" style="text-align: end;"></p>
                    </div>
                    <div class="progress-bar">
                        <button class="puntaje-barra" hidden value="<?php echo htmlspecialchars(
                                                                        $puntajeFuente . ' , ' . $puntajeGabinete
                                                                            . ',' . $puntajeGrafica . ',' . $puntajeMotherboard . ',' . $puntajeProcesador . ',' . $puntajeAlmacenamiento . ',' . $puntajeDisipador
                                                                            . ',' . $puntajeRAM . ',' . $nombre
                                                                    ) ?>"></button>
                        <div class="progress" id="progressBar" style="width: 0%;"></div>
                    </div>
                </div>
                <div class="cards-quizes">
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                <line x1="12" y1="2" x2="12" y2="12"></line>
                            </svg>Fuente de Alimentacion</h2>
                        <button type="button" class="quiz-button btn-fuente" onclick="openQuiz('fuente')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                            </svg>Gabinete</h2>
                        <button class="quiz-button" onclick="openQuiz('gabinete')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                                <line x1="12" y1="16" x2="12" y2="20"></line>
                                <line x1="8" y1="20" x2="16" y2="20"></line>
                                <polyline points="8 8 12 12 16 8"></polyline>
                            </svg>Tarjeta Grafica</h2>
                        <button class="quiz-button" onclick="openQuiz('gpu')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg stroke="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
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
                            </svg>Tarjeta Madre</h2>
                        <button class="quiz-button" onclick="openQuiz('motherboard')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                            </svg>Procesador</h2>
                        <button class="quiz-button" onclick="openQuiz('procesador')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="12" x2="2" y2="12"></line>
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                <line x1="10" y1="16" x2="10.01" y2="16"></line>
                            </svg>Almacenamiento</h2>
                        <button class="quiz-button" onclick="openQuiz('almacenamiento')"></i>Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path>
                                <path d="M12 12v.01"></path>
                            </svg>Disipador</h2>
                        <button class="quiz-button" onclick="openQuiz('disipador')">Comenzar quiz</button>
                    </div>
                    <div class="card">
                        <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M240-360h80v-240h-80v240Zm200 0h80v-240h-80v240Zm200 0h80v-240h-80v240Zm-480 80h640v-400H160v400Zm0 0v-400 400Zm40 160v-80h-40q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40v-80h80v80h160v-80h80v80h160v-80h80v80h40q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200h-40v80h-80v-80H520v80h-80v-80H280v80h-80Z" />
                            </svg>Memoria RAM</h2>
                        <button class="quiz-button" onclick="openQuiz('ram')">Comenzar quiz</button>
                    </div>
                </div>
            </div>
            <div id="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2 id="quizTitle"></h2>
                    <div id="quizContent"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const quizzes = {
            fuente: [{
                    question: "¿Qué ocurre si una fuente de alimentación no tiene suficiente potencia para una PC?",
                    options: [
                        "La PC no encenderá o será inestable",
                        "La PC funcionará más rápido",
                        "Los componentes se dañarán permanentemente",
                        "El monitor no se encenderá"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa el término 'certificación 80 PLUS' en fuentes de alimentación?",
                    options: [
                        "Garantía de 80 meses",
                        "Eficiencia energética superior al 80%",
                        "Soporte para 80 componentes",
                        "Voltaje máximo de 80V"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es un síntoma común de una fuente defectuosa?",
                    options: [
                        "Sonido de clic continuo",
                        "Pantalla azul frecuente",
                        "La PC no enciende",
                        "Todos los anteriores"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué voltaje entrega una fuente típica para componentes como el procesador?",
                    options: ["3.3V", "5V", "12V", "110V"],
                    correctAnswer: 2
                },
                {
                    question: "¿Cuál de los siguientes conectores se utiliza para alimentar el CPU?",
                    options: ["SATA", "PCIe", "EPS", "Molex"],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué conectores de la fuente se utilizan para alimentar discos duros y SSDs?",
                    options: ["Molex", "SATA", "PCIe", "EPS"],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué ocurre si una fuente tiene un exceso de potencia para una PC?",
                    options: [
                        "Se desperdicia energía no utilizada",
                        "La PC funciona más rápido",
                        "Puede dañar los componentes",
                        "No tiene ningún efecto negativo"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué mide el término 'amperaje' en la fuente de alimentación?",
                    options: [
                        "El flujo de corriente eléctrica",
                        "La resistencia del cableado",
                        "La velocidad del procesador",
                        "El consumo de memoria RAM"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué sucede si conectas una fuente con un voltaje diferente al requerido?",
                    options: [
                        "El equipo se sobrecalienta",
                        "El equipo puede dañarse irreversiblemente",
                        "No ocurrirá nada",
                        "La fuente ajustará automáticamente el voltaje"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es una función adicional común en fuentes modernas?",
                    options: [
                        "Regulación activa del voltaje",
                        "Iluminación LED",
                        "Enfriamiento líquido",
                        "Todas las anteriores"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué significa que una fuente sea modular?",
                    options: [
                        "Tiene cables desmontables",
                        "Incluye un sistema de enfriamiento",
                        "Tiene mayor eficiencia",
                        "Soporta más dispositivos conectados"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de corriente entra en la fuente de alimentación?",
                    options: ["Corriente continua (DC)", "Corriente alterna (AC)", "Ambas", "Ninguna"],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es el propósito del ventilador en una fuente de alimentación?",
                    options: [
                        "Mantener el voltaje estable",
                        "Proteger contra sobrecalentamiento",
                        "Incrementar el flujo de corriente",
                        "Reducir el ruido de la PC"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué significa que una fuente tenga 'protección contra sobretensión'?",
                    options: [
                        "Evita que la PC se apague",
                        "Protege contra picos de voltaje dañinos",
                        "Garantiza una potencia constante",
                        "Reduce el consumo eléctrico"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué componente convierte la corriente alterna en corriente continua dentro de la fuente?",
                    options: ["Transformador", "Rectificador", "Condensador", "Ventilador"],
                    correctAnswer: 1
                }
            ],
            gabinete: [
                // Preguntas anteriores...
                {
                    question: "¿Qué material se usa comúnmente para construir gabinetes?",
                    options: ["Plástico", "Metal", "Vidrio templado", "Todos los anteriores"],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué tipo de ventilación es más eficiente en un gabinete?",
                    options: [
                        "Flujo de aire positivo",
                        "Flujo de aire negativo",
                        "Ventilación pasiva",
                        "Ninguna de las anteriores"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué característica es importante para un gabinete gamer?",
                    options: [
                        "Soporte para tarjetas gráficas grandes",
                        "Buen sistema de ventilación",
                        "Espacio para iluminación LED",
                        "Todas las anteriores"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué función tienen las bahías en un gabinete?",
                    options: [
                        "Soportar el procesador",
                        "Montar discos duros o unidades ópticas",
                        "Enfriar los componentes",
                        "Alimentar la tarjeta madre"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué es una bahía de 3.5 pulgadas?",
                    options: [
                        "Espacio para discos duros tradicionales",
                        "Lugar para SSDs",
                        "Conector para fuentes de alimentación",
                        "Ranura para ventiladores"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué gabinete es más pequeño?",
                    options: ["ATX", "Micro-ATX", "Mini-ITX", "Full Tower"],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué determina el tamaño del gabinete que necesitas?",
                    options: [
                        "La fuente de alimentación",
                        "La tarjeta madre",
                        "El número de ventiladores",
                        "El monitor conectado"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué componente beneficia más de una buena gestión de cables?",
                    options: [
                        "Procesador",
                        "Ventiladores",
                        "Fuente de alimentación",
                        "Todos los anteriores"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué significa que un gabinete tenga panel lateral de vidrio templado?",
                    options: [
                        "Es más ligero",
                        "Permite ver el interior de la PC",
                        "Es menos resistente",
                        "Soporta mayor peso"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué es el soporte para 'factor de forma' en un gabinete?",
                    options: [
                        "Compatibilidad con la placa base",
                        "Tamaño de las tarjetas gráficas",
                        "Número de ranuras PCIe",
                        "Potencia de la fuente"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué material es más común para los gabinetes de PC?",
                    options: ["Plástico", "Aluminio", "Acero", "Vidrio"],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué función cumplen los ventiladores en un gabinete?",
                    options: [
                        "Reducir el consumo de energía",
                        "Mantener los componentes frescos",
                        "Evitar la acumulación de polvo",
                        "Aumentar el rendimiento del procesador"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es un diseño común para gestionar cables en gabinetes modernos?",
                    options: ["Cableado externo", "Gestión de cables trasera", "Cableado central", "Cableado en espiral"],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué es un gabinete con formato 'Mid Tower'?",
                    options: [
                        "Un gabinete compacto para laptops",
                        "Un gabinete de tamaño intermedio para PCs de escritorio",
                        "Un gabinete especializado en servidores",
                        "Un gabinete para sistemas de audio"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué tipo de bahías incluye un gabinete para discos duros tradicionales?",
                    options: ["Bahías de 5.25 pulgadas", "Bahías de 3.5 pulgadas", "Bahías M.2", "Bahías PCIe"],
                    correctAnswer: 1
                }
            ],
            gpu: [
                // Preguntas anteriores...
                {
                    question: "¿Qué se mide en GHz en una tarjeta gráfica?",
                    options: [
                        "Velocidad del reloj de la GPU",
                        "Capacidad de la memoria",
                        "Consumo energético",
                        "Cantidad de núcleos de procesamiento"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de memoria utilizan comúnmente las tarjetas gráficas modernas?",
                    options: ["DDR4", "GDDR6", "HDD", "SSD"],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es el puerto estándar para conectar una tarjeta gráfica al monitor?",
                    options: ["HDMI", "USB", "Ethernet", "PS/2"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es Ray Tracing en una tarjeta gráfica?",
                    options: [
                        "Una técnica para simular reflejos y sombras realistas",
                        "Un tipo de memoria de alta velocidad",
                        "Una función para controlar la temperatura",
                        "Un programa de diagnóstico de GPU"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa VRAM en una tarjeta gráfica?",
                    options: [
                        "Virtual RAM",
                        "Video RAM",
                        "Volatile RAM",
                        "Variable RAM"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es una función clave de los controladores de la GPU?",
                    options: [
                        "Optimizar el rendimiento gráfico",
                        "Controlar la velocidad del ventilador",
                        "Aumentar el almacenamiento",
                        "Conectar la tarjeta madre a la RAM"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es SLI o CrossFire?",
                    options: [
                        "Tecnologías para conectar varias GPUs",
                        "Procesadores gráficos más rápidos",
                        "Software de edición gráfica",
                        "Puertos de alta velocidad"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente suele incluirse en una GPU para evitar el sobrecalentamiento?",
                    options: [
                        "Disipador y ventiladores",
                        "Memoria RAM",
                        "Transformador",
                        "Conector SATA"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de aplicaciones demandan más potencia de la GPU?",
                    options: [
                        "Procesadores de texto",
                        "Juegos y edición de video",
                        "Correo electrónico",
                        "Navegadores web"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué tipo de puerto en la placa base conecta la GPU?",
                    options: ["PCIe", "SATA", "USB", "HDMI"],
                    correctAnswer: 0
                }
            ],
            motherboard: [{
                    question: "¿Qué función principal tiene una tarjeta madre en una PC?",
                    options: [
                        "Almacenar los datos del usuario",
                        "Conectar los componentes de la PC entre sí",
                        "Proveer energía a los dispositivos",
                        "Controlar el sistema operativo"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es el componente principal de la tarjeta madre que gestiona la comunicación entre los diferentes dispositivos?",
                    options: [
                        "Microprocesador",
                        "Chipset",
                        "Memoria RAM",
                        "Placa de circuito impreso"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué tipo de conector se utiliza para instalar el procesador en la tarjeta madre?",
                    options: [
                        "SATA",
                        "LGA",
                        "PCIe",
                        "M.2"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es la función del chipset en la tarjeta madre?",
                    options: [
                        "Almacenar datos",
                        "Gestionar la comunicación entre el procesador y los periféricos",
                        "Proveer energía a los dispositivos",
                        "Gestionar el enfriamiento del sistema"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué es el Zócalo o Socket de la tarjeta madre?",
                    options: [
                        "El conector para la memoria RAM",
                        "El puerto para la tarjeta gráfica",
                        "El conector para instalar el procesador",
                        "El lugar para conectar el disco duro"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué tipo de memoria se instala en una tarjeta madre?",
                    options: [
                        "ROM",
                        "RAM",
                        "EEPROM",
                        "Flash"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué significa que una tarjeta madre sea ATX?",
                    options: [
                        "Que soporta procesadores de 64 bits",
                        "Que tiene un tamaño estándar para PC de escritorio",
                        "Que incluye soporte para tarjetas gráficas",
                        "Que es compatible con todas las versiones de Windows"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué tipo de puerto de expansión es comúnmente utilizado para tarjetas gráficas en una tarjeta madre moderna?",
                    options: [
                        "USB",
                        "PCIe",
                        "SATA",
                        "PS/2"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Cuál es el propósito del conector de alimentación de 24 pines en una tarjeta madre?",
                    options: [
                        "Conectar la fuente de alimentación",
                        "Conectar dispositivos de almacenamiento",
                        "Conectar tarjetas de expansión",
                        "Conectar el sistema de refrigeración"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de tarjeta madre es más comúnmente utilizada en laptops?",
                    options: [
                        "MicroATX",
                        "MiniATX",
                        "ITX",
                        "Custom"
                    ],
                    correctAnswer: 3
                },
                {
                    question: "¿Qué es un bus de datos en una tarjeta madre?",
                    options: [
                        "Un canal para transferir energía eléctrica",
                        "Un conector para dispositivos periféricos",
                        "Un canal para transferir datos entre componentes",
                        "Un sistema de enfriamiento"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué es un BIOS/UEFI en la tarjeta madre?",
                    options: [
                        "El sistema operativo de la PC",
                        "El sistema de administración de energía",
                        "El software que inicia y configura el hardware",
                        "La memoria RAM"
                    ],
                    correctAnswer: 2
                },
                {
                    question: "¿Qué significa que una tarjeta madre sea compatible con DDR4?",
                    options: [
                        "Que soporta discos duros de 4 TB",
                        "Que soporta la memoria RAM DDR4",
                        "Que tiene 4 ranuras para memoria RAM",
                        "Que tiene 4 puertos USB"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué tipo de conectores se utilizan en una tarjeta madre para conectar discos duros y SSDs?",
                    options: [
                        "SATA",
                        "PCIe",
                        "USB",
                        "M.2"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué función tienen los puertos USB en una tarjeta madre?",
                    options: [
                        "Conectar dispositivos periféricos como teclados y ratones",
                        "Alimentar la tarjeta madre",
                        "Proveer energía a la memoria RAM",
                        "Gestionar la comunicación con el procesador"
                    ],
                    correctAnswer: 0
                }
            ],
            procesador: [{
                    question: "¿Qué significa CPU?",
                    options: ["Central Processing Unit", "Core Processing Unit", "Computer Power Unit", "Control Processing Unit"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente se encuentra dentro de un procesador moderno?",
                    options: ["Núcleos de procesamiento", "Disco duro", "Memoria RAM", "Tarjeta gráfica dedicada"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es el 'overclocking' en un procesador?",
                    options: [
                        "Aumentar la velocidad del reloj para mejorar el rendimiento",
                        "Reducir el consumo energético",
                        "Desactivar núcleos del procesador",
                        "Usar menos memoria RAM"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué determina la velocidad de un procesador?",
                    options: ["Frecuencia del reloj", "Capacidad de la RAM", "Fuente de alimentación", "Placa madre"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es la memoria caché de un procesador?",
                    options: [
                        "Almacenamiento rápido dentro del procesador",
                        "Memoria externa de la tarjeta gráfica",
                        "Capacidad de la RAM",
                        "Una unidad de almacenamiento permanente"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente está directamente conectado al socket de la placa madre?",
                    options: ["Procesador", "Tarjeta gráfica", "Disco duro", "Fuente de alimentación"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es un núcleo en un procesador?",
                    options: [
                        "Una unidad que ejecuta instrucciones de manera independiente",
                        "Un programa de software",
                        "Una función de la tarjeta gráfica",
                        "Un chip de memoria adicional"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tecnología permite que un núcleo maneje dos hilos de procesamiento?",
                    options: ["Hyper-Threading", "Multi-GPU", "Ray Tracing", "DDR4"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa TDP en un procesador?",
                    options: [
                        "Thermal Design Power",
                        "Total Data Processing",
                        "Time Delay Processor",
                        "Transfer Data Protocol"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de procesador es común en dispositivos móviles?",
                    options: ["ARM", "x86", "Xeon", "Threadripper"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué sucede si un procesador no tiene un disipador adecuado?",
                    options: [
                        "Se sobrecalienta y puede dañarse",
                        "Funciona más rápido",
                        "Consume más energía",
                        "Reduce el tamaño de la RAM"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué diferencia principal hay entre procesadores Intel y AMD?",
                    options: [
                        "Arquitectura y tecnología utilizadas",
                        "Capacidad de la RAM",
                        "Tipo de almacenamiento",
                        "Compatibilidad con discos duros"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es un procesador de 64 bits?",
                    options: [
                        "Un procesador que maneja datos en bloques de 64 bits",
                        "Un procesador con 64 núcleos",
                        "Un procesador más lento que uno de 32 bits",
                        "Un procesador para gráficos únicamente"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué determina el rendimiento general del procesador?",
                    options: [
                        "Cantidad de núcleos y velocidad del reloj",
                        "Capacidad de la fuente de alimentación",
                        "Tamaño del gabinete",
                        "Número de ventiladores instalados"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa la arquitectura de un procesador?",
                    options: [
                        "El diseño interno y funcionamiento del chip",
                        "El tamaño físico del procesador",
                        "El material de construcción",
                        "El tipo de disipador utilizado"
                    ],
                    correctAnswer: 0
                }
            ],
            almacenamiento: [{
                    question: "¿Cuál es la función principal de un disco duro?",
                    options: [
                        "Almacenar datos de forma permanente",
                        "Procesar datos",
                        "Mostrar imágenes en la pantalla",
                        "Proporcionar energía a la PC"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de disco duro es más rápido?",
                    options: [
                        "HDD (Hard Disk Drive)",
                        "SSD (Solid State Drive)",
                        "Ambos son iguales",
                        "Depende del fabricante"
                    ],
                    correctAnswer: 1
                },
                {
                    question: "¿Qué significa HDD?",
                    options: [
                        "Hard Disk Drive",
                        "High Data Drive",
                        "Hard Digital Drive",
                        "Hybrid Disk Drive"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de almacenamiento utiliza memoria flash?",
                    options: ["SSD", "HDD", "CD", "Floppy Disk"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es una partición en un disco duro?",
                    options: [
                        "Dividir el disco en secciones independientes",
                        "Un error en el sistema de archivos",
                        "Una actualización del firmware",
                        "Un tipo de unidad óptica"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué conector es común en discos duros modernos?",
                    options: ["SATA", "IDE", "PCIe", "AGP"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué factor afecta más la velocidad de un HDD?",
                    options: [
                        "RPM (Revoluciones por minuto)",
                        "Tamaño físico",
                        "Color del dispositivo",
                        "Cantidad de pines en el conector"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa NVMe en discos SSD?",
                    options: [
                        "Non-Volatile Memory Express",
                        "New Virtual Memory Extension",
                        "Next Velocity Module",
                        "Normal Variable Memory Express"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Cuál es una ventaja de un SSD sobre un HDD?",
                    options: [
                        "Mayor velocidad de lectura y escritura",
                        "Mayor capacidad de almacenamiento",
                        "Menor costo por GB",
                        "Mayor peso y tamaño"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente principal tiene un HDD?",
                    options: ["Platos giratorios", "Memoria flash", "Un ventilador", "Batería interna"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué sucede si un HDD sufre un impacto físico fuerte?",
                    options: [
                        "Puede dañarse permanentemente",
                        "Se vuelve más rápido",
                        "Se expande su capacidad",
                        "Nada, son resistentes al impacto"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es la capacidad de un disco duro?",
                    options: [
                        "La cantidad de datos que puede almacenar",
                        "La velocidad máxima de transferencia",
                        "La cantidad de núcleos de procesamiento",
                        "La eficiencia energética"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué formato de archivo es común para discos en Windows?",
                    options: ["NTFS", "FAT32", "EXT4", "HFS+"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué herramienta se usa para comprobar errores en un disco duro?",
                    options: ["CHKDSK", "Task Manager", "BIOS", "Device Manager"],
                    correctAnswer: 0
                },
                {
                    question: "¿Cuál es el propósito de un RAID en discos duros?",
                    options: [
                        "Combinar múltiples discos para mejorar rendimiento o seguridad",
                        "Actualizar el firmware del disco",
                        "Eliminar datos innecesarios automáticamente",
                        "Reparar sectores dañados"
                    ],
                    correctAnswer: 0
                }
            ],
            disipador: [{
                    question: "¿Cuál es la función principal de un disipador en una PC?",
                    options: [
                        "Reducir la temperatura de los componentes",
                        "Aumentar la velocidad del procesador",
                        "Almacenar datos temporalmente",
                        "Controlar el voltaje de la fuente de alimentación"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente suele requerir un disipador más grande?",
                    options: [
                        "Procesador",
                        "Memoria RAM",
                        "Disco duro",
                        "Fuente de alimentación"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de disipador utiliza un líquido para enfriar?",
                    options: ["Refrigeración líquida", "Refrigeración por aire", "Refrigeración pasiva", "Refrigeración activa"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué material es más común en disipadores por su alta conductividad térmica?",
                    options: ["Cobre", "Plástico", "Acero", "Vidrio"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es la pasta térmica en un disipador?",
                    options: [
                        "Un compuesto que mejora la transferencia de calor entre el procesador y el disipador",
                        "Un lubricante para las partes móviles del disipador",
                        "Un material aislante para reducir el ruido",
                        "Un adhesivo para instalar el disipador"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué sucede si el disipador de un procesador falla?",
                    options: [
                        "El procesador puede sobrecalentarse y apagarse",
                        "La RAM dejará de funcionar",
                        "La PC funcionará más rápido",
                        "El disco duro se desconectará"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué diferencia hay entre refrigeración activa y pasiva?",
                    options: [
                        "La activa usa ventiladores, la pasiva no",
                        "La activa no utiliza pasta térmica",
                        "La pasiva es exclusiva de GPUs",
                        "La activa solo se usa con refrigeración líquida"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué parte de un disipador realiza contacto directo con el componente a enfriar?",
                    options: [
                        "La base",
                        "El ventilador",
                        "El radiador",
                        "El tubo de calor"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente de la refrigeración líquida disipa el calor?",
                    options: [
                        "El radiador",
                        "La bomba",
                        "El líquido refrigerante",
                        "El ventilador de la caja"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué afecta más la eficiencia de un disipador por aire?",
                    options: [
                        "El flujo de aire y el diseño del disipador",
                        "El tamaño del procesador",
                        "El tipo de BIOS",
                        "El color del disipador"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué componente de un PC puede incluir disipador además del procesador?",
                    options: ["GPU", "Disco duro", "RAM", "Fuente de alimentación"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es un tubo de calor en un disipador?",
                    options: [
                        "Un conducto que transfiere el calor de la base al radiador",
                        "Un elemento eléctrico que aumenta la temperatura",
                        "Un canal de ventilación",
                        "Un tipo de pasta térmica"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué ventaja tiene la refrigeración líquida sobre la refrigeración por aire?",
                    options: [
                        "Mejor capacidad para manejar altas temperaturas",
                        "Menor costo de instalación",
                        "Mayor compatibilidad con procesadores antiguos",
                        "Requiere menos mantenimiento"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Cómo se mide la eficiencia de un disipador?",
                    options: ["En grados Celsius de reducción", "En vatios de consumo", "En GHz de velocidad", "En RPM del ventilador"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es el ruido generado por un disipador?",
                    options: [
                        "El sonido del ventilador en funcionamiento",
                        "El zumbido de los tubos de calor",
                        "El choque entre el procesador y el disipador",
                        "El ruido del flujo de electricidad"
                    ],
                    correctAnswer: 0
                }
            ],
            ram: [{
                    question: "¿Qué significa RAM?",
                    options: ["Random Access Memory", "Read Always Memory", "Rapid Alternating Memory", "Readily Available Memory"],
                    correctAnswer: 0
                },
                {
                    question: "¿Cuál es la función principal de la memoria RAM?",
                    options: [
                        "Almacenar datos temporalmente para acceso rápido",
                        "Procesar instrucciones",
                        "Almacenar datos permanentemente",
                        "Controlar la temperatura de la PC"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué pasa con los datos en la RAM cuando se apaga la computadora?",
                    options: [
                        "Se pierden",
                        "Se guardan automáticamente en el disco duro",
                        "Se convierten en caché",
                        "Se duplican en la memoria ROM"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de RAM es más común en PCs modernas?",
                    options: ["DDR4", "DDR3", "SDRAM", "RDRAM"],
                    correctAnswer: 0
                },
                {
                    question: "¿Cómo afecta más RAM al rendimiento de una PC?",
                    options: [
                        "Permite manejar más aplicaciones simultáneamente",
                        "Aumenta la velocidad del procesador",
                        "Mejora la calidad de los gráficos",
                        "Disminuye el consumo eléctrico"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es la latencia de la RAM?",
                    options: [
                        "El tiempo que tarda en acceder a los datos",
                        "El tamaño físico de los módulos",
                        "La velocidad de transferencia máxima",
                        "La cantidad de memoria disponible"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué mide la frecuencia de la RAM?",
                    options: [
                        "La velocidad a la que puede transferir datos",
                        "La cantidad de módulos en la placa madre",
                        "La potencia consumida",
                        "El tiempo de apagado de los transistores"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa 'Dual Channel' en RAM?",
                    options: [
                        "Un modo que permite acceder a dos módulos simultáneamente",
                        "La capacidad de soportar dos tipos de memoria",
                        "La compatibilidad con dos procesadores",
                        "La posibilidad de usar memoria interna y externa"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Cómo se mide la capacidad de la RAM?",
                    options: ["En gigabytes (GB)", "En hertzios (Hz)", "En voltios (V)", "En nanosegundos (ns)"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué diferencia hay entre RAM y ROM?",
                    options: [
                        "La RAM es volátil, la ROM no lo es",
                        "La RAM almacena datos permanentemente",
                        "La ROM es más rápida que la RAM",
                        "La ROM se usa para gráficos avanzados"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué es un módulo DIMM?",
                    options: [
                        "Un tipo de módulo de memoria RAM",
                        "Un estándar de almacenamiento de discos duros",
                        "Un controlador de la placa madre",
                        "Un dispositivo de salida de audio"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué tipo de RAM es común en laptops?",
                    options: ["SO-DIMM", "DIMM", "ECC", "DDR2"],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué significa ECC en memoria RAM?",
                    options: [
                        "Error-Correcting Code",
                        "Enhanced Clock Cycle",
                        "Energy Controlled Circuit",
                        "Extra Capacity Cache"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué sucede si la RAM instalada es incompatible con la placa madre?",
                    options: [
                        "La PC no arrancará",
                        "El procesador se dañará",
                        "El disco duro se desconectará",
                        "La fuente de alimentación fallará"
                    ],
                    correctAnswer: 0
                },
                {
                    question: "¿Qué factor determina la cantidad máxima de RAM soportada por una PC?",
                    options: [
                        "La placa madre y el sistema operativo",
                        "El tipo de procesador",
                        "La capacidad de la fuente de alimentación",
                        "El tamaño físico del gabinete"
                    ],
                    correctAnswer: 0
                }
            ]
        };
        let currentQuiz = '';
        let currentQuestion = 0;
        let score = 0;
        let progress = 0;
        let quizzesCompleted = {};

        function openQuiz(quizName) {
            if (quizzes[quizName]) {
                currentQuiz = quizName;
                currentQuestion = 0;
                score = 0;
                showQuestion();
                const modal = document.getElementById('modal');
                const modalcontenido = document.querySelector('.modal-content');

                modal.style.display = "block";
                modalcontenido.style.display = "block";
                setTimeout(() => modalcontenido.classList.add('show'), 10);

            } else {
                console.error(`Quiz "${quizName}" not found`);
            }
        }

        function showQuestion() {
            const quiz = quizzes[currentQuiz];
            if (quiz && quiz[currentQuestion]) {
                const question = quiz[currentQuestion];
                document.getElementById('quizTitle').textContent = `Quiz de ${currentQuiz.charAt(0).toUpperCase() + currentQuiz.slice(1)}`;
                const content = document.getElementById('quizContent');
                content.innerHTML = `
                    <p class="pregunta">${question.question}</p>
                    ${question.options.map((option, index) => `
                        <button class="btn-respuesta"onclick="selectAnswer(${index})">${option}</button>
                    `).join('')}
                `;
            } else {
                showResult();
            }
        }

        function selectAnswer(index) {
            const quiz = quizzes[currentQuiz];
            if (quiz && quiz[currentQuestion]) {
                if (index === quiz[currentQuestion].correctAnswer) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < quiz.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }
        }

        function showResult() {
            const quiz = quizzes[currentQuiz];
            const content = document.getElementById('quizContent');
            content.innerHTML = `
            <form method="POST" action="quiz.php" >
                <h3>Resultado del Quiz</h3>
                <p>Has completado el quiz de ${currentQuiz}!</p>
                <p>Tu puntuación: ${score} de ${quiz.length}</p>
                <input type="hidden" name="${currentQuiz}" value="${score}" />
                <input id="submit" type="submit" class="submit-quiz" value="Guardar">
            </form>
            `;
            updateProgress(score, quiz.length);
        }

        function closeQuiz() {
            document.getElementById('modal').style.display = 'none';
        }

        async function generarCertificado() {
            const barra = document.querySelector('.puntaje-barra');
            
            const progressBar = document.getElementById('progressBar')
            const progressText = document.getElementById('progressText');
            const certificateBtn = document.getElementById('certificateBtn');
            const puntajeBarra = barra ? barra.value : null;
            const puntajes = puntajeBarra ? puntajeBarra.split(",") : [];
            const puntajeFuente = parseInt(puntajes[0]);
            const puntajeGabinete = parseInt(puntajes[1]);
            const puntajeGrafica = parseInt(puntajes[2]);
            const puntajeMotherboard = parseInt(puntajes[3]);
            const puntajeProcesador = parseInt(puntajes[4]);
            const puntajeAlmacenamiento = parseInt(puntajes[5])
            const puntajeDisipador = parseInt(puntajes[6]);
            const puntajeRAM = parseInt(puntajes[7]);
            const nombre = puntajes[8];
            const totalPuntaje = (puntajeFuente + puntajeGabinete + puntajeGrafica +
                puntajeMotherboard + puntajeAlmacenamiento + puntajeDisipador + puntajeRAM + puntajeProcesador) / 120 * 100;

            // Redondear a un decimal
            const totalPuntajeRedondeado = Math.round(totalPuntaje * 10) / 10;

            const {
                jsPDF
            } = window.jspdf;
            const fecha = new Date().toLocaleDateString();
            const pdf = new jsPDF("landscape", "mm", "a4");
            const anchoPagina = pdf.internal.pageSize.getWidth();
            const altoPagina = pdf.internal.pageSize.getHeight();

            // Add background image (replace with your own image URL)
            const fondoUrl = "certificado.jpg";
            try {
                const imgFondo = await fetch(fondoUrl)
                    .then((res) => res.blob())
                    .then((blob) => new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    }));

                pdf.addImage(imgFondo, "PNG", 0, 0, anchoPagina, altoPagina);
            } catch (error) {
                console.error("Error loading background image:", error);
                // Continue without background image if it fails to load
            }

            // Configure fonts and text
            pdf.setFont("Helvetica", "bold");
            pdf.setFontSize(30);
            pdf.setTextColor(0, 0, 128); // Dark blue
            pdf.text("Reconocimiento de Aprendizaje", anchoPagina / 2, 50, {
                align: "center"
            });

            pdf.setFont("Helvetica", "normal");
            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0); // Black
            pdf.text(
                "Por este medio, Ensambler PC otorga el presente reconocimiento a:",
                anchoPagina / 2,
                80, {
                    align: "center"
                }
            );

            pdf.setFontSize(24);
            pdf.setTextColor(0, 0, 128); // Blue
            pdf.text(nombre, anchoPagina / 2, 110, {
                align: "center"
            });

            pdf.setFontSize(16);
            pdf.setTextColor(0, 0, 0);
            pdf.text(
                `En reconocimiento a su destacada participación y exitoso desempeño en el Taller de Ensamblaje de PCs.`,
                anchoPagina / 2,
                140, {
                    align: "center",
                    maxWidth: 150
                }
            );

            pdf.text(
                `Progreso total alcanzado: ${totalPuntajeRedondeado}%`,
                anchoPagina / 2,
                160, {
                    align: "center"
                }
            );

            pdf.text(
                `Fecha: ${fecha}`,
                anchoPagina / 2,
                170, {
                    align: "center"
                }
            );

            pdf.save(`Certificado_${nombre.replace(/ /g, "_")}.pdf`);
        }

        document.querySelector('.close').onclick = closeQuiz;
        document.getElementById('certificateBtn').onclick = generarCertificado;
        window.onclick = (event) => {
            if (event.target == document.getElementById('modal')) {
                closeQuiz();
            }
        };
    </script>
</body>

</html>

<script src="../js/progressbar.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>