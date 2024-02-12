const date = new Date("2020/05/16");
function jourTravaille(date) {
    const joursFeries2020 = [
        '01-01', // Jour de l'An
        '04-13', // Lundi de Pâques
        '05-01', // Fête du Travail
        '05-08', // Victoire des Alliés
        '05-21', // Ascension
        '06-01', // Lundi de Pentecôte
        '07-14', // Fête Nationale
        '08-15', // Assomption
        '11-01', // Toussaint
        '11-11', // Armistice
        '12-25'  // Noël
    ];

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dayOfWeek = date.getDay();
    let day = date.getDate();

    const dateFormat = `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    if (joursFeries2020.includes(dateFormat)) {
        console.log(`Le ${day} ${month} ${year} est un jour ferie `);
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Le ${day} ${month} ${year} est un weekend`);
    } else {
        console.log(`Le ${day} ${month} ${year} est un jour normal`);
    }
}
