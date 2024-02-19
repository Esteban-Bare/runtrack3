<?php 
$prenom = "Esteban";

echo "Bonjour " . $prenom . "\n";

if (!isset($connecte)) {
    echo "</br><a href='inscription.php'>Inscription</a><br/>";
    echo "<a href='connexion.php'>Connexion</a>";
}