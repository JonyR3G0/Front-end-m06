import React, { useEffect, useState } from 'react'

const generateRandomInt = (multFactor) => {
  return Math.floor(Math.random() * multFactor)
}

// En el componente Game, genera un número aleatorio entre 1 y 100 cuando el juego comienza.
// Guarda el estado del número ingresado y la respuesta en useState.
// Compara el número ingresado con el generado y usa renderización condicional para mostrar:
//     "¡Correcto!" si el usuario acierta.
//     "El número es mayor" o "El número es menor" como pistas.

export const Game = () => {
  const [randomInt, setRandomInt] = useState(0)
  const [status, setStatus] = useState('hola')
  const [color, setColor] = useState('#64748b')



  useEffect(() => {
    setRandomInt(generateRandomInt(100))
  }, [])

  useEffect(() => {
    if (answer < randomInt) {
      setStatus('frio')
      setColor('#06b6d4')
    }
    if (answer > randomInt) {
      setStatus('caliente')
      setColor('#dc2626')
    }
    if (parseInt(answer) === parseInt(randomInt)) {
      setStatus('Felicidades has ganado.')
      setColor('#4ade80')
    }
  }, [answer, randomInt])

  return (
    <div
      className='text-amber-50 absolute inset-0 -z-10 h-full w-full items-center px-5 py-24'
      style={{
        background: `radial-gradient(125% 125% at 50% 10%, #000 40%, ${color} 100%)`
      }}
    >
      <div>{randomInt}</div>
      <p>{status}</p>
    </div>

  )
}
