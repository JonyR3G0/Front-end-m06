import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Slider, Progress, Button, } from 'antd'
import { StatusContext } from '../context/StatusContext'

// 1,en orbita, 0, sin combustible, 2, detenido

export const PanelDeControl = () => {
  const [distantcia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  // Esta variable maneja el ciclo del intervalo de consumo de combustible en ms
  const intervaloCombustible = 1000
  // Importar el status
  const { status, setStatus } = useContext(StatusContext)

  useEffect(() => {
    // 1. Mostrar mensaje de montaje en la consola
    console.log('¡El panel de control está listo!')
    // 2. Simular el vuelo reduciendo combustible y aumentando distancia
    const cicloDeVuelo = setInterval(() => {
      if (status === 3 && combustible > 0) {
        setDistancia(estadoActual => estadoActual + 0.1412)
        setCombustible(estadoActual => estadoActual - 1)
      }
      if (status === 2 && combustible < 100) {
        setCombustible(estadoActual => estadoActual + 1)
      }
      if (combustible === 0) {
        setStatus(1)
      }
    }
    , intervaloCombustible)
    // 4. Limpiar el intervalo de vuelo
    return () => {
      clearInterval(cicloDeVuelo)
      // 5. Mostrar mensaje de desmontaje
      console.log('El panel de control se ha apagado.')
    }
  }, [status, combustible])

  useEffect(() => {
    // 3. Si combustible cambia, mostrar un mensaje
    console.log('Combustible -1')
  }, [combustible])

  const mensajeEstado = useMemo(() => {
    return `Estado: ${status}`
  }, [status])

  const twoColors = {
    '0%': '#f43f5e',
    '40%': '#60a5fa',
  }

  return (
    <div className='bg-slate-900 text-blue-600 w-full h-full p-3 flex flex-col justify-between text-center'>

      <h1 className='text-5xl text-sky-300 text-center animate-pulse'>Estado</h1>
      <div className={status === 3 ? 'animate-colorBlink p-3' : 'p-3'}>
        <p className='text-3xl pb-4'>distancia recorrida:</p>
        <p className='text-2xl text-amber-300'>{distantcia.toFixed(4)} pársecs</p>
      </div>

      <div className={combustible < 100 ? 'animate-colorBlink p-3' : 'p-3'}>
        <p className='text-3xl'> Carga de energía:</p>
        <p className='text-4xl text-fuchsia-500'>{combustible} %</p>

        <Progress
          strokeColor={twoColors}
          status='active'
          showInfo={false}
          percent={combustible}
        />

      </div>

      <div className='flex-col'>
        <Button block className='flex-1 m-1' disabled={combustible <= 0} loading={status === 3} onClick={() => setStatus(3)} type='primary'>{status === 0 ? 'Despegar' : 'Explorar'}</Button>
        <Button block className='flex-1 m-1' color='danger' variant='solid' disabled={status === 0} onClick={() => setStatus(2)} type='primary'>{status <= 3 && combustible <= 1 ? 'Reiniciar sistemas' : 'Detenerse'}</Button>
      </div>

    </div>
  )
}
