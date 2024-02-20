<?php
session_start();
$host = "localhost";
$db = "utilisateurs";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $mdp = $_POST["mdp"];
    $sql = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)";
    $req = $pdo->prepare($sql);
    $req->bindParam(':nom', $nom, PDO::PARAM_STR);
    $req->bindParam(':prenom', $prenom, PDO::PARAM_STR);
    $req->bindParam(':email', $email, PDO::PARAM_STR);
    $req->bindParam(':password', $mdp, PDO::PARAM_STR);
    $req->execute();
    header("Location: connexion.php");
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
    <form action="" method="post" id="monForm">
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom">
        <label for="prenom">Prenom</label>
        <input type="text" id="prenom" name="prenom">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
        <label for="mdp">Mot de passe</label>
        <input type="password" id="mdp" name="mdp">
        <label for="verifmdp">Verification mot de passe</label>
        <input type="password" id="verifmdp" name="verifmdp">
        <input type="submit" value="Connexion">
    </form>
    <script src="1.js"></script>
    <script src="2.js"></script>
    <script src="inscription.js"></script>
</body>
</html>