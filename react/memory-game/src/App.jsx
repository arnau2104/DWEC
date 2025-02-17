import { useEffect, useState } from 'react'
import './App.css'
import Cartas from './assets/Cartas';
import Tematica from './assets/Tematica';

function App() {

  const [cartas,setCartas] = useState([]);
  const [eleccion1, setEleccion1] = useState(null);
  const [eleccion2, setEleccion2] = useState(null);
  const [deshabilitado, setDeshabilitado] = useState(false);
  const [turnos, setTurnos] = useState(0);
  const tematicas =[];

  const cartasPoker = [
    {"src": "/img/as.jpg", emparejada: false},
    {"src": "/img/q.png", emparejada: false},
    {"src": "/img/k.png", emparejada: false},
    {"src": "/img/j.jpg", emparejada: false},
    {"src": "/img/10.jpg", emparejada: false},
    {"src": "/img/9.jpg", emparejada: false}
  ];

  const deportes = [
    {"src": "/img/baseball.jpg", emparejada: false},
    {"src": "/img/basquetball.jpg", emparejada: false},
    {"src": "/img/futbol.webp", emparejada: false},
    {"src": "/img/golf.jpg", emparejada: false},
    {"src": "/img/tenis.jpg", emparejada: false},
    {"src": "/img/f1.jpg", emparejada: false}
  ];

  


  tematicas.push({tema: "Cartas de poker", contenido: cartasPoker});
  tematicas.push({tema: "Deportes", contenido: deportes})
  
    



  const mezclaCartas = (imagenes)=> {
    const cartasMezcladas = [...imagenes,...imagenes]
    .sort(()=>Math.random() - 0.5)
    .map(carta=> ({...carta, id: Math.floor(Math.random()*10000)}));

    setCartas(cartasMezcladas);
    setEleccion1(null);
    setEleccion2(null);
    setTurnos(0);

  }

  // console.log(cartas);

  const handleEleccion = (carta) => {
    eleccion1 ? setEleccion2(carta) : setEleccion1(carta);
  }

  useEffect(()=> {
    if(eleccion1 && eleccion2) {
      setDeshabilitado(true);

      if(eleccion1.src === eleccion2.src) {
        console.log("Son iguales!")
        setCartas(cartasPrevias => {
          return cartasPrevias.map(carta => {
              if(carta.src === eleccion1.src) {
                return {...carta, emparejada: true};
              } else {
                return carta;
              }
            }
          )
        })
        reseteaTurno();
      } else {
        console.log("No son iguales!");
        setTimeout(()=>reseteaTurno(), 1000);
      }
    }
  },[eleccion1,eleccion2])

  //  useEffect(()=>{
  //    mezclaCartas(deportes);
  //  },[])

  const reseteaTurno = ()=> {
    setEleccion1(null);
    setEleccion2(null);
    setDeshabilitado(false);
    setTurnos(turnosPrevios => turnosPrevios + 1);
  }

 

  return (
    <div className='App'>
      
        <h1>Joc de Memòria</h1>
      

      { <Tematica 
        mezclaCartas={mezclaCartas}
        tematicas = {tematicas}
      /> }
      
      <div className='card-grid'>
        {
        cartas.map(carta => (
        <Cartas 
            carta = {carta} 
            key={carta.id}
            handleEleccion = {handleEleccion}
            girada={carta===eleccion1|| carta.eleccion2 || carta.emparejada}
            deshabilitado = {deshabilitado} 
            />
        ))}
      </div>
        <p>Turnos: {turnos}</p>
    </div>
  )
}

export default App
