import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { onSnapshot,collection,db,borrarExercicis } from "../firebase.js"
import "./Exercicis.css";

export default function Exercicis({exercicis,usuariActiu}) {
  console.log("UsuariActiu",usuariActiu)


  useEffect(()=>{
    console.log("UsuariActiu",usuariActiu)
  },[usuariActiu])

  const [idBorrar, setIdBorrar] = useState(false);

  const primeraLletraMajuscula = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const borrarExercici = ()=> {
  if(idBorrar) {
    setTimeout(()=>borrarExercicis(idBorrar),1000);
    setIdBorrar(null);
  }
}


  const veureExercici = (id)=> {
    console.log("anar a veure exercici");
    console.log(id)
  }

  return (
    <div>
      <h2>Exercicis:</h2>
        <div id="container">
          {usuariActiu && usuariActiu.length == 0  && <p>Inicia sessió per poder veure els teus exercicis</p>}
          {usuariActiu.length > 0 && exercicis &&  exercicis.length == 0 && <p>No tens exercicis creats encara...  </p>}
          {usuariActiu.length > 0 && exercicis &&  exercicis.length == 0 && 
          <NavLink to={'/crearExercici'} className='navLink'>
            <div className="div-link-crear-noticia">
              
              <p>Crear Exercici</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="crear">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />     
                </svg>
            </div>
            </NavLink>
            }
          {exercicis && exercicis.length > 0 && exercicis.map(exercici => (
                      <div key={exercici[0]} className="card">
                          <div>
                              <h2>{exercici[1].nom}</h2>
                              <p>{primeraLletraMajuscula(exercici[1].muscolTreballat)}</p>
                              {/* <ul>Series: {JSON.parse(exercici[1].series).map((serie,index)=>
                                <li key={index}>{`${serie[0]} x ${serie[1]}`}</li>
                              )}</ul> */}
                              </div>
                          <div className="div-svg">
                              <NavLink to={`/exercici/${exercici[0]}`}>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="veure-exercici">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>      
                              </NavLink>
                              <div className="div-edit-delete"> 
                                <NavLink to={`/editarExercici/${exercici[0]}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="editar">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                  </svg>
                                </NavLink>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="borrar" onClick={()=>setIdBorrar(exercici[0] + '')}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </div> 
                          </div>
                            
                      </div>       
              ))}

              { idBorrar && 
                  <div className="confirmacio-borrar-exercici">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tancar-finestra" onClick={()=>setIdBorrar(null)}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <p>Estas segur que vols borrar l'exercici?
                    Despres no podras recuperarlo</p>
                    
                    <button className="btn-confirmacio-borrar" onClick={()=> borrarExercici()}>Borrar</button>
                  </div>
                }

             
                
              
    </div>
    </div>
  )
}
