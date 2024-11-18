let guardarLS = document.getElementById('guardarLS');
let recuperarLS = document.getElementById('recuperarLS');
let valorLS = document.getElementById('valorLS');
let netejarLS = document.getElementById('netejarLS');
let removeItemLS = document.getElementById('removeItemLS');
let lengthLS = document.getElementById('lengthLS');


let diHola = "Hola";
let diAdios = "Adios";
let numeros = [1, 3, 5, 7];
let factura = {
    numero: 1,
    descripcio: 'Taula nova del profe',
    import: 2200.50,
    metodPagament : {
        trarjeta : {titular : "Joan"},
        bizum : 652149635
    }
};

guardarLS.addEventListener('click', function(){
    sessionStorage.setItem('diHola', diHola);
    //  sessionStorage.setItem('diAdios', diAdios);
    // sessionStorage.setItem('numeros', JSON.stringify(numeros));
    sessionStorage.setItem('factura', JSON.stringify(factura));
});

recuperarLS.addEventListener('click', function(){
//    let lsDiHola =  sessionStorage.getItem('diHola');
//    let lsDiAdios = sessionStorage.getItem('diAdios');
//    if(lsDiHola){
//     valorLS.innerText= lsDiHola + lsDiAdios;
    
//    };
//    if(lsDiAdios){
//     valorLS.innerText= lsDiHola + lsDiAdios;
    
//    };

let lsNumeros = sessionStorage.getItem('numeros');
lsNumeros = JSON.parse(lsNumeros);
let lsFactura = JSON.parse(sessionStorage.getItem('factura'));
console.log(lsNumeros);
console.log(typeof lsNumeros);
console.log(lsFactura);
console.log(typeof lsFactura);
valorLS.innerText =  lsFactura;
});

netejarLS.addEventListener('click', function(){
    sessionStorage.clear();
    valorLS.innerText='';
});

removeItemLS.addEventListener('click',function(){
    sessionStorage.removeItem('factura');
});

lengthLS.addEventListener('click', function(){
    console.log(sessionStorage.length);
})

