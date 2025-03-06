import React from 'react'
import { consultaPersonalitzada } from '../firebase.js';
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route,useNavigate} from 'react-router-dom';
import Inici from '../pages/Inici';
import FormExercici from '../pages/FormExercici';
import Exercicis from '../pages/Exercicis';
import Exercici from '../pages/Exercici';
import LogIn from '../pages/LogIn.jsx';
import Searchbar from './Searchbar.jsx';

export default function Navbar({cargado,exercicis,setExercicis,totsExercicis,usuariActiu,setUsuariActiu}) {
  
  // console.log(totsExercicis);


  // console.log("UsuariActiu",usuariActiu)

  const [mostrarTancarSessio, setMostrarTancarSessio] = useState(false);


  console.log(exercicis)



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
          <Searchbar exercicis={exercicis} setExercicis={setExercicis} usuariActiu={usuariActiu} totsExercicis={totsExercicis}/>
         }

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
