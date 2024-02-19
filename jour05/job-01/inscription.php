<?php
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="connexion.php" method="post">
        <label for="pseudo">Pseudo:</label>
        <input type="text" name="pseudo" id="pseudo">
        <label for="mdp">Mot de passe:</label>
        <input type="password" name="mdp" id="mdp">
        <input type="submit" value="Connexion">
    </form>
</body>
</html>