<?php 
    $db_dsn = array( 
        'host' => 'localhost', // this will change when you go live
        'dbname' => 'profData', // update this with your database name
        'charset' => 'utf8'
    );
    //php variables have Dollar signs

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = '';
    $db_pass = ''; // LEAVE THESE BLANK

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // PDO is the connection to the live host
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }