import './App.css';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { onSnapshot,collection,db } from './firebase';
import { useEffect } from 'react';

function App() {
  const exercicis = [];
  useEffect(()=>{
    onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {
            
      querySnapshot.forEach((doc) => {
              const exercici = doc.data();
              exercicis.push([doc.id,exercici]);                 
      })});
  
  
},[exercicis]);

  return (
   <div className='App'>
        <Navbar exercicis={exercicis} /> 
   </div>
  )
}

export default App
