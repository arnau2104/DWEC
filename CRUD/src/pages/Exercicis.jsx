import { onSnapshot,collection,db } from "../firebase"
import "./Exercici.css";

export default function Exercicis({exercicis}) {
 
  const primeraLletraMajuscula = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <h2>Exercicis:</h2>
      {onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {
           let html="";
          querySnapshot.forEach((doc) => {
                  const exercici = doc.data();

                  html+= `
                  <div class="card">
                      <h2>${exercici.nom}</h2>
                      <p>${primeraLletraMajuscula(exercici.muscolTreballat)}</h2>
                      <ul>Series: ${JSON.parse(exercici.series).map((serie,index)=>
                        `<li>${serie}</li>`
                      )}</ul>
                  </div>    
                  `;              
          })

          document.getElementById("container").innerHTML = html;
      })
    }
    <div id="container"></div>
    </div>
  )
}
