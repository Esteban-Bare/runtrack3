<?php
session_start();
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $sql = "SELECT prenom FROM utilisateurs WHERE email = '$email'";
    $req = $pdo->query($sql);
    $result = $req->fetchColumn();
    $_SESSION['prenom'] = $result;
    header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" id="monFormConn">
        <label for="email">Email: </label>
        <input type="text" id="emailConn" name="email">
        <label for="mdp">Mot de passe: </label>
        <input type="password" id="mdpConn" name="mdp">
        <input type="submit" value="Connexion">
    </form>
    <script src="1.js"></script>
    <script src="2.js"></script>
    <script src="connexion.js"></script>
</body>
</html>