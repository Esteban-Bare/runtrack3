<?php
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

$email = $_GET['email'];

$sql = "SELECT email FROM utilisateurs WHERE email = :email";

$req = $pdo->prepare($sql);

$req->bindParam(':email', $email, PDO::PARAM_STR);

$req->execute();

$result = $req->fetchAll(PDO::FETCH_ASSOC);

if (count($result) > 0) {
    echo "false";
} else {
    echo "true";
}

