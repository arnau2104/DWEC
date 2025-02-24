import React from 'react'
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Inici from '../pages/Inici';
import FormExercici from '../pages/FormExercici';
import Exercicis from '../pages/Exercicis';
import Exercici from '../pages/Exercici';

export default function Navbar({cargado,exercicis}) {

  console.log(exercicis)
  
 
 
 const afegirInput = ()=> {
  if(document.getElementById("cercador")) {
    document.getElementById("cercador").remove();
  }else {
    document.querySelector('.div-cercador').insertAdjacentHTML('afterend', `<input type="text" id="cercador">`);
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
      </div>
     
        </nav>
        <Routes>
            <Route path='/' element={<Inici exercicis={exercicis}/>}></Route>
          <Route path='/crearExercici' element={<FormExercici exercicis={exercicis}/>} />
          { cargado && <Route path="/exercicis" element={<Exercicis exercicis={exercicis}/>}></Route> }
          <Route path="/exercici/:id" element={<Exercici />}></Route>
          <Route path='/editarExercici/:id' element={<FormExercici  />}></Route>
        </Routes>
      </BrowserRouter>
     
  )
}
