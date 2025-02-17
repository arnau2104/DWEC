import React from 'react'
import './CrearExercici.css'
import { guardarExerciciAmbId } from '../firebase.js';
export default function CrearExercici({exercicis}) {

    const crearExercici = (e)=> {
        let lastId = exercicis.length > 0  ? exercicis[exercicis.length - 1][0] : 0;
        e.preventDefault();
        const nom = document.crearExercici_form.nom.value;
        const muscolAfectat = document.crearExercici_form.muscolAfectat.value;
        console.log(nom)
        console.log(muscolAfectat)
         console.log(+lastId + 1)
          guardarExerciciAmbId(`${+lastId + 1}`,nom,muscolAfectat,JSON.stringify(['25 X 10','25 X 8','25 X 5']),'arnau');
    }

  return (
   <div>
    <form className='crearExercici-form' name='crearExercici_form' onSubmit={crearExercici}>
        <label >
            <span>Nom de l'exercici</span>
            <input type="text" name='nom' />
        </label>
        <label >
            <span>Muscol Afectat</span>
            <select name='muscolAfectat'>
                <option value="pit">Pit</option>
                <option value="esquena">Esquena</option>
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
            <div>
                <div className='serie'>
                    <input type="text" placeholder='Pes' /> <span> X </span> <input  type="text" placeholder='Repeticions'/>
                </div>
                <button className='mes-series'> + </button>
            </div>
        </label>
        <button>Crear</button>
    </form>
   </div>
  )
}
