import React, { useEffect, useContext, useState } from 'react'
import { InputUserContext } from '../context/InputContext'
import mensajes from '../assets/mensajes.json'

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

  function tempMessaje () {
    setTimeout(() => { setPista(0) }, 5000)
    return message
  }

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
