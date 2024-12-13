<?php
include 'db_conection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!empty($data['usuario_id']) && !empty($data['quiz_nombre']) && isset($data['puntaje']) && isset($data['total_preguntas'])) {
        $usuario_id = $data['usuario_id'];
        $quiz_nombre = $data['quiz_nombre'];
        $puntaje = $data['puntaje'];
        $total_preguntas = $data['total_preguntas'];

        $stmt = $pdo->prepare("INSERT INTO progreso (usuario_id, quiz_nombre, puntaje, total_preguntas) VALUES (?, ?, ?, ?)");
        if ($stmt->execute([$usuario_id, $quiz_nombre, $puntaje, $total_preguntas])) {
            echo json_encode(["success" => true, "message" => "Progreso guardado correctamente."]);
        } else {
            echo json_encode(["success" => false, "message" => "Error al guardar el progreso."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Datos incompletos."]);
    }
}
?>
