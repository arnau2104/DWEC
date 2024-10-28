//Creacion
// let saludo = 'hola';

//Constructor
// let saludo = new String('hola');
// console.log(saludo);

//Propiedades
let saludo = 'hola';
//length
// <console.log(saludo.length);
//Metodos mas comunes
//charAt() : Devuelve el caracter de indice especificado dentro de la cadena, como
// si cada caracter fuese un elemento de un array
// let caracter = saludo.charAt(1);
// console.log(caracter);

//chatCodeAt(): Retorna el codigo unicode del caracter en el indice especificado
// let codigo = saludo.charCodeAt(3);
// console.log(codigo); // 97

//concat(): Combina una o mas cadenas
// let saludoCopmpleto = saludo.concat(', ¿Como estas?');
// console.log(saludoCopmpleto);

// include(): Verifica si una cadena contiene a otra
// console.log(saludo.includes('mundo')); //false
// let saludoCopmpleto = saludo.concat(',mundo');
// console.log(saludoCopmpleto.includes('mundo')); //true

// indexOf(): Retorna el indice de la PRIMERA aparicion de una cadena en otra cadena
// let indice = saludo.indexOf('la');
// console.log(indice);

// lastIndexOf(): Retorna el indice de la ULTIMA aparicion de una cadena en otra cadena
// let cadena ="hola,hola, adios y hola";
// let ultimoIndice = cadena.lastIndexOf('hola');
// console.log(ultimoIndice);

// slice(): Extrae una parte de una cadena y devuelve una nueva cadena
// let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.slice(6,10);
// let nuevaCadena = cadena.slice(cadena.indexOf('cara'),cadena.indexOf('cara') + 'cara'.length);
// console.log(nuevaCadena);

//substring(): Similar a slice, pero sin admitir indices negativos
// let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.substring(6,10);
// console.log(nuevaCadena);

//toLowerCase(), toUpperCase()
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// // console.log(mayus);
// let minus = mayus.toLowerCase();

// // console.log(minus);

// let exercici = mayus.slice(mayus.indexOf('HOLA,'),mayus.lastIndexOf('Hola,')).toLowerCase().concat(mayus.slice(mayus.indexOf('CARA'),mayus.lastIndexOf('CARA')), mayus.slice(mayus.lastIndexOf('CARA') + 1, mayus.length).toLowerCase());
// console.log(exercici);

//replace(): Reemplaza una cadena por otra
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// let minus = mayus.toLowerCase().replace('cara', 'CARA');
// console.log(minus);

//trim(): Elimina espacios en blanco delante y dettras de la cadena
// let cadena = '    Joan    ';
// console.log(cadena.length);
// console.log(cadena);
// let cadenaSinEspacios = cadena.trim();
// console.log(cadenaSinEspacios);
// console.log(cadenaSinEspacios.length);

// split(): Divideix una cadena en un array de subcadenes
let cadena ="Hola cara de bola,rebola";
// let miArray = cadena.split(' ');
// console.log(miArray);

console.log(cadena[6]);