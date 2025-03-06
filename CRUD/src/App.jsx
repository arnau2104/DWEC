import './App.css';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { onSnapshot,collection,db,agafarExercicisUsuariConcret } from './firebase';
import { useEffect, useState } from 'react';
import Inici from './pages/Inici';
import FormExercici from './pages/FormExercici';
import Exercicis from './pages/Exercicis';
import Exercici from './pages/Exercici';
import LogIn from './pages/LogIn.jsx';

function App() {
  const [exercicis, setExercicis] = useState([]);
  const [cargado, setCargado] = useState(false);
  const [totsExercicis, setTotsExercicis] = useState([]);
  const [usuariActiu, setUsuariActiu] = useState([]);
  const [contadorIdExercicis, setContadorIdExercicis] = useState([]);
    
  useEffect(()=>{
    onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {
         let array = [];   
      querySnapshot.forEach((doc) => {
              const exercici = doc.data();
              if(usuariActiu && usuariActiu.length > 1) {
               
                if(usuariActiu.length > 1 && (exercici.autor == usuariActiu[1].username)) {
                array.push([doc.id,exercici]);
                }
            }                 
      }    
    )

    array.sort((a,b) => +a[0] - +b[0]);
    setExercicis(array);
    setTotsExercicis(array)
    setCargado(true);

    console.log(usuariActiu)

  });
},[usuariActiu]);





  useEffect(()=> {
    let array = [];  
    onSnapshot(collection(db,"exercicis"),  (querySnapshot)=> {    
   querySnapshot.forEach((doc) => {    
           array.push(+doc.id) 
             
         }) 
    array.sort((a,b) => +a - +b);
   }                   
 )
 setContadorIdExercicis(array);  

},[]);


console.log("Primer vegada usuari actiu",usuariActiu)

  return (
   <div className='App'>
    <BrowserRouter>
        {cargado && <Navbar cargado={cargado} exercicis={exercicis} setExercicis = {setExercicis} totsExercicis = {totsExercicis} usuariActiu={usuariActiu} setUsuariActiu={setUsuariActiu} /> }
        <Routes>
            <Route path='/' element={<Inici exercicis={exercicis}/>}></Route>
          <Route path='/crearExercici' element={<FormExercici exercicis={exercicis} usuariActiu={usuariActiu} setContadorIdExercicis={setContadorIdExercicis} contadorIdExercicis={contadorIdExercicis}/>} />
          { cargado && usuariActiu && <Route path="/exercicis" element={<Exercicis exercicis={exercicis} usuariActiu={usuariActiu} />}></Route> }
          <Route path="/exercici/:id" element={<Exercici />}></Route>
          <Route path='/editarExercici/:id' element={<FormExercici exercicis={exercicis} usuariActiu={usuariActiu} setContadorIdExercicis={setContadorIdExercicis} contadorIdExercicis={contadorIdExercicis}/>}></Route>
          <Route path='/logIn' element={<LogIn  usuariActiu={usuariActiu} setUsuariActiu={setUsuariActiu}/>}></Route>
        </Routes>
        </BrowserRouter>
   </div>
  )
}

export default App
