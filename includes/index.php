<?php
    require("connect.php");
    require("functions.php");


    if (isset($_GET["id"])) {
        $id = $_GET["id"];

        $result = getOneProf($pdo, $id);
    } else {
        $result = getAllProfs($pdo);
    }

    echo json_encode($result);