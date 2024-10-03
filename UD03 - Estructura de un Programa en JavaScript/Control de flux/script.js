//let numero = Number(prompt("Elije tu numero:"));

//console.log("Tu numero es la raiz cuadrada de " + numero * numero);

//Condicional

/*let numero = Number(prompt("Elije tu numero:"));
let clgNum =  "Tu numero es la raiz cuadrada de " + numero * numero;
let clgNumMajor10 = "El numero es mayor que 10";
let clgIntroduceNumero = "Introduce un numero"

if (!Number.isNaN(numero)){
     console.log(clgNum);
    if (!Number.isNaN(numero) && numero > 10) console.log(clgNumMajor10);
    
}else console.log(clgIntroduceNumero);*/

//BUCLES
//WHILE

/*let numero = 2;
let limite = 100;
let contador = 0;
let suma = 0;
while (contador <limite){
    contador = contador +1;
   
        console.log(numero);
        suma = numero + suma
        numero = numero + 2;
    
}
console.log(suma);*/

// let numero = Number(prompt("Introdueix un nombre"));
// let potencia =  Number(prompt("Introdueix la seva potencia"));
// let resultat = 1;
// let contador = 0;
// while(contador < potencia) {
//     contador = contador + 1;
//     resultat = resultat * numero;
    
// }
// console.log(resultat);

//Do WHILE
// let nombre;
// do {
//     nombre = prompt ("Quin eres?");
// }while(!nombre);
// console.log(nombre);

//BUCLES FOR
// for(let numero =2; numero<=24; mumero = numero+=2) {
//     console.log(numero);
// }
// for(let numero = 20 ; numero < 100;numero++) {
//     if(numero % 5 == 0) {
//         continue;
//     }
//     console.log(numero);
// }


// SWITCH - CASE
// let pregunta = prompt("¿Que tiempo hace?");
// switch(pregunta) {
//     case "lluvioso":
//         console.log("Coge un paraguas");
//         break;
//     case "soleado":
//         console.log("LLeva ropa ligera");
        
//     case "nublado" :
//         console.log("Puedes salir a la calle");
//         break;
//     default :
//         console.log("Tiempo desconocido");
//         break;
// }

//Ejercicio 1
/*
Escribe un bucle que realice siete llamadas a cosole.log para mostrar la siguiente figura :
#
##
###
####
#####
######
#######
*/
function ejercicio1() {
let contador = 0;
let cadena="";

for(let i = 1; i<=7;i++) {
    cadena = cadena + "#";
    console.log(cadena);
}
}

/*Ejercicio 2
Escribe un programa que use console.log para imprimir todos los numeros del 1 al 100, con dos excepciones:
- Para los numeros que sean divisibles por 3, imprime:
"Jander".
- Para los numeros numeros que sean divisbles por 5 (y no por 3) imprime:
"Clander".
*/

function ejercicio2() {
for (let i = 0; i <= 100; i++ ) {
    let cadena="";
    
    if(i % 3 == 0 && i % 5 == 0) {
        cadena = "JanderClander";
    console.log(i + " " +  cadena);
     continue;
}
    if(i % 3 == 0) {
        cadena = "Jander";
        console.log(i + " " + cadena);
    }

    if (i % 5 == 0 && i % 3 == 0 ) {
        cadena = "Clander";
        console.log(i + " " + cadena);
    }    
}
}

/* Ejercicio 3
Escribe un programa que cree una cadena que represente un tablero de 8 x 8, usando caracteres de salto de linea para separar las lineas.
En cada posicion del tablero hay un caracter de espacio o un caracter "#", Los caracteres deben formar un tablero de ajedrez:
 # # # #
# # # #
 # # # #
# # # #  
 # # # #
# # # #
 # # # #
# # # #
*/
function ejrecicio3() {
let n = 10;
let string = "";
let hastag = "#";
let espai= " ";
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        if(i % 2 != 0 ) {
            if(j % 2 != 0) {
                string = string + espai;
            }else {
                string = string + hastag;
            }
    } else  {
        if(j % 2 != 0) {
            string = string + hastag;
        }else {
            string = string + espai;
        }
    }
    }
    string = string + "\n";
}

console.log(string);
}

switch(prompt("¿Que ejercicio quieres ver?")) {
    case "1" :
        ejercicio1();
        break;
        case "2" :
            ejercicio2();
            break;
        case "3" :
            ejercicio3();
            break;
        default : 
            console.log("Selecciona un ejericio valido");            

}