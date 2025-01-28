import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./AsignaturasLista.css";

export default function AsignaturasLista() {
  
  const [url, setUrl] = useState('http://localhost:3000/asignatures');
  const [datosJSON, setDatosJSON] = useState(null);
  const [nombre, setNombre] = useState('');
  const [horas_totales, setHoras_Totales] = useState('');
  const [idioma, setIdioma] = useState('');
      
  const {datos: asignaturas, cargando, error} = useFetch(url,datosJSON);

  const resetForm = ()=> {
    setNombre('');
    setHoras_Totales('');
    setIdioma('');
}

  let datosFormulario = {
    "nombre" : nombre ,
    "horas totales" : horas_totales ,
    "idioma" : idioma 
  }

  let handleSubmit = (e)=> {
      e.preventDefault();
      setDatosJSON({
      method: "POST",
      body: JSON.stringify(datosFormulario),
      headers: {

          "Content-type": "application/json"
          
          }
    })

    resetForm();
  }

  
    // method: "POST",
    // body: JSON.stringify(asignatura),
    // headers: {

    //     "Content-type": "application/json"
        
    //     }

  //Aray de Dependencias
    

    

    return (
    <div className="asignatura-lista">

      <form method="post" className="asignatura-nueva-form" name="asignatura_nueva_form">
        <label>
          <span>Nombre de la Asignatura</span>
          <input type="text" name="nombre" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
      
        </label>

        <label>
         <span> Horas Totales </span>
          <input type="text" name="horas_totales" onChange={(e)=>setHoras_Totales(e.target.value)} value={horas_totales}/>
        </label>

        <label>
         <span> Idioma</span>
          <input type="text" name="idioma" onChange={(e)=>setIdioma(e.target.value)} value={idioma}/>
        </label>

        <button type="submit" onClick={handleSubmit}>Crear</button>

      </form>

      <h2>Listado de Asignaturas</h2>
      {cargando && <div>Cargando Asignaturas...</div>}
      <div>{error}</div>
        <ul>
            {asignaturas && asignaturas.map(asignatura =>(
                <li key={asignatura.id}>
                    <h3>{asignatura.nombre}</h3>
                    <p>Horas Totales: {asignatura["horas totales"]}</p>
                </li>
            ))}
        </ul>
        <div className="filtros">
          <button onClick={()=>setUrl('http://localhost:3000/asignatures?idioma=Inglés')}>Inglés</button>
          <button onClick={()=>setUrl('http://localhost:3000/asignatures')}>Todos</button>
        </div>
        
    </div>
  )
}
    