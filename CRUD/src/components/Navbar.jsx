import React from 'react'
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Inici from '../pages/Inici';
import CrearExercici from '../pages/CrearExercici';
import Exercicis from '../pages/Exercicis';

export default function Navbar({exercicis}) {
  return (
   
        <BrowserRouter>
        <nav>
          <h1>Gestor d'exercicis</h1>
          <NavLink  to= "/">Inici</NavLink>
          <NavLink to="/exercicis">Exercicis</NavLink>
         <NavLink to="/crearExercici">Crear Exercici</NavLink>
        </nav>
        <Routes>
            <Route path='/' element={<Inici/>}></Route>
          <Route path='/crearExercici' element={<CrearExercici exercicis={exercicis}/>} />
          <Route path="/exercicis" element={<Exercicis exercicis={exercicis} />}></Route>
        </Routes>
      </BrowserRouter>
     
  )
}
