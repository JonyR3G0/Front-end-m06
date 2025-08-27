import React, { useEffect, useState } from 'react'
import { InputNumber } from './InputNumber'
import { Message } from './Message'
import { RestartButton } from './RestartButton'

const generateRandomInt = (multFactor) => {
  return Math.floor(Math.random() * multFactor)
}

// En el componente Game, genera un número aleatorio entre 1 y 100 cuando el juego comienza.
// Guarda el estado del número ingresado y la respuesta en useuserInput.
// Compara el número ingresado con el generado y usa renderización condicional para mostrar:
//     "¡Correcto!" si el usuario acierta.
//     "El número es mayor" o "El número es menor" como pistas.

export const Game = () => {
  // userInput for managing the random number to guess, it uses useuserInput for restarting the round
  const [randomInt, setRandomInt] = useState(0)
  // userInput for the winning, cold/hot message
  const [message, setMessage] = useState('hola')
  // userInput for managing the dinamic background bgColor
  const [bgColor, setBgColor] = useState('#64748b')
  // userInput for managing the user input
  const [userInput, setUserInput] = useState(1)

  function getInputNumber (numberGuess) {
    setUserInput(numberGuess)
  }

  /**
   * This hook creates a random number between 1-100 every time the component is loaded
   */
  useEffect(() => {
    setRandomInt(generateRandomInt(100) + 1)
  }, [setRandomInt])

  useEffect(() => {
    if (userInput < randomInt) {
      setMessage('frio')
      setBgColor('#06b6d4')
    }
    if (userInput > randomInt) {
      setMessage('caliente')
      setBgColor('#dc2626')
    }
    if (parseInt(userInput) === parseInt(randomInt)) {
      setMessage('Felicidades has ganado.')
      setBgColor('#4ade80')
    }
  }, [userInput, randomInt, setBgColor, setMessage])

  return (
    <div
      className='text-amber-50 flex flex-col transition-all absolute inset-0 -z-10 h-full w-full items-center px-5 py-24'
      style={{
        background: `
      radial-gradient(
        circle at top,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,0.9) 70%,
        rgba(0,0,0,0.5) 90%
      ),
      ${bgColor}
    `,
        transition: 'all 1s ease-out'
      }}
    >
      {/* <div>{randomInt}</div> */}
      <h1 className='text-5xl'>💥 Adivina adivinador 🤪</h1>
      <h2 className='italic text-slate-500 pb-7'>(un numero entre el uno y el cien)</h2>
      <Message userInput={userInput} />
      <InputNumber getInputNumber={getInputNumber} randomInt={randomInt} userInput={userInput} />
      <RestartButton />
    </div>

  )
}
