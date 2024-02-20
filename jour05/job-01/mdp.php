<?php
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

$email = $_GET['email'];
$mdp = $_GET['mdp'];

$sql = "SELECT email FROM utilisateurs WHERE email = :email AND password = :mdp";

$req = $pdo->prepare($sql);

$req->bindParam(':email', $email, PDO::PARAM_STR);

$req->bindParam(':mdp', $mdp, PDO::PARAM_STR);

$req->execute();

$result = $req->fetchAll(PDO::FETCH_ASSOC);

if (count($result) > 0) {
    echo "True";
} else {
    echo "False";
}