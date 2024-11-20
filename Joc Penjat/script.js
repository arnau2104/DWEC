const llistaParaules = ['bolla','guerra', 'futbol', 'cotxe'];
//const paraulaEndivinar = [...document.querySelectorAll('.paraulaSecreta')];
let paraulaPartida = []; // Aquesta sera la paraula amb la que es jugara la partida
let teclat = document.getElementById('teclat');
let tecla = document.querySelectorAll('.tecla');
let lletresJugades = [];
let lletresCorrectes = []; //Aqui es guardaran les lletres que el usuari endivini
let lletresIncorrectes = [];
let contadorErrors = 0;
let numErrors = document.getElementById("numErrors");
let intentsRestants = 7;
let spanIntentsRestants = document.getElementById("intentsRestants");
let contenedorParaulaSecreta = document.querySelector(".contenedorParaulaSecreta");
let temps = document.querySelector(".temps");
let imatgePenjat = document.getElementById("imatgePenjat");


//FUNCIONS

//Funcio que retorna un nombre aleatori entre 0 i el maxim que indiquis
function randomNumber(max) {
    return Math.floor(Math.random() * max);
};

function paraualaAleotoria() {
    let nombreAleatori = randomNumber(llistaParaules.length);

    paraulaPartida = llistaParaules[nombreAleatori].split('');

    // cream els div amb la longitud de la paraula secreta
    for(let i = 0; i < paraulaPartida.length; i++) {
        contenedorParaulaSecreta.innerHTML += "<div class='paraulaSecreta'>_</div>";
    };
};


function comprobarLletra(lletra) {
    let lletraCorrecta = false;
    for(let i = 0; i < paraulaPartida.length; i++) {
       if(paraulaPartida[i] == lletra) {
        // console.log("LLetra correcta! " + lletra);
        lletresCorrectes[i] = lletra;
        classParaulaSecreta[i].innerText = lletra.toUpperCase();
        lletraCorrecta = true;
       }else {
        if(lletresCorrectes[i]=="") {
            lletresCorrectes[i] = '';
        // console.log(paraulaPartida[i]);
        }
       };
    };

    return lletraCorrecta;
}

function comprobarPartida() {
    let guanyat = false;
    //miram que les lletres correctes i la paraula de la partida tenguin la mateixa longitud, si no es aixi no entram al if i donam la partida com a no guanyada
    if(lletresCorrectes.length == paraulaPartida.length) {
        for(let i = 0; i < lletresCorrectes.length; i++) {
            //miram si la lletra es igual a la de la partida
            if(lletresCorrectes[i] == paraulaPartida[i]) {
                guanyat = true;

             // si la lletra no es igual, la partida no esta guanyada   
            }else {
                guanyat = false;
                break;
            };
        };
    }else {
        guanyat = false;
    };

   

    return guanyat;
}

let time = new Date();
duracion = 30;
time.setSeconds(duracion);
temps.innerHTML =  "00:" + time.getSeconds();
function temporitzador() {
    let seconds = time.getSeconds();
    seconds = seconds - 1;
    if(seconds == 0) {
        temps.innerHTML = "T has quedat sense temps"     
    }else {
    time.setSeconds(seconds);
    
    temps.innerHTML ="00:" + seconds;
    }
};

function cambiarImatgeCadaFall() {
    if(contadorErrors == 1) {
        imatgePenjat.setAttribute("src" , "./imgs/1fall.png" );
    }else if(contadorErrors == 2) {
        imatgePenjat.setAttribute("src" , "./imgs/2falls.png" );
    }else if(contadorErrors == 3) {
        imatgePenjat.setAttribute("src" , "./imgs/3falls.png" );
    }else if(contadorErrors == 4) {
        imatgePenjat.setAttribute("src" , "./imgs/4falls.png" );
    }else if(contadorErrors == 5) {
        imatgePenjat.setAttribute("src" , "./imgs/5falls.png" );
    }else if(contadorErrors == 6) {
        imatgePenjat.setAttribute("src" , "./imgs/6falls.png" );
    }else if(contadorErrors == 7) {
        imatgePenjat.setAttribute("src" , "./imgs/7falls.png" );
    };
}

//EVENTS


//activar mes envant!!!
// let contaEnrera;
// window.addEventListener('keydown', (e)=>{
//     if(intentsRestants == 7) {
//     contaEnrera = setInterval(temporitzador,1000);
//     };
    
//     // revisar
//       intentsRestants--;
//       spanIntentsRestants.innerText = intentsRestants;
//       if(intentsRestants == 0) {
//           console.log("T has quedat sense intents");
//       };
   
   

//     // Guardam la lletra pitjada
//     let lletra = document.querySelector('.tecla#' + e.key);
//     lletra.classList.toggle('seleccionat');
    
//     //guardam la lletre pitjada a l'array de lletres jugades
//     lletresJugades.push(lletra.id);
  
// });

// window.addEventListener('keyup', (e)=> {
//     let lletra = document.querySelector('.tecla#' + e.key);

  

//      if(comprobarLletra(lletra.id) == true ) {
//         lletra.classList.add('correcta');
//      }else {
//         lletra.classList.add('incorrecta');
//         lletresIncorrectes.push(lletra.id);
//         contadorErrors++;
//         numErrors.innerText = contadorErrors;

//      };

//      console.log(lletresCorrectes);

//      if(comprobarPartida() == true) {
//         console.log("Enhorabona, has guanyat la partidaa");
//      };

// });

let contaEnrera;


    teclat.addEventListener('click', (e)=>{
        if(comprobarPartida() == false && intentsRestants > 0) {
            if(intentsRestants == 7) {
            contaEnrera = setInterval(temporitzador,1000);
            };
            
            // revisar
            intentsRestants--;
            spanIntentsRestants.innerText = intentsRestants;
            if(intentsRestants == 0) {
                console.log("T has quedat sense intents");
            };


            // Guardam la lletra pitjada
            let lletra = e.target;
            lletra.classList.toggle('seleccionat');
            
            //guardam la lletre pitjada a l'array de lletres jugades
            lletresJugades.push(lletra.id);

            if(comprobarLletra(lletra.id) == true ) {
                lletra.classList.add('correcta');
            }else {
                lletra.classList.add('incorrecta');
                lletresIncorrectes.push(lletra.id);
                contadorErrors++;
                numErrors.innerText = contadorErrors;

            };

            console.log(lletresCorrectes);

          

            cambiarImatgeCadaFall();
        }else if (comprobarPartida() == true) {
            console.log("Partida guanyada!!"); 
        }else {
            console.log("Partida perduda");
        }   
    
    });




paraualaAleotoria();
// cream la constant despres de generar la paraulaAleatoria, perque pugui trobar la classe
const classParaulaSecreta = document.querySelectorAll(".paraulaSecreta");
console.log(paraulaPartida);
