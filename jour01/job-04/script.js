const date = new Date();

// function qui reconnait si c'est une année bixetille 
function getBixetille(date) {
    if (date.getFullYear() % 4 === 0 && date.getFullYear() % 100!== 0 || date.getFullYear() % 400 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}