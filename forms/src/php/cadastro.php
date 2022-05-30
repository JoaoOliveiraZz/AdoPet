<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    include('conect.php');

    $Nome  = isset($_POST['Nome']) ? $_POST['Nome'] : '';
    $Email = isset($_POST['Email']) ? $_POST['Email'] : '';
    $Senha = isset($_POST['Senha']) ? $_POST['Senha'] : '';

    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$Nome','$Email','$Senha')";

    echo $sql;

    if(mysqli_query($con, $sql)){
        echo 'deu certo';
        mysqli_close($con);
    }
    else{
        echo 'Deu errado';
        mysqli_close($con);
    }
    


?>