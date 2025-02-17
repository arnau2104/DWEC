import { useState } from 'react';
import './Carta.css';

export default function Cartas({carta,handleEleccion,girada,deshabiitado}) {
    const [bloqueado, setBloqueado] = useState(false);
  
    const handleClick = ()=> {
       
        
       if(!deshabiitado && !bloqueado) {

           handleEleccion(carta);  
           setBloqueado(true); 
          
        }

        
            setTimeout(()=>setBloqueado(false), 1000);
        
    }

    return (
        
        <div className='card'>
            <div className={girada ? "flipped" : ""}>
                <img className='front' src={carta.src} alt='frontal' />
                <img className='back' src="../public/img/carta.png" onClick={handleClick} alt="cubierta" />
            </div>
        </div>
    
    )
  
}
