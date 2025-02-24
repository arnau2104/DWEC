import React from 'react'
import './FormExercici.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { guardarExerciciAmbId,agafarExerciciPerId } from '../firebase.js';
export default function CrearExercici({exercicis}) {

    const [exercici, setExercici] = useState(null);
    const parametres = useParams();
    const paramId = parametres.id;
    const agafarExercici = async ()=> {
       
        try {
          const exerciciFireBase = await agafarExerciciPerId(parametres.id);
          setExercici(exerciciFireBase);
        
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
    

    if(paramId) {
        useEffect(()=> {
      
            agafarExercici();
        
        }, [])

        if(exercici) {
            // console.log(exercici)

            
                document.exercici_form.nom.value = exercici[1].nom;
                document.exercici_form.muscolAfectat.value = exercici[1].muscolTreballat;
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
    }

    const crearExercici = (e)=> {
        let lastId = exercicis.length > 0  ? exercicis[exercicis.length - 1][0] : 0;
        e.preventDefault();
        const nom = document.exercici_form.nom.value;
        const muscolAfectat = document.exercici_form.muscolAfectat.value;
        const divSeries = document.querySelectorAll(".serie");
        let series = [];

        divSeries.forEach((serie,index) => {
            let pes = serie.querySelector(".pes").value;
            let repeticions = serie.querySelector(".repeticions").value;
           series.push([pes, repeticions]);
        })

        // console.log(nom)
        // console.log(muscolAfectat)
        //  console.log(+lastId + 1)



           guardarExerciciAmbId(paramId ? `${paramId}` : `${+lastId + 1}`,nom,muscolAfectat,JSON.stringify(series),'arnau');

           document.exercici_form.reset();
    }

   

  return (
   <div>
    <form className='exercici-form' name='exercici_form' onSubmit={crearExercici}>
        <label >
            <span>Nom de l'exercici</span>
            <input type="text" name='nom' />
        </label>
        <label >
            <span>Muscol Afectat</span>
            <select name='muscolAfectat'>
                <option value="pit">Pit</option>
                <option value="esquena">Esquena</option>
                <option value="ombro">Ombro</option>
                <option value="biceps">Biceps</option>
                <option value="triceps">Triceps</option>
                <option value="quadriceps">Quadriceps</option>
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
                <button className='mes-series' onClick={afegirSerie}> Afegir Serie </button>
            </div>
        </label>
        <button>{paramId ? 'Modificar' : 'Crear'}</button>
    </form>
   </div>
  )
}
