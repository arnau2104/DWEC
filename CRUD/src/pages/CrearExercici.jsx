import React from 'react'
import './CrearExercici.css'
import { guardarExerciciAmbId } from '../firebase.js';
export default function CrearExercici({exercicis}) {

    const crearExercici = (e)=> {
        let lastId = exercicis.length > 0  ? exercicis[exercicis.length - 1][0] : 0;
        e.preventDefault();
        const nom = document.crearExercici_form.nom.value;
        const muscolAfectat = document.crearExercici_form.muscolAfectat.value;
        const divSeries = document.querySelectorAll(".serie");
        let series = [];

        divSeries.forEach((serie,index) => {
            let pes = serie.querySelector(".pes").value;
            let repeticions = serie.querySelector(".repeticions").value;
           series.push(`${pes} X ${repeticions} `);
        })

        console.log(nom)
        console.log(muscolAfectat)
         console.log(+lastId + 1)



           guardarExerciciAmbId(`${+lastId + 1}`,nom,muscolAfectat,JSON.stringify(series),'arnau');
    }

    const afegirSerie = (e)=> {
        e.preventDefault();
        document.querySelector(".div-series").insertAdjacentHTML('beforeend',` <div class='serie'>
                    <input class="pes" type="text" placeholder='Pes' /> <span> X </span> <input class="repeticions"  type="text" placeholder='Repeticions'/>
                </div>`)
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
            <div className='contenedor-series'>
                <div className='div-series'>
                    <div className='serie'>
                        <input type="text" placeholder='Pes' className='pes' /> <span> X </span> <input className='repeticions'  type="text" placeholder='Repeticions'/>
                    </div>
                </div>
                <button className='mes-series' onClick={afegirSerie}> Afegir Serie </button>
            </div>
        </label>
        <button>Crear</button>
    </form>
   </div>
  )
}
