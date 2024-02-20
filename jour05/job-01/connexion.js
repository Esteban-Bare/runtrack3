document.getElementById("monFormConn").addEventListener("submit", function (event) {
    event.preventDefault();
    let mdp = document.getElementById("mdpConn");
    let email = document.getElementById("emailConn");

    function checkEmail(email) {
        return fetch("email.php?email=" + email)
            .then(response => response.text());
    }
    checkEmail(email.value).then(data => {
        emailverif = data;
        if (emailverif === "false") {
            console.log("ok email");
        } else {
            alert("Email non existon");
            return;
        }
    });
    function checkUtilisateur(email, mdp) {
        return fetch("mdp.php?email=" + email + "&mdp=" + mdp)
            .then(response => response.text());
    }
    checkUtilisateur(email.value, mdp.value).then(data => {
        utilisateurverif = data;
        if (utilisateurverif === "True") {
            console.log("ok");
        } else {
            console.log("ERROR");
            alert("Mot de passe incorrect");
            return;
        }
    })
    this.submit();
});