// let enlace = document.body.getElementsByTagName("a")[1];
// let miDiv = document.getElementById("miDiv");
// let parrafos = document.getElementsByTagName("p");
// let divP = document.getElementById("divP");
// let creaP = document.getElementById("creaP");
// let alonso = document.getElementsByTagName("img")[0];

// // divP.insertBefore(parrafos[2],parrafos[1]);

// creaP.addEventListener('click', function(){
// //    if(alonso.alt){
// //     let texto = document.createTextNode(alonso.alt);
// //     let elemento = document.createElement("div");
// //     let miEnlace = document.createElement("a");
// //     alonso.parentElement.appendChild(elemento)
// //      alonso.parentElement.replaceChild(texto, alonso);
// //    }

//    let a = document.createElement('a');
//    divP.appendChild(a);
// });

// // console.log(alonso.parentElement);

// // console.log(enlace);
// // console.log(miDiv);

// let miP = document.getElementById("miP");
// console.log(miP.style.color);
// miP.style.color = "blueviolet";

function contador(s){
    return document.querySelectorAll(s).length;
}

console.log(contador("p"));
console.log(contador(".uno"));
console.log(contador("p .uno"));
console.log(contador("p > .uno"));
console.log(contador("span"));
console.log(contador("span.dos"));

function muestraParagrafos(){
    return document.querySelector("p");
}

console.log(muestraParagrafos());
