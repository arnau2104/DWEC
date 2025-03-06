import React, { useState,useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import { agafarExerciciPerId } from '../firebase.js'
import './Exercici.css'

export default function Exercici() {

  const primeraLletraMajuscula = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [exercici, setExercici] = useState(null);

  const [cargat,setCargat] = useState(true);

  const navigate = useNavigate();

 
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
      {/* <p>Exercici {parametres.id} </p> */}

    {cargat && exercici && 
     <div key={exercici[0]} className="exercici">
      <h1>{exercici[1].nom}</h1>
      <img className='imatge-exercici' src={exercici[1].imatge} />
      <div className='card'>
        <h2>{primeraLletraMajuscula(exercici[1].muscolTreballat)}</h2>
        <ul>Series: {JSON.parse(exercici[1].series).map((serie,index)=>
          <li key={index}>{`${serie[0]} x ${serie[1]}`}</li>
        )}</ul>
        { exercici[1].descripcio && <h2>Descripció:</h2> }
        { exercici[1].descripcio && <p>{exercici[1].descripcio}</p> }
      </div>
    </div>    }

    {!cargat && <p>Exercici no trobat, redirigint a pagina principal...</p>}
    {!cargat &&   setTimeout(()=> {
      navigate('/');
    },1000)
    }

    </div>
  )
}
