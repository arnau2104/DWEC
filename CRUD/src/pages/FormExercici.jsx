import React from 'react'
import './FormExercici.css';
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { guardarExerciciAmbId,agafarExerciciPerId,onSnapshot,collection,db } from '../firebase.js';
export default function FormExercici({exercicis}) {

    const [nom,setNom] = useState('');
    const [muscolTreballat,setMuscolTreballat] = useState('pit');
    const [series,setSeries] = useState([])
    const [exercici, setExercici] = useState(null);
    const parametres = useParams();
    const paramId = parametres.id;
    const navigate = useNavigate();
    

    
    const agafarExercici = async ()=> {
       
        try {
          const exerciciFireBase = await agafarExerciciPerId(parametres.id);
          if(exerciciFireBase){
            setExercici(exerciciFireBase);
            }
        
        } catch (error) {
          console.error("Error:", error.message);
        }
      }

      const afegirSerie = (e)=> {
        e.preventDefault();
        document.querySelector(".div-series").insertAdjacentHTML('beforeend',` <div class='serie'>
                    <input class="pes" type="text" placeholder='Pes' /> <span> X </span> <input class="repeticions"  type="text" placeholder='Repeticions'/>
                </div>`)
    }
    

 
        useEffect(()=> {
            if(paramId) {
            agafarExercici();
            }
        }, [paramId])

        useEffect(() => {
        if(exercici && exercici[1]) {
             console.log(exercici)

            
               setNom(exercici[1].nom);
                setMuscolTreballat(exercici[1].muscolTreballat || 'pit');
                JSON.parse(exercici[1].series).forEach((serie,index)=> {
                    // serie = JSON.parse(serie);
                    if(index == 0) {
                        document.querySelector('.pes').value = serie[0];
                        document.querySelector('.repeticions').value = serie[1];
                    }else { 
                        document.querySelector('.mes-series').click();
                        document.querySelectorAll('.pes')[index].value = serie[0];
                        document.querySelectorAll('.repeticions')[index].value = serie[1];
                    }
                
                
            })
        }
    },[exercici])

    const crearExercici = (e)=> {
        e.preventDefault();
        if(exercicis || paramId) {
            let lastId  = '';
            if(!paramId && exercicis) {
             lastId =  exercicis.length > 0  ? exercicis[exercicis.length - 1][0] : 0;
            }
        
            const divSeries = document.querySelectorAll(".serie");
            // let series = [];

            divSeries.forEach((serie,index) => {
                let pes = serie.querySelector(".pes").value;
                let repeticions = serie.querySelector(".repeticions").value;
            setSeries(series.push([pes, repeticions]));
            })

            console.log(nom)
            console.log(muscolTreballat)
            //  console.log(+lastId + 1)



                guardarExerciciAmbId(paramId ? `${paramId}` : `${+lastId + 1}`,nom,muscolTreballat,JSON.stringify(series),'arnau');

            //reiniciam el formulario
            if(paramId) {
                navigate('/')
            }else {
                setNom('');
                setMuscolTreballat('pit');
                setSeries([]);
            }
        } else {
            console.log('exercicis no cargats')
        }
    }
    

   

  return (

   <div>
      {!exercicis && !paramId && <p>Carregant...</p>}
      {(exercicis || paramId) &&
        <form className='exercici-form' name='exercici_form' onSubmit={crearExercici}>
            <label >
                <span>Nom de l'exercici</span>
                <input type="text" name='nom' value={nom} onChange={(e)=>setNom(e.target.value)} required/>
            </label>
            <label >
                <span>Muscol Afectat</span>
                <select name='muscolAfectat' value={muscolTreballat} onChange={(e)=> setMuscolTreballat(e.target.value)} required>
                    <option value="pit">Pit</option>
                    <option value="esquena">Esquena</option>
                    <option value="ombro">Ombro</option>
                    <option value="biceps">Biceps</option>
                    <option value="triceps">Triceps</option>
                    <option value="quadriceps">Quadriceps</option>
                    <option value="bessons">Bessons</option>
                    <option value="femoral">Femoral</option>
                    <option value="abdominals">Abdominals</option>
                </select>
            </label>
            <label>
            <span>Series</span>
                <div className='contenedor-series'>
                    <div className='div-series'>
                        <div className='serie'>
                            <input type="text" placeholder='Pes' className='pes' /> <span> X </span> <input className='repeticions'  type="text" placeholder='Repeticions'/>
                        </div>
                    </div>
                    <button type='button' className='mes-series' onClick={afegirSerie}> Afegir Serie </button>
                </div>
            </label>
            <button>{paramId ? 'Modificar' : 'Crear'}</button>
            
        </form>
        }

   </div>
     
  )
}
