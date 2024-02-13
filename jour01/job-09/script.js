let table = [2, 3, 4, 5,15,51,78,22,336,4486,14,25,7,15];

// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
// sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
// l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

function tri(numbers, order) {
    numbers.sort((a, b) => {
        if (order === "asc") {
            return a - b;
        } else {
            return b - a;
        }
    });
    return numbers;
}

console.log(tri(table, "desc"));       