<?php
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

$sql = "SELECT * FROM utilisateurs";

$req = $pdo->query($sql);

echo json_encode($req->fetchAll(PDO::FETCH_ASSOC));