import { useState } from 'react';
import './App.css';
import AsignaturasLista from './components/AsignaturasLista';

//useeffect

function App() {

const [muestraAsignaturas, setMuestraAsignaturas] = useState(true)

  return (
    <div className="App">
      <button onClick={()=> setMuestraAsignaturas(false)}>EESCONDE ASIGNATURAS</button>
      {muestraAsignaturas && <AsignaturasLista />}
    </div>
  );
}

export default App;
