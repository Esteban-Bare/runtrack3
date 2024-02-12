let x = 11;
let y = 7;

// Function to calculate two prime numbers if they are prime numbers if they are not it has to return false

function nombrePremier(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sommenombrespremiers(x, y) {
    if (nombrePremier(x) && nombrePremier(y)) {
        let addition = x + y;
        console.log(addition);
    } else {
        console.log(false);
    }
}
