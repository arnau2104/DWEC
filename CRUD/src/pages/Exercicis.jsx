import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

import { onSnapshot,collection,db } from "../firebase"
import "./Exercici.css";

export default function Exercicis({exercicis}) {


 
  const primeraLletraMajuscula = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const veureExercici = (id)=> {
    console.log("anar a veure exercici");
    console.log(id)
  }

  return (
    <div>
      <h2>Exercicis:</h2>
        <div id="container">
          {exercicis && exercicis.map(exercici => (
                      <div key={exercici[0]} className="card">
                          <h2>{exercici[1].nom}</h2>
                          <p>{primeraLletraMajuscula(exercici[1].muscolTreballat)}</p>
                          <ul>Series: {JSON.parse(exercici[1].series).map((serie,index)=>
                            <li key={index}>{serie}</li>
                          )}</ul>
                          <button>Editar</button>
                          <NavLink to={`/exercici/${exercici[0]}`}>Anar al exercici detallat</NavLink>    
                      </div>    
                
              ))}
    </div>
    </div>
  )
}
