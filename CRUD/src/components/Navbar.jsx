import React from 'react'
import { useEffect, useState } from 'react';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Inici from '../pages/Inici';
import CrearExercici from '../pages/CrearExercici';
import Exercicis from '../pages/Exercicis';
import Exercici from '../pages/Exercici';

export default function Navbar({cargado,exercicis}) {

  console.log(exercicis)
 
 
  
  

  return (
   
        <BrowserRouter>
        <nav>
          <h1>Gestor d'exercicis</h1>
         {cargado && <NavLink  to= "/">Inici</NavLink>}
         {cargado && exercicis && <NavLink to="/exercicis">Exercicis</NavLink> }
        {cargado &&  <NavLink to="/crearExercici">Crear Exercici</NavLink> }
        </nav>
        <Routes>
            <Route path='/' element={<Inici exercicis={exercicis}/>}></Route>
          <Route path='/crearExercici' element={<CrearExercici exercicis={exercicis}/>} />
          { cargado && <Route path="/exercicis" element={<Exercicis exercicis={exercicis} />}></Route> }
          <Route path="/exercici/:id" element={<Exercici />}></Route>
        </Routes>
      </BrowserRouter>
     
  )
}
