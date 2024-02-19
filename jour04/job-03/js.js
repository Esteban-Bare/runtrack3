function filtrerDonnees() {
    const id = document.getElementById('id').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const type = document.getElementById('type').value.trim();

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const resultatsFiltres = data.filter(pokemon => {
                // Apply filters
                return (!id || pokemon.id.toString().includes(id)) &&
                       (!nom || Object.values(pokemon.name).some(name => name.toLowerCase().includes(nom.toLowerCase()))) &&
                       (!type || pokemon.type.includes(type));
            });

            afficherResultats(resultatsFiltres);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
}

function afficherResultats(resultats) {
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = ''; 

    if (resultats.length === 0) {
        resultatDiv.textContent = 'Aucun résultat trouvé.';
        return;
    }

    const listeResultats = document.createElement('ul');
    resultats.forEach(pokemon => {
        const item = document.createElement('li');
        item.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.english}, Type: ${pokemon.type.join(', ')}`;
        listeResultats.appendChild(item);
    });

    resultatDiv.appendChild(listeResultats);
}
