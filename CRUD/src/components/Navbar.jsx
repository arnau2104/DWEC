import React from 'react'
import { consultaPersonalitzada } from '../firebase.js';
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route,useNavigate} from 'react-router-dom';
import Inici from '../pages/Inici';
import FormExercici from '../pages/FormExercici';
import Exercicis from '../pages/Exercicis';
import Exercici from '../pages/Exercici';
import LogIn from '../pages/LogIn.jsx';

export default function Navbar({cargado,exercicis,setExercicis,totsExercicis,usuariActiu,setUsuariActiu}) {
  
  // console.log(totsExercicis);
  const navigate = useNavigate();

  // console.log("UsuariActiu",usuariActiu)

  const [mostrarTancarSessio, setMostrarTancarSessio] = useState(false);

  const [mostrarInput,setMostrarInput] = useState(false);
  console.log(exercicis)

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

 const tancarSessio = ()=> {
  setTimeout(()=> {
    setUsuariActiu([]);
  },1000)
  
 }
  
  

  return (
   
       
        <nav>
          <h1>Gestor d'exercicis</h1>
         {cargado && <NavLink  to= "/">Inici</NavLink>}
         {cargado &&  <NavLink to="/exercicis">Exercicis</NavLink> }
        {cargado &&  <NavLink to="/crearExercici">Crear Exercici</NavLink>  }
         <div className='div-cercador'>
         {usuariActiu && usuariActiu.length > 1 &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lupa" onClick={()=> afegirInput()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg> }
       
          {mostrarInput && <input type="text" id="cercador" onInput ={(e)=>cercadorDinamic(e.target.value)}></input>}

          {usuariActiu && usuariActiu.length > 1 && 
            <div className='div-sessio-iniciada'>
              <p onClick={()=>setMostrarTancarSessio(!mostrarTancarSessio)}>Benvingut {usuariActiu[1].username}</p>
              { mostrarTancarSessio && <button onClick={()=>tancarSessio()}>Tancar Sessió</button>}
              </div>
          }
        
        {usuariActiu.length == 0 &&  <NavLink to="/logIn">Log In</NavLink>} 
      </div>
       
     
        </nav>
      
     
  )
}
