// window.addEventListener('click', function(){
//     console.log("Has echo clic");
// });

// let boton = document.querySelector("button");

// boton.addEventListener('click', clic);

// function clic(){
//     boton.console.log("Hiciste clic");
//     boton.removeEventListener('click',clic);
// }

// let boton = document.querySelector("button");
// boton.addEventListener('mousedown', function(e){
//     // console.log(e);
//     // console.log(e.button);
//     if(e.button == 0){
//         console.log("Boton izquierdo");
//     }else if (e.button == 1) {
//         console.log("el chicho de enmedio");
//     }else if (e.button == 2) {
//         console.log("Boton derecho");
//     }else {
//         console.log("Boton desconocido");
//     }
// })

// let boton = document.querySelector("button");
// let parrafo = document.getElementsByTagName("p")[0];

// parrafo.addEventListener('mousedown',()=>{
//     console.log("Controlador de evento para el párrafo");
// } );

// boton.addEventListener('mousedown', (e)=>{
//     console.log("Controlador de evento para el boton");
//     if (e.button == 2) {
//         e.stopPropagation();
//     }
// })

// let boton = document.querySelector("button");
// let parrafo = document.getElementsByTagName("p")[0];

// document.addEventListener('click', (e)=>{
//     // console.log(e.target);
//     if(e.target.nodeName.toLowerCase() == 'button') {
//         console.log("clic en" , e.target.textContent);
//     }
// });

// let enlace = document.querySelector('a');

// enlace.addEventListener('click', (e)=>{
//     console.log("Correcto");
//     e.preventDefault();
// });

// window.addEventListener('keydown', (e)=>{
//     if(e.key == 'v'){
//         document.body.style.background = "violet";
//     }
// });

// window.addEventListener('keyup', (e)=>{
//     if(e.key == 'v'){
//         document.body.style.background = 'white';
//     }
// });

// window.addEventListener('keydown', (e)=>{
//     if(e.ctrlKey && e.key == " ") {
//         document.body.style.background = "violet";
//     }
// });

// window.addEventListener('mousemove', (e)=>{
//     let punto = document.createElement("div");
//     punto.className = "dot";
//     punto.style.left = (e.pageX - 4) + "px";
//     punto.style.top = (e.pageY - 4) + "px";
//     document.body.appendChild(punto);
// })

window.addEventListener('click', (e)=>{

 
    let punto = document.createElement("div");
    punto.className = "dot";
    punto.style.left = (e.pageX - 4) + "px";
    punto.style.top = (e.pageY - 4) + "px";

    document.body.appendChild(punto);
    if(parseInt(punto.style.top) >=100   ){
         document.body.querySelectorAll('dot').remove();
         
        
    };
})