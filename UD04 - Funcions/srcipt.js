// Definir funcions
// const quadrat = function (n) {
//     return n * n;
// }

const mensaje = function() {
    console.log("Funcio que no retorna res per mostra un missatge...");
}

// mensaje();
// console.log(quadrat(3));

// const redondeaA = function(n,m) {
//     // Redondear n al multiplo mas cercano de m.
//     // n = 23 , m = 10 -> 20
//     let resto = n % m;
//     return n - resto + (resto < m / 2 ? 0 : m);

// }

// Ámbitos

// let x = 10; // Global
// if(true) {
//     let y = 20; // local respecto al bloque
//     //var z = 30; // Global
// }

// const mitad = function(n) {
//     return n / 2;
// };

// let n = 10; 
// console.log(mitad(100)); //50
// console.log(n); //10

// Ambito anidado
// const humus = function(factor) {
//     const ingrediente = function(cantidad,unidad, nombre) {
//         let cantidadIngrediente = cantidad * factor;
//         if(cantidadIngrediente > 1) {
//             unidad += "s";
//         }
//         console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
//     };
//     ingrediente(1, "lata", "garbanzos");
//     ingrediente(0.25, "taza", "thaini");
//     ingrediente(0.25, "taza", "jugo de limon");
//     ingrediente(1, "diente" , "ajo");
     
// };

// humus(100);

// function mensje2() {
//     console.log("mensaje 2");
// }

// const redondeaA = (n,m) => {
//     // Redondear n al multiplo mas cercano de m.
//     // n = 23 , m = 10 -> 20
//     let resto = n % m;
//     return n - resto + (resto < m / 2 ? 0 : m);

// };

// const saluda = (nombre) => "Hola " + nombre ;
// console.log(saluda("Arnau"));

//  Pila de llamadas
// function saludar(nombre) {
//     console.log("Hola " + nombre);
// };

// saludar("Arnau");
// console.log("Adios");

// function gallina() {
//     return huevo();
// };

// function huevo() {
//     return gallina();
// };

// console.log("Que fue antes el " + huevo() + " o la " + gallina());

// Parametros opcionales
// const quadrat = function (n,b = "n/a") { 
//     console.log(b);
//     return n * n;
// };
// console.log(quadrat(3));

// Cierre o Clausura
// function valor(n) {
//     let local = n;
//     return () => local;
// };

// let valor1 = valor(1); // valor1 es una funció
// let valor2 = valor(2);

// console.log(valor1());
// console.log(valor2());

// Recursividad
// function exponencial(base,exponente) {
    
//     if(exponente == 0) {
//         return 1;
//     }else {
//     return base * exponencial(base, exponente -1);
//     }
// };

// console.log(exponencial(2,3));

// Factorial de n: n! = n * (n-1) * n (n-2)... * 1
//EJ : 4! = 4 * 3 * 2 * 1 = 24

// let n = 10;
// let resultat = 1;
// for(let i = n; i >1; i--) {
//     resultat = resultat * i;
// };

// console.log(resultat);
  
// Crecimiento de funciones

//imprimirInventarioGranja(10,15);

// function imprimirInventarioGranja(vacas,pollos) {
//     let cadenaVaca = String(vacas);
//     console.log(typeof cadenaVaca);

//     while(cadenaVaca.length < 3) {
//         cadenaVaca = "0" + cadenaVaca;
//     };

//     console.log(`${cadenaVaca} Vacas`);
// };


// function rellenarConCeros(numero,longitud) {
//     let cadenaNumero = String(numero);
 

//     while(cadenaNumero.length < longitud) {
//         cadenaNumero = "0" + cadenaNumero;
//     };

//    return cadenaNumero;

// };

// function imprimirInventarioGranja (vacas,pollos,cerdos) {
//     console.log(`${rellenarConCeros(vacas,5)} Vacas`);
//     console.log(`${rellenarConCeros(vacas,5)} Pollos`);
//     console.log(`${rellenarConCeros(vacas,5)} Cerdos`);
// // imprimirComRellenoYEtiqueta(vacas, 'Vacas');
// // imprimirComRellenoYEtiqueta(pollos, 'Pollos');
// // imprimirComRellenoYEtiqueta(cerdos, 'Cerdos');
// };

// imprimirInventarioGranja(7,12,36);

//  Math.min()
// let a = Math.min(2,4);
// console.log(a);

// Escribe una funcuion que devuelva el minimo de 3 numeros.

// function numMin(numero1, numero2, numero3) {
//     let min = Math.min(numero1,numero2,numero3);
//     console.log(min);
// };

// numMin(1,9,2);

//Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
    al usar el %2 para ver si es divisible por dos.
    Existe otra manera de definir si un número es par o impar:
    - 0 es PAR
    - 1 es IMPAR
    - N: su paridad es la misma que N - 2
    Define la función recursiva esPar que corresponda a esta
    descripción. La función debe aceptar un solo parámetro (número
    entero positivo) y devolver un booleano.
    Probar con 50 y 75.
*/

// function esPar(numero) {
    
//     if(numero == 1) {
//         return false;
//     }else if (numero == 0) {
//         return true;
//     }else {
//         return esPar(numero - 2);
//     };
    

// };

// console.log(esPar(50));
// console.log(esPar(75));

// Exercici Kaprekar

// let contador = 0;
// let n = [3,4,8,1];

// function kaprekar(n) {
//     let comprovacio ="";
//     while(!comprovacio == "6174" || contador < 7) {
//         let majorMenor="";
//     for(let i = 0; i < n.length;i++) {
//         majorMenor = majorMenor + ordenarMajorMenor(n)[i];
//     };
//     //pasar de string a nombre
//     majorMenor = Number(majorMenor);

//     let menorMajor = "";
//     for(let i = 0; i < n.length;i++) {
//         menorMajor = menorMajor + ordenarMenorMajor(n)[i];
//     };

//         //pasar de string a nombre
//         menorMajor = Number(menorMajor) ;

//     resultat = Number(majorMenor) - Number(menorMajor) + "";

//     for(let i = 0; i < resultat.length;i++) {
//         n[i] = resultat[i];
//         comprovacio = comprovacio + resultat[i];
//     } ;

   
//     contador = contador + 1;
// };
   
// console.log(resultat);
   

//  };

// function ordenarMajorMenor (n) {
//    for(let i = 0; i < n.length; i++) {
//         for(let j = i + 1; j < n.length; j++) {
//             if(n[i] < n[j]) {
//                 let num = n[i];
//                 n[i] = n[j];
//                 n[j] = num;
//             };
//         };
       
//    };

// return n;

// };

// function ordenarMenorMajor (n) {
//     for(let i = 0; i < n.length; i++) {
//          for(let j = i + 1; j < n.length; j++) {
//              if(n[i] > n[j]) {
//                  let num = n[i];
//                  n[i] = n[j];
//                  n[j] = num;
//              };
//          };
        
//     };
 
//  return n;
 
//  };

// console.log(ordenarMajorMenor(n));
// console.log(ordenarMenorMajor(n));
// kaprekar(n);


