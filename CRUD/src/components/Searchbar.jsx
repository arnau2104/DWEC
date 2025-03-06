import React from 'react'
import { consultaPersonalitzada } from '../firebase.js';
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route,useNavigate} from 'react-router-dom';

export default function Searchbar({exercicis,setExercicis,usuariActiu,totsExercicis}) {

      const [mostrarInput,setMostrarInput] = useState(false);
      const navigate = useNavigate();
    

     const cercadorDinamic  = async (text) => {
        if(!text == '') {
          const consulta = await consultaPersonalitzada(text,exercicis,usuariActiu[1].username);
          // console.log(consulta)
          setExercicis(consulta);
        }else {
          setExercicis(totsExercicis);
        }
        navigate('/exercicis');
       }

       const afegirInput = ()=> {
        if(mostrarInput){
         setMostrarInput(false)
        }else {
           setMostrarInput(true);
        }
       }
      
        

  return (
    <>    
        
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lupa" onClick={()=> afegirInput()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg> 
        
     
        {mostrarInput && <input type="text" id="cercador" onInput ={(e)=>cercadorDinamic(e.target.value)}></input>}
    </>

    
  )
}
