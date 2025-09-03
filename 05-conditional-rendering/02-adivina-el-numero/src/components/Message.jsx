import React, { useEffect, useContext, useState } from 'react'
import { InputUserContext } from '../context/InputContext'
import mensajes from '../assets/mensajes.json'

/**
 * This funcion consumes the object previusly imported that contains all the messages for the user
 * Then calcs a random number and returns a random messaje each time the function is called
 * @param {string} tipe the class of messajes, frio, caliente, ganaste.
 * @returns {string} the random messaje
 */
function randomMessage (tipe) {
  const random = Math.floor(Math.random() * 30)
  return mensajes[tipe][random]
}

export const Message = ({ randomInt }) => {
  // inputContextState for the winning, cold/hot message
  const { inputContextState } = useContext(InputUserContext)
  // State for managing the state
  const [message, setMessage] = useState('frio')
  // State for dinamic message
  const [pista, setPista] = useState(0)

  // This function generates a timer of 5 secs, to show the user the hint
  function tempMessaje () {
    setTimeout(() => { setPista(0) }, 5000)
    return message
  }

  // This use Effect Hook calcs the hint to be showed depending on the input of the user, +-15 to hot, and more to cold, also the winning mensaje.
  useEffect(() => {
    if (inputContextState < randomInt + 15 && inputContextState > randomInt - 15) {
      setMessage(randomMessage('caliente'))
    } else {
      setMessage(randomMessage('frio'))
    }
    if (parseInt(inputContextState) === parseInt(randomInt)) {
      setMessage(randomMessage('ganaste'))
    }
    if (parseInt(inputContextState) === 0) {
      setMessage('Empieza la partida 😐')
    }
  }, [inputContextState, randomInt, setMessage])
  return (
    <>
      {pista === 1 ? <div className='text-2xl p-1'>{tempMessaje()}</div> : <button className='p-3 bg-blue-700 rounded-2xl hover:cursor-pointer' onClick={() => setPista(1)}>Ver pista (5 s)</button>}
    </>
  )
}
