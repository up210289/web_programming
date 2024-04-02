<?php
include "./partials/connection.php";
$idUser = $_GET['id'];

try {
    $sql = "SELECT * FROM task WHERE idUser = {$idUser};";
    $state = $conn -> query($sql);
    
    $json =[];
    while ($row = $state -> fetch()) {
        array_push($json, [
            "id" => $row["id"],
            "idUser" => $row["idUser"],
            "title" => $row["title"],
            "completed" => $row["completed"] == 1
        ]);
    }
    
    $jsonString = json_encode($json);
    echo $jsonString;
} catch (PDOException $e) {
    echo $e -> getMessage();
}
