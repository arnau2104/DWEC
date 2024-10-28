//Exercici Bajo el mar

let cadena =  "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~><>";
let contador = 0;
let index = 0;
 function comptarPeixos(cadena) {
    let comprovacio
    if(index == 0) {
   comprovacio = cadena.indexOf("><>", index);
  
    }else {
        comprovacio = cadena.indexOf("><>", index + 1);
       
    }
    
    if(comprovacio == -1 || index > cadena.length) {
       return 0;
    }else {
        contador = contador + 1;
        index = comprovacio;
        comptarPeixos(cadena);
    }
    return contador;
 }

 console.log(comptarPeixos(cadena));
