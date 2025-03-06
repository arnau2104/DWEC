import React from 'react'
import './Inici.css';
import Exercicis from '../pages/Exercicis'

export default function Inici({exercicis}) {
  return (
    <div className='inici-card'>

        <h3> Benvingut a la teva plataforma personalitzada d'exercicis! </h3>
      
        <p>Estàs a punt de començar un viatge per aconseguir els teus objectius de fitness de manera organitzada i eficient. A la nostra web, podràs crear els teus exercicis de gimnàs, guardar els pesos i les repeticions de cada sèrie, i seguir el teu progrés al llarg del temps.
        Comença a crear els teus entrenaments i mantén el control total sobre la teva rutina per aconseguir els millors resultats. No només podràs registrar els exercicis, sinó que també podràs veure el teu avançament i ajustar la teva rutina segons les teves necessitats.
        Fes un pas més cap a la teva millor versió!</p>

    </div>
  )
}
