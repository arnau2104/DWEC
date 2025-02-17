import { useState } from 'react';
import './App.css';
import AsignaturasLista from './components/AsignaturasLista';
import AsignaturaForm from './components/AsignaturaForm';

//useeffect

function App() {

  const [actualizar, setActualizar] = useState(false);
  const [mostrarForm, setMostrarForm] = useState(false)

  return (
    <div className="App">
      {mostrarForm && <AsignaturaForm setActualizar= {setActualizar}  setMostrarForm = {setMostrarForm}/> }
       <AsignaturasLista actualizar= {actualizar} />
        <button className='btn-añadir-asignatura' onClick={()=> setMostrarForm(true)}>Añadir Asignatura</button>
    </div>
  );
}

export default App;
