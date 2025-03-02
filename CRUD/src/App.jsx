import './App.css';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { onSnapshot,collection,db } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [exercicis, setExercicis] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [totsExercicis, setTotsExercicis] = useState([]);
 
  useEffect(()=>{
    onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {
         let array = [];   
      querySnapshot.forEach((doc) => {
              const exercici = doc.data();
              array.push([doc.id,exercici]);                 
      }    
    )

    array.sort((a,b) => +a[0] - +b[0]);
    setExercicis(array);
    setTotsExercicis(array)
    setCargado(true);
  });
  
  
},[]);

  return (
   <div className='App'>
        {cargado && <Navbar cargado={cargado} exercicis={exercicis} setExercicis = {setExercicis} totsExercicis = {totsExercicis}  /> }
   </div>
  )
}

export default App
