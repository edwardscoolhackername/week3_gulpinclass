<?php
    // include the connect file to access the database
    include("connect.php");

    $result = array();

    function getProfData($conn, $prof) {
        if (is_null($prof)) {
    $query = "SELECT * FROM profs"; 
    // put the SQL query in a variable
    } else {
        $query = "SELECT * FROM profs WHERE id='".$prof."'"
    }

    $runQuery = $pdo->query($query);
    // Get the data from the SQL

    while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }
    //make the data usable with AJAX
}

    echo (json_encode($result));
    //send the database info back to the JS file as a JSON