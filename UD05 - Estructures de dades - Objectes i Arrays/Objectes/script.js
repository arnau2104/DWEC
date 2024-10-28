let unCliente = {
    nombre: "Peter Jackson",
    "Direccion del cliente" : "c/ desconocida",
    "-+-+-+--+-" : "bloquetjada" ,
    pago : {
        tipo : "visa" ,
        tarjeta : "10234587" ,
        "fecha de caducidad" : "nunca"
    }
};

//console.log(unCliente);

unCliente['nombre'] = "Juanito";
// console.log(unCliente.nombre);
// console.log(unCliente['Direccion del cliente']);
// console.log(unCliente.pago.tipo);
// console.log(unCliente.pago["tipo"]);

// let estudiante = {
//     id: 2,
//     nombre : "Obi wan Kenobi",
//     diHola: function() {
//         return "hola";
//     }
// };

// // console.log(estudiante.diHola());
// console.log(estudiante);

// estudiante.edad = 190;

// estudiante.diAdios = function() {
//     return "adios";
// }

// console.log(estudiante.diAdios());
// console.log(estudiante);

//this
// let factura = {
//     descripcion : "factura de prueba",
//     import: 100.00,
//     iva: 21.00,
//     subtotal : function() {
//         return this.import;
//     },
//     total : function() { 
//         return this.import + (this.import * this.iva) / 100;
//     }
// };

// console.log(factura.subtotal());
// console.log(factura.total());

// Constructors
// function Web() {
//     this.url = "https://localhost";
//     this.nombre = "Localhost";  
//     this.dominio = ".es";
    
//     this.mostrarInfo = function() {
//         return this.nombre + " :: " + this.url + this.dominio;
//     }
// };

// let unaWeb = new Web();
// unaWeb.url = "htpp://fcBarcelona.cat";
// unaWeb.nombre = "mes que un cluB"
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web
//console.log(otraWeb.mostrarInfo());

// function Web(url,nombre ) {
//     this.url = url;
//     this.nombre = nombre;  
//     this.dominio = ".es";
    
//     this.mostrarInfo = function() {
//         return this.nombre + " :: " + this.url + this.dominio;
//     }
// };

// let unaWeb = new Web("htpp://fcBarcelona.cat","mes que un cluB");
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web("https://localhost", "Localhost");
// console.log(otraWeb.mostrarInfo());

// Web.visitas = 10;
// console.log(unaWeb.visitas);

// Web.miFunction = function() {
//     return "boquepasa";
// };
// console.log(otraWeb.miFunction());


// prototype

// console.log(unaWeb);

// Web.prototype.visitas = 10;
// console.log(unaWeb);
// Web.prototype.diHola = function () {
//     return "diHola";
// }

// console.log(otraWeb.diHola());

// Recorrer un objecte
// let notas = {
//     diw : 8 ,
//     dwes : 9.5,
//     dwec : 4.9,
//     daw: {
//         test: 2.0,
//         practic: 3.0
//     } 

// };

// for (let nota in notas) {
//     //console.log(nota);
//     console.log(typeof notas[nota]);
//     console.log(notas[nota]);
// }







// STAR WARS: Personajes y edades
/*
    Eres un joven padawan que colecciona datos sobre los heroes de star wars,
    Se te proporcionan dos Arrays: uno con los nombres de algunos de estos heroes 
    y otro con sus edades que tenian (en el episodio 4) con la indexacion correspondiente 
    a su nombre en el otro array
*/

// const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
// const  edades = [19, 57, 900, 19];

// /*
//     Escribe un programa que combine los datos de ambos arrays en un objecto y los muestre por consola.
//     Calcula ademas la suma de las edades y muestrala al final.
// */

//  function Heroes() {
   
// };

// let heroe = new Heroes;
// let sumaEdades=0;

// for(let i = 0; i< nombres.length; i++) {
//     let nombre = nombres[i];
//     let edad = edades[i];
//    Heroes.prototype.nombre = edad;
//    console.log(edad);
//    console.log(nombre);
//    sumaEdades+=edad;
// };

// console.log(Heroes);
// console.log(sumaEdades);


// //Desestructuracion de objectos
// const persona = {
//     nombre: "Pere",
//     edad : 33
// };

// const {nombre,edad} = persona;
// console.log(persona);
// console.log(nombre,edad);

// const nombre = "Toni";
// const edad = "54";
// const persona = {
//     nombre,
//     edad
// };

// console.log(persona.nombre,persona.edad);

// Ordenar matrius amb objectes
const ciudades = [
    {
        municipio: "Zaragoza",
        provincia: "Zaragoza"
    },
    {
        municipio: "Avila",
        provincia: "Avila"
    },
    {
        municipio: "madrid",
        provincia: "madrid"
    }
];

ciudades.sort((a, b)=>{
    return a.municipio.localeCompare(b.municipio);
});

console.log(ciudades);