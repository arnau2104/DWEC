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
function exponencial(base,exponente) {
    
    if(exponente == 0) {
        return 1;
    }else {
    return base * exponencial(base, exponente -1);
    }
};

console.log(exponencial(2,3));

// Factorial de n: n! = n * (n-1) * n (n-2)... * 1
//EJ : 4! = 4 * 3 * 2 * 1 = 24
let n = 10;
let resultat = 1;
for(let i = n; i >1; i--) {
    resultat = resultat * i;
};

console.log(resultat);
  