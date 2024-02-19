<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="filterForm">
        <label for="id">ID:</label>
        <input type="text" id="id">
        <label for="nom">Nom:</label>
        <input type="text" id="nom">
        <label for="type">Type:</label>
        <select id="type">
            <option value="">Tous</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Steel">Steel</option>
            <option value="Fairy">Fairy</option>
            <option value="Flying">Flying</option>
            <option value="Dark">Dark</option>
            <option value="Dragon">Dragon</option>
        </select>
        <input type="button" value="Filtrer" onclick="filtrerDonnees()">
    </form>

    <div id="resultat"></div>
    <script src="1.js"></script>
    <script src="2.js"></script>
    <script src="js.js"></script>
</body>

</html>