import React from 'react'
import { agafarExerciciPerId } from '../firebase.js'

export default function Exercici() {
  return (
    <div>
      <p>Exercici 1</p>

    {agafarExerciciPerId(1)}

    </div>
  )
}
