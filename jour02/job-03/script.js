// Créez une balise <button> ayant comme id “button”.
// Créez une balise <p> ayant comme id “compteur” et contenant “0”.
// Ce contenu doit évoluer proportionnellement au nombre d'événements click reçu par le
// bouton
// ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre html.
// La fonction permettant d’effectuer la modification doit s'appeler “addone()”.

const button = document.getElementById("button");
const compteur = document.getElementById("compteur");

function addone() {
    compteur.textContent = parseInt(compteur.textContent) + 1;
}

button.addEventListener("click", addone);