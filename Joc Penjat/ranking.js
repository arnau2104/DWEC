const llistaParaules = ['bolla','guerra', 'futbol', 'cotxe'];
let rankingPuntuacions = new Array(0);
let tbody = document.querySelector("tbody");

let divRankinkResultats = document.querySelector(".rankingResultats");


function localStorageToArray() {
    
    rankingPuntuacions = [];

    let LSRanking = JSON.parse(localStorage.getItem("rankingPuntuacions"));
   
    console.log(LSRanking);

    if( LSRanking != null && LSRanking.length != 0 ) {
        LSRanking.forEach((ranking)=>{
            let rankingConvertion = {
                nomUsuari: ranking.nomUsuari,
                puntuacio: ranking.puntuacio,
                paraula: ranking.paraula,
                segons: ranking.segons,
                numErrors: ranking.numErrors
            };
           
            rankingPuntuacions.push(rankingConvertion);
            
        });

        rankingPuntuacions.forEach((posicio)=>{
            console.log(posicio);
        })

       

        //ordenam de mes puntuacio a menor
        rankingPuntuacions.sort(function (a,b) {
            return b["puntuacio"] - a["puntuacio"] ;
        });

    }else {
        console.log("local storatge buit");
    }
}


function pintarRankingPuntuacions() {
    let rankinkgGlobal = document.querySelector(".contenidorPuntuacions");
    if(rankingPuntuacions.length != 0) {
       
            let tbody = rankinkgGlobal.querySelector("tbody");

            
            for(let i = 0; i < rankingPuntuacions.length; i++) {
                let posicio = i + 1;
                let nomUsuariRanking =  rankingPuntuacions[i]["nomUsuari"];
                let puntuacioRanking = rankingPuntuacions[i]["puntuacio"];
                let paraulaRanking = rankingPuntuacions[i]["paraula"];

                 
                tbody.innerHTML+= 
                    "<tr> <td>"+ posicio +"</td>  <td> <div class='fotoPerfil'>" + nomUsuariRanking.substring(0, 1)
                    + "</div> </td> <td>"+ nomUsuariRanking +"</td> <td>"+ puntuacioRanking + "</td></tr>";
                

                
            };

    }else {
        console.log("array buit");
    }
}

function pintarRankingPuntuacionsPerParaula() {

    let numParaules = llistaParaules.length; 
      
        if (rankingPuntuacions.length !== 0) {
          for (let i = 0; i < numParaules; i++) {
            // Crear la tabla con una clase segura (sin espacios)
          let paraula = llistaParaules[i];
            let createTable = `
              <table class="contenidorPuntuacions ${paraula}">
                <thead>
                  <tr class="capçalera">
                    <th>Posicio</th>
                    <th>Paraula</th>
                    <th>Logo</th>
                    <th>Nom d'usuari</th>
                    <th>Puntuacio</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>`;
      
            // Inserta la table al contenidor
            divRankinkResultats.innerHTML += createTable;
      
            // Agafam la tablw que acabam de crear
            let table = divRankinkResultats.querySelector(`.contenidorPuntuacions.${paraula}`);
            let tbody = table.querySelector("tbody");
      
           
            let posicio = 1;
            for (let j = 0; j < rankingPuntuacions.length; j++) {
              let nomUsuariRanking = rankingPuntuacions[j]["nomUsuari"];
              let puntuacioRanking = rankingPuntuacions[j]["puntuacio"];
              let paraulaRanking = rankingPuntuacions[j]["paraula"];
      
              //  Afegim una fila si la paraula coincideix amb la paraula del ranking
              if (llistaParaules[i] === paraulaRanking) {
                  tbody.innerHTML+= 
                  "<tr> <td>"+ posicio +"</td> <td>" + paraulaRanking + "</td>  <td> <div class='fotoPerfil'>" + nomUsuariRanking.substring(0, 1)
                  + "</div> </td> <td>"+ nomUsuariRanking +"</td> <td>"+ puntuacioRanking + "</td></tr>";
                posicio++;
              }
            }
          }
        } else {
          console.log("Array buit");
        }
      }
      
    
        
    






localStorageToArray();
pintarRankingPuntuacions();
pintarRankingPuntuacionsPerParaula();