import './App.css';
import React,{ useState } from 'react';
import Titulo from './components/Titulo';
import Modal from './components/Modal';
import EventosLista from './components/EventosLista';
import EventoNuevoForm from './components/EventoNuevoForm';

// HOOK
// useState
//PROPS

//EventosLista.js
function App() {
  const [muestraModal, setMuestraModal] = useState(false);
  const [mostrarEventos, setMostrarEventos] = useState(true);

  //const [nombre, setNombre] = useState("Arnau");

  const [eventos, setEventos] = useState([]);

  const addEvento = (evento)=> {
      setEventos((eventosPrevios)=> {
        return [...eventosPrevios, evento];
      })

      setMuestraModal(false);
  }

  const handleClick = (id)=> {

    setEventos((eventosPrevios)=> {
      return eventosPrevios.filter((evento) => {
        return id !== evento.id
      })
    })

  }

  const handleAbrir = () => {
    setMuestraModal(true);
  }

  const subTItulo = "Todos los eventos para Desarrollo de Aplicaciones Web";

  return (
    <div className="App">
      <Titulo titulo="Eventos de DAW" subTitulo={subTItulo} />

      { mostrarEventos && (
          <div>
            <button onClick = {()=> setMostrarEventos(false)} > Ocultar Eventos</button>
          </div>
      )}
       { !mostrarEventos && (
        <div>
          <button onClick = {()=> setMostrarEventos(true)} > Mostrar Eventos</button>
        </div>
       )}
      {mostrarEventos && <EventosLista eventos={eventos} handleClick={handleClick} /> }

      <br/>
       <button id="mostrarModal" onClick={handleAbrir}>Crear Nuevo Evento</button>

       { muestraModal && <Modal destino = {document.body} esExterno={true}>
       <EventoNuevoForm  addEvento = {addEvento}/>
       </Modal>}
    </div>
  );
}

export default App;
