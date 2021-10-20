<?php
    // include the connect file to access the database
    include("connect.php");

    $query = "SELECT * FROM profs"; 
    // put the SQL query in a variable

    $runQuery = $pdo->query($query);
    // Get the data from the SQL

    $result = array();
    //put the rows of data in an array

    while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }
    //make the data usable with AJAX

    echo (json_encode($result));
    //send the database info back to the JS file as a JSON