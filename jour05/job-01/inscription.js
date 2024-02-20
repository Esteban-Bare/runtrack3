document.getElementById("monForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let mdp = document.getElementById("mdp");
    let verifmdp = document.getElementById("verifmdp");
    let email = document.getElementById("email");

    if (nom.value == "" || prenom.value == "") {
        console.log("ERROR");
        alert("Nom ou prénom manquant");
        return;
    }
    else {
        console.log("nom prenom ok");
    }
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(email.value)) {
        console.log("email ok");
    } else {
        alert("Email non valide");
        return;
    }
    function checkEmail(email) {
        return fetch("email.php?email=" + email)
            .then(response => response.text());
    }

    checkEmail(email.value).then(data => {
        emailverif = data;
        if (emailverif === "false") {
            alert("Email déja utilisé");
            return;
        } else {
            console.log("ok email");
        }
    });
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    function regex(password) {
        return passwordRegex.test(password);
    }
    if (regex(mdp.value)) {
        console.log("mdp ok");
    } else {
        console.log("Password is not valid");
        alert("Le mot de passe n'est pas valide. Il doit comporter au moins 8 caractères, une minuscule, une majuscule et un chiffre.");
        return;
    }
    if (mdp.value === verifmdp.value) {
        console.log("les mot de passe ok");
    } else {
        console.log("ERROR");
        alert("Les mots de passe ne correspondent pas");
        return;
    }

    this.submit();
}
);