// Exercici Kaprekar

let contador = 0;
let n = [3,4,8,1];
let pasos = new Array();

function kaprekar(n) {
    let comprovacio ="";
    while(!comprovacio == "6174" || contador < 7) {
        let majorMenor="";
    for(let i = 0; i < n.length;i++) {
        majorMenor = majorMenor + ordenarMajorMenor(n)[i];
    };
    //pasar de string a nombre
    majorMenor = Number(majorMenor);

    let menorMajor = "";
    for(let i = 0; i < n.length;i++) {
        
        menorMajor = menorMajor + ordenarMenorMajor(n)[i];
    };

        //pasar de string a nombre
        menorMajor = Number(menorMajor) ;

    resultat = Number(majorMenor) - Number(menorMajor) + "";

    for(let i = 0; i < resultat.length;i++) {
        n[i] = resultat[i];
        comprovacio = comprovacio + resultat[i];
    } ;

    
    contador = contador + 1;
    console.log("Pas " + contador);
    pasos.push("Pas " + contador + " " + resultat);
};
   
console.log(resultat);
   

 };

function ordenarMajorMenor (n) {
   for(let i = 0; i < n.length; i++) {
        for(let j = i + 1; j < n.length; j++) {
            if(n[i] < n[j]) {
                let num = n[i];
                n[i] = n[j];
                n[j] = num;
            };
        };
       
   };

return n;

};

function ordenarMenorMajor (n) {
    for(let i = 0; i < n.length; i++) {
         for(let j = i + 1; j < n.length; j++) {
             if(n[i] > n[j]) {
                 let num = n[i];
                 n[i] = n[j];
                 n[j] = num;
             };
         };
        
    };
 
 return n;
 
 };

console.log(ordenarMajorMenor(n));
console.log(ordenarMenorMajor(n));
kaprekar(n);
console.log(pasos);

