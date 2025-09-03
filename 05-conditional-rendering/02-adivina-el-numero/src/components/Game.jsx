import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from './InputNumber'
import { Message } from './Message'
import { RestartButton } from './RestartButton'
import { InputUserContext } from '../context/InputContext'

const generateRandomInt = (multFactor) => {
  return Math.floor(Math.random() * multFactor)
}

// En el componente Game, genera un número aleatorio entre 1 y 100 cuando el juego comienza.
// Guarda el estado del número ingresado y la respuesta en useuserInput.
// Compara el número ingresado con el generado y usa renderización condicional para mostrar:
//     "¡Correcto!" si el usuario acierta.
//     "El número es mayor" o "El número es menor" como pistas.

export const Game = () => {
  // Importing and destructuring the user input context
  const { inputContextState, setInputContextState } = useContext(InputUserContext)
  // userInput for managing the random number to guess, it uses useuserInput for restarting the round
  const [randomInt, setRandomInt] = useState(0)
  // userInput for managing the dinamic background bgColor
  const [bgColor, setBgColor] = useState('#64748b')
  // userInput for managing the user input
  // const [userInput, setUserInput] = useState(1)

  // function getInputNumber (numberGuess) {
  //   setUserInput(numberGuess)
  // }

  /**
   * This hook creates a random number between 1-100 every time the component is loaded
   */
  useEffect(() => {
    setRandomInt(generateRandomInt(100) + 1)
  }, [setRandomInt])

  useEffect(() => {
    if (inputContextState < randomInt + 15 && inputContextState > randomInt - 15) {
      setBgColor('#dc2626')
    } else {
      setBgColor('#1d4ed8')
    }
    if (parseInt(inputContextState) === parseInt(randomInt)) {
      setBgColor('#4ade80')
    }
    if (parseInt(inputContextState) === parseInt(0)) {
      setBgColor('#64748b')
    }
  }, [inputContextState, randomInt, setBgColor])

  return (
    <div
      className='text-center justify-center text-amber-50 flex flex-col transition-all absolute inset-0 -z-10 h-full w-full items-center px-5 py-24'
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
        transition: 'all 10s ease-out'
      }}
    >
      {/* <div>{randomInt}</div> */}
      <h1 className='text-5xl'>💥 Adivina adivinador 🤪</h1>
      <h2 className='italic text-slate-500 pb-7'>(un numero entre el uno y el cien)</h2>
      <Message randomInt={randomInt} />
      <InputNumber />
      <RestartButton />
    </div>

  )
}
