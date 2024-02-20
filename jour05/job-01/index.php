<?php
session_start();

if (!isset($_SESSION['prenom'])) {
    echo "<a href='inscription.php'>Inscription</a><br/>";
    echo "<a href='connexion.php'>Connexion</a>";
} else {
    echo "Bonjour " . $_SESSION["prenom"] . "\n";
    echo "<form method='post'><button type='submit' name='button'>Deconnexion</button></form><br/>";
}

if (isset($_POST['button'])) {
    session_destroy();
    exit();
}