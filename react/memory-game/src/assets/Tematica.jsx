import './Tematica.css';

export default function Cartas({mezclaCartas,tematicas}) {
  
  const eventoMezclaCartas = (cartas)=> {
    mezclaCartas(JSON.parse(cartas));
  }
    
    return (
        <div>
           
            <label htmlFor="tematicas">Selecciona una tematica</label>
            { <select name="tematicas" id="tematicas" onChange={(e)=> eventoMezclaCartas(e.target.value)}>
                <option value="[]">Selecciona una opcion...</option>
                {tematicas.map((tematica,index)=> {
                    return <option key={index} value={JSON.stringify(tematica.contenido)}>{tematica.tema}</option>;
                })}
            </select> } 
        </div>
       
           
    )
  
}
