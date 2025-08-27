import React, { useEffect, useState } from 'react'

export const Message = ({ userInput, randomInt }) => {
  const [message, setMessage] = useState('Iniciar partida')

  useEffect(() => {
    if (userInput < randomInt) {
      setMessage('frio')
    }
    if (userInput > randomInt) {
      setMessage('caliente')
    }
    if (parseInt(userInput) === parseInt(randomInt)) {
      setMessage('Felicidades has ganado.')
    }
  }, [userInput, randomInt, setMessage])
  return (
    <div><h2>{message}</h2></div>
  )
}
