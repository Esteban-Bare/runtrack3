// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de
// La Plateforme_.

const codeKonami = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'ArrowUp'];
let codeCounter = 0;

document.addEventListener('keydown', function (event) {
    if (codeKonami[codeCounter] === event.key) {
        codeCounter++;
        console.log(event.key);
        if (codeCounter === codeKonami.length) {
            document.body.style.backgroundColor = 'Blue';
            document.body.style.padding = '0';
            document.body.style.margin = '0';
            document.body.style.color= 'White';
            this.querySelector('header').style.color = 'Blue';
            this.querySelector('header').style.backgroundColor = 'White';
            this.querySelector('header').style.width = '100%';
            this.querySelector('header').style.textAlign = 'center';
            this.querySelector('header').style.fontSize = '200%';
            document.getElementById('Plateforme').textContent = 'vive la PLATEFORME';
            codeCounter = 0;
        }
    } else {
        codeCounter = 0;
    }
});

