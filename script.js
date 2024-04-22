// JavaScript Advanced

/* Esercizio 1:
Crea una funzione Che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.*/
function fifty(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

/* Esercizio 2:
Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
Passa la stringa e la posizione come parametri e ritorna la stringa modificata.*/
function removeLetter(string, index) {
    if (index < 0 || index >= string.length) {
        return string;
    } else {
        return string.slice(0, index) + string.slice(index + 1);
    }
}

/* Esercizio 3:
Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.*/
function numberRange(n1, n2) {
    if (((n1 >= 40 && n1 <= 60) || (n2 >= 40 && n2 <= 60)) || ((n1 >= 70 && n1 <= 100) || (n2 >= 70 && n2 <= 100))) {
        return true;
    } else {
        return false;
    }
}

/* Esercizio 4:
Crea una funzione che accetti un nome di citta come parametro e ritorni il nome stesso se inizia con "Los" o "New", 
altrimenti ritorni 'false'.*/
function cityLosOrNew(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return false;
    }
}

/* Esercizio 5:
Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro.*/
function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

/* Esercizio 6:
Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. 
Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'.*/
function checkThreeOne(array) {
    if (array.some(element => element === 3 || element === 1)) {
        return false;
    } else {
        return true;
    }
}

/* Esercizio 7:
Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° => ritorna "acuto";
Angolo ottuso: tra i 90° e i 180° gradi => ritorna "ottuso";
Angolo retto: 90° => ritorna "retto";
Angolo piatto: 180° => ritorna "piatto".*/
function angle(degrees) {
    if (degrees > 0 && degrees < 90) {
        console.log("acuto");
    } else if (degrees > 90 && degrees < 180) {
        console.log("ottuso");
    } else if (degrees === 90) {
        console.log("retto");
    } else if (degrees === 180) {
        console.log("piatto");
    } else {
        console.log("Il parametro inserito non è valido");
    }
}

/* Esercizio 8:
Crea una funzione che crei un acronimo a partire da una frase. 
Es.: "Fabbrica ltaliana Automobili Torino" deve ritornare "FIAT"*/
function createAcronym(string) {
    let words = string.split(" ");
    let acronym = [];
    for (let word of words) {
        acronym.push(word[0].toUpperCase());
    }
    return acronym.join("");
}

