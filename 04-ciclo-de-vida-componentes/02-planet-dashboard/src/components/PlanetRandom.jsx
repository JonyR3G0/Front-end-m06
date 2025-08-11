import React, { useContext, useEffect } from 'react'
import { StatusContext } from '../context/StatusContext'

export const PlanetRandom = () => {
  const { status, setStatus } = useContext(StatusContext)

  useEffect(() => {
    const randomNumber = (Math.floor(Math.random() * 100000))
    console.log(randomNumber)
    const montarForma = setTimeout(() => {
      setStatus(4)
    }, randomNumber)
    return () => {
      console.log('limpiando timeout')
      clearTimeout(montarForma)
    }
  }, [status])
}
