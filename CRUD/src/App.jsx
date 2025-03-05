import './App.css';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { onSnapshot,collection,db,agafarExercicisUsuariConcret } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [exercicis, setExercicis] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [totsExercicis, setTotsExercicis] = useState([]);
  const [usuariActiu, setUsuariActiu] = useState([]);
    
  useEffect(()=>{
    onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {
         let array = [];   
      querySnapshot.forEach((doc) => {
              const exercici = doc.data();
              if(usuariActiu.length > 0) {
               
                if(exercici.autor == usuariActiu[1].username) {
                array.push([doc.id,exercici]);
                }
            }                 
      }    
    )

    array.sort((a,b) => +a[0] - +b[0]);
    setExercicis(array);
    setTotsExercicis(array)
    setCargado(true);
  });

  
},[usuariActiu]);

  return (
   <div className='App'>
        {cargado && <Navbar cargado={cargado} exercicis={exercicis} setExercicis = {setExercicis} totsExercicis = {totsExercicis} usuariActiu={usuariActiu} setUsuariActiu={setUsuariActiu} /> }
   </div>
  )
}

export default App
