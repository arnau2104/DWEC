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
                          {/* <ul>Series: {JSON.parse(exercici[1].series).map((serie,index)=>
                            <li key={index}>{`${serie[0]} x ${serie[1]}`}</li>
                          )}</ul> */}
                          <NavLink to={`/editarExercici/${exercici[0]}`}><button className="editar">Editar</button></NavLink>
                          <NavLink to={`/exercici/${exercici[0]}`}>
                               
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="veure-exercici">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                
                          </NavLink>    
                      </div>    
                
              ))}
    </div>
    </div>
  )
}
