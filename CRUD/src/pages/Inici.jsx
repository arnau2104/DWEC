import React from 'react'
import './Inici.css';
import Exercicis from '../pages/Exercicis'

export default function Inici({exercicis}) {
  return (
    <div className='inici-card'>
      <p>Inici</p>
      <Exercicis exercicis={exercicis} />
    </div>
  )
}
