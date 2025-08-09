import React, { useContext, useEffect } from 'react'
import { StatusContext } from '../context/StatusContext'

export const PlanetRandom = () => {
  const { status, setStatus } = useContext(StatusContext)

  useEffect(() => {
    const randomNumber = Math.random() * 10000
    if (status === 3) {
      setInterval(() => {
        setStatus(4)
      }, randomNumber)
    }
    return () => {

    }
  }, [status])
}
