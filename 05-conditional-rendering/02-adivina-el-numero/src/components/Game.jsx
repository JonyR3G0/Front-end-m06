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
  const [answer, setAnswer] = useState(0)
  const [status, setStatus] = useState('hola')

  const inputHandler = (event) => {
    setAnswer(event.target.value)
  }

  useEffect(() => {
    setRandomInt(generateRandomInt(100))
  }, [])

  useEffect(() => {
    if (answer < randomInt) {
      setStatus('frio')
    }
    if (answer > randomInt) {
      setStatus('caliente')
    }
    if (parseInt(answer) === parseInt(randomInt)) {
      setStatus('ganate')
    }
  }, [answer, randomInt])

  return (
    <div className='text-amber-50 absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <div>{randomInt}</div>
      <p>{status}</p>
      <input onChange={inputHandler} type='number' min='0' name='' id='' />
    </div>

  )
}
