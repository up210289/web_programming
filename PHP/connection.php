<?php

include "./partials/connection.php";
// Conexion a la base de datos
/*
PDO es un objeto y resive tres parametros 
1.- A donde se va a conectar
2.- Usuario y contraseña
 */
/*host es la url o el domino de donde se va a conectar, dbname es el nombre de la base de ddatos del dominio*/
/*Usuario */
/*contraseña */
try{
    

    $result = $conn -> query("SELECT * FROM user;");

    $json = [];
    while ($row = $result -> fetch()) {
        array_push($json, [
            "id" => $row['id'],
            "firstname" => $row['firstname'],
            "lastname" => $row['lastname'],
            "email" => $row['email']
        ]);
    }
    
    $jsonString = json_encode($json);
    //var_dump($json);
    echo $jsonString;
} catch (PDOException $e) {
    
}