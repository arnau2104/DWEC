// Objeto Date

// let miFecha = new Date();
// console.log(miFecha);

// let horas = miFecha.getHours();
// let minutos = miFecha.getMinutes();
// let segundos = miFecha.getSeconds();


// let ampm = "";


// if(horas > 12) {
//     horas = horas - 12;
//     ampm = "PM";
// }else {
//     ampm = "AM";
// };

// horas = rellenarConCeros(horas, 2);
// minutos = rellenarConCeros(minutos, 2);
// segundos = rellenarConCeros(segundos, 2);

// let horaActual = horas +":" + minutos + ":" + segundos + " " + ampm;

// console.log(horaActual);

// setTimeout(funcion_a_llamar, milisegundos)
// setInterval(funcion_a_llamar, miliSegundos)
// clearInterval()
//clearTimeout()

function crono() {
    
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let laHora = document.getElementById("laHora");

    let ampm = "";


    if(horas > 12) {
        horas = horas - 12;
        ampm = "PM";
    }else {
        ampm = "AM";
    };

    horas = rellenarConCeros(horas, 2);
    minutos = rellenarConCeros(minutos, 2);
    segundos = rellenarConCeros(segundos, 2);

    let horaActual = horas +":" + minutos + ":" + segundos + " " + ampm;

    laHora.innerHTML = horaActual;

}

let elCrono;

window.onload = function() {
    elCrono = setInterval(crono, 1000);
}