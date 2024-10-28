// let numeros = [1,2,3,4]; // 4 elementos
// console.log(numeros[0]); // indexados desde 0 hasta su longitud - 1
// console.log(numeros[4]); // undefined
// console.log(numeros [numeros.length - 1]);

// let nombres = ["pepe", "Maria", 'Joan', 'Pere'];

// let mescla1 = ["Hola", 10, true];
// console.log(mescla1[0]);
// console.log(mescla1[1]);
// console.log(mescla1[2]);

// let numeros = new Array();
// numeros[0] = 10;
// numeros[1] = 20;
// numeros[3] = 40;
// console.log(numeros);

// let numeros = new Array(5).fill(5);
// console.log(numeros);

//Metodos de Array
// push() : Agrega 1 o més elements al final de l'array
const frutas = ["manzana","platano","naranja"];
// console.log(frutas);
// frutas.push("uva");
// console.log(frutas);

// //pop() : elimina el ultimo elemento del array.
// let uva = frutas.pop();
// console.log(uva);

// // shift() : Elimina el primer elemento del array
// let primer = frutas.shift();
// console.log(frutas);
// console.log(primer);

// // unshift(): Agregar uno o mas elemtnos al inicio del array
// frutas.unshift("melon","sandia");
// console.log(frutas);

// // concat() : Combina dos o mas arrays y retorna un nuevo array
// const frutas2 = ["melocoton" , "kiwi"];
// const combinacion = frutas.concat(frutas2);
// console.log(combinacion);

// slice(): Devuelve una copia superficial de una poricon del array
// frutas.push('kiwi','melon','sandia','melocoton');
// console.log(frutas);
// const frutas2 = frutas.slice(1, 5)
// console.log(frutas2);

// splice(): Cambia el contenido de un array eliminando,reemplazando o agregando elementos.
// frutas2.splice(1, 1, 'uva', 'tomate');
// console.log(frutas2);

// indexOf(): Devuelve el primer indice en el que se encuentra un elemento dado en un array 0 -1 si no lo encuentra
// const indiceElementoBuscado = frutas.indexOf('sandia');
// console.log(indiceElementoBuscado);

// join(): une todos los elementos de un array en una cadena, utilizando un separador especificado
// const union = frutas.join(' , ');
// console.log(union);

// sort(): Ordena los elementos de un array alfabeticamente (si son cadenas) o numericamente (para numeros)
// frutas.sort();
// console.log(frutas);

//Ordena por valores unicode!!
// const numeros = [10, 5, 8, 3, 1];
// console.log(numeros);
// numeros.sort();
// console.log(numeros);

// const ciudades = ['Zaragoza' , 'madrid' , 'Barcelona'];
// ciudades.sort();
// console.log(ciudades);

//Afortunadamente sort() tiene un parametro opcional
// const numeros = [10, 5, 8, 3, 1];
// // console.log(numeros.sort(function(a, b) {
// //     // -1 a < b
// //     // 1 a > b
// //     // 0 a == b
// //     return a - b;
// // }));

// console.log(numeros.sort((a, b) => a -b ));

 //const ciudades = ['Zaragoza' , 'madrid' , 'Barcelona', 'Àvila'];
// ciudades.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 :
//                         a.toLowerCase() < b.toLowerCase() ? -1 : 0);
// console.log(ciudades);

// ciudades.sort((a, b) => a.localeCompare(b))
// console.log(ciudades);

// Desestructuracion
// const numeros = [1, 2, 3];
// const[a , b ,c] = numeros;
// console.log(a);
// console.log(b);
// console.log(c);

// Operador Spread
//  const numeros = [1, 2, 3];
// // const masNumeros = [...numeros, 4, 5];
// // console.log(masNumeros);

// function sumar(...numeros) {
//     let resultado = 0;
//     for(let numero of numeros) {
//         resultado += numero;
//     }
//     return resultado;
// }

// console.log(sumar(...numeros));

//Después de ver objetos, vemos alguna cosa mas de array.

//forEach(): Ejecuta una funcion una vez por cada elemento del array.
// const nunmeros =  [1, 3, 5, 7];
// nunmeros.forEach((numero)=> {
//     let resultados = numero * 2;
//     console.log(resultados);
//     console.log(numero);
// });

// map(): Crea un nuevo array con los resultados de crear una funcion a cada elemento del array orginial
// const nunmeros =  [1, 3, 5, 7];
// const doblaNumeros = nunmeros.map((numero)=> {
//     return numero * 2;
// });
// console.log(doblaNumeros);
// console.log(nunmeros);

// filter(): Crea un nuevo array cin todos los elementos que cumplan una 
//condicion determinada
// const numeros =  [1, 3, 5, 7];
// const numerosPares = numeros.filter((numero)=> {
//     return numero % 2 == 0;
// });

// console.log(numerosPares);

// reduce(). Aplica una funcion a un acumulador y a cada elemento
// del array (de izquierda a derecha)  para reducirlo a un unico valor
// const numeros =  [1, 3, 5, 7];
// let suma = numeros.reduce((acumula,numero)=> {
//     return acumula + numero;
// });
// console.log(suma);

// find(): Devuelve el PRIMER elemento del array que cumpla 
//una condicion determindada
// const numeros =  [1, 3, 4, 5, 7];
// const numeroEncontrado = numeros.find((numero)=>{
//     return numero > 3;
// })

// console.log(numeroEncontrado);

//findIndex(): Devuelve el INDICE del primer elemento del array
//que cumple con una funcion de prueba, o "-1" si no lo encuentra
// const numeros =  [1, 3, 4, 5, 7];
// const indiceEncontrado = numeros.findIndex((numero)=>{
//     return numero > 3;
// });
// console.log(indiceEncontrado);

//some(): Comprueba si el elemento del array cumple
//una condicion determinada
// const numeros =  [1, 3, 4, 5, 7];
// const tieneNumeroPar = numeros.some((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(tieneNumeroPar);

//every(): Comprueba si todos los elementos del array cumplen con una condicion
// const numeros =  [1, 3, 4, 5, 7];
// const sonPares = numeros.every((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(sonPares);

