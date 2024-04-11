<?php

include "./partials/Connection.php";

try {
    $SQL = "SELECT task.id, task.title, task.completed, task.idUser, user.firstname
            FROM task
            INNER JOIN user ON task.idUser = user.id;";

    $state = $conn->query($SQL);

    $json = [];
    while ($row = $state->fetch(PDO::FETCH_ASSOC)) {
        $json[] = [
            "id" => $row['id'],
            "title" => $row['title'],
            "completed" => $row['completed'],
            "idUser" => $row['idUser'],
            "name" => $row['firstname']
        ];
    }

    echo json_encode($json);
} catch (\PDOException $e) {
    die($e->getMessage());
}