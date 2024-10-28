let horaStart = 0;
let minutosStart = 0;
let segundostart = 0;

function crono() {
    let miFecha = new Date('December 17, 1995 ' + horaStart +':' + minutosStart+':' + segundostart) ;
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let elCronometro = document.getElementById("elCronometro");



    horas = rellenarConCeros(horas, 2);
    minutos = rellenarConCeros(minutos, 2);
    segundos = rellenarConCeros(segundos, 2);

    let horaActual = horas +":" + minutos + ":" + segundos;

    elCronometro.innerHTML = horaActual;

if(segundostart >=60) {
    segundostart = 0;
    minutosStart += 1;
}

if(minutosStart >= 60) {
    minutosStart = 0;
    horaStart += 1;
}

 segundostart += 1;
}



let elCrono

let start = document.getElementById("start");
start.addEventListener('click',  function() {
    elCrono = setInterval(crono, 1000);
});

let stop = document.getElementById('stop');

stop.addEventListener('click', function() {
    elCrono= clearInterval(elCrono);
    console.log("stop");
} );

let r

