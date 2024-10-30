let $nom = prompt("Nom:");
let $edat = prompt("Edat:");

let $contador = 0;


function crearCookie() {
    document.cookie ="nom" + $nom + "=" + $nom + "; expires = Wen, 31 Oct 2024 12:00:00 GMT";
    document.cookie="edat" + $nom + "=" + $edat + "; expires = Wen, 31 Oct 2024 12:00:00 GMT";
    $contador+=1;
};

crearCookie();
document.cookie = "contador = " + $contador +"; expires = Wen, 31 Oct 2024 12:00:00 GMT";
console.log(document.cookie);