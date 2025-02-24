import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { agafarExerciciPerId } from '../firebase.js'

export default function Exercici() {

  const primeraLletraMajuscula = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [exercici, setExercici] = useState(null);

  const [cargat,setCargat] = useState(false);

 
  const parametres = useParams();

  const agafarExercici = async ()=> {
   
    try {
      const exerciciFireBase = await agafarExerciciPerId(parametres.id);
      setExercici(exerciciFireBase);
      setCargat(true);       
    } catch (error) {
      console.error("Error:", error.message);
      setCargat(false);
    }
  }
  useEffect(()=> {
  
    agafarExercici();

  }, [])


 
  
  return (
    <div>
      <p>Exercici {parametres.id} </p>

    {cargat && exercici  && 
     <div key={exercici[0]} className="card">
      <h2>{exercici[1].nom}</h2>
      <p>{primeraLletraMajuscula(exercici[1].muscolTreballat)}</p>
      <ul>Series: {JSON.parse(exercici[1].series).map((serie,index)=>
        <li key={index}>{`${serie[0]} x ${serie[1]}`}</li>
      )}</ul>
    </div>    }

    </div>
  )
}
