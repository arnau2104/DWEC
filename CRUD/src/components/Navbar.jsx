import React from 'react'
import { consultaPersonalitzada } from '../firebase.js';
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Inici from '../pages/Inici';
import FormExercici from '../pages/FormExercici';
import Exercicis from '../pages/Exercicis';
import Exercici from '../pages/Exercici';
import LogIn from '../pages/LogIn.jsx';

export default function Navbar({cargado,exercicis,setExercicis,totsExercicis}) {
  // console.log(totsExercicis);

  const [usuariActiu, setUsuariActiu] = useState([]);

  const [mostrarInput,setMostrarInput] = useState(false);
  console.log(exercicis)

  const cercadorDinamic  = async (text) => {
    if(!text == '') {
      const consulta = await consultaPersonalitzada(text,exercicis);
      // console.log(consulta)
      setExercicis(consulta);
    }else {
      setExercicis(totsExercicis);
    }
   }

 const afegirInput = ()=> {
  if(mostrarInput){
   setMostrarInput(false)
  }else {
     setMostrarInput(true);
  }
 }
  
  

  return (
   
        <BrowserRouter>
        <nav>
          <h1>Gestor d'exercicis</h1>
         {cargado && <NavLink  to= "/">Inici</NavLink>}
         {cargado && exercicis && <NavLink to="/exercicis">Exercicis</NavLink> }
        {cargado &&  <NavLink to="/crearExercici">Crear Exercici</NavLink>  }
        <div className='div-cercador'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lupa" onClick={()=> afegirInput()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          {mostrarInput && <input type="text" id="cercador" onInput ={(e)=>cercadorDinamic(e.target.value)}></input>}
          <NavLink to="/logIn">{usuariActiu ? 'Log Out' : 'Log In'}</NavLink> 
      </div>
     
        </nav>
        <Routes>
            <Route path='/' element={<Inici exercicis={exercicis}/>}></Route>
          <Route path='/crearExercici' element={<FormExercici exercicis={exercicis} />} />
          { cargado && <Route path="/exercicis" element={<Exercicis exercicis={exercicis}/>}></Route> }
          <Route path="/exercici/:id" element={<Exercici />}></Route>
          <Route path='/editarExercici/:id' element={<FormExercici exercicis={exercicis}/>}></Route>
          <Route path='/logIn' element={<LogIn  usuariActiu={usuariActiu} setUsuariActiu={setUsuariActiu}/>}></Route>
        </Routes>
      </BrowserRouter>
     
  )
}
