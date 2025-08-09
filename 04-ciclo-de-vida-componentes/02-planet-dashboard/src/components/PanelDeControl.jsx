import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Flex, Progress, Button } from 'antd'
import { StatusContext } from '../context/StatusContext'

// 1,en orbita, 0, sin combustible, 2, detenido

export const PanelDeControl = ({ collapsed }) => {
  const [distantcia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  // Esta variable maneja el ciclo del intervalo de consumo de combustible en ms
  const intervaloCombustible = 100
  // Importar el status
  const { status, setStatus } = useContext(StatusContext)

  useEffect(() => {
    // 1. Mostrar mensaje de montaje en la consola
    console.log('¡El panel de control está listo!')
    // 2. Simular el vuelo reduciendo combustible y aumentando distancia
    const cicloDeVuelo = setInterval(() => {
      if (status === 3 && combustible > 0) {
        setDistancia(estadoActual => estadoActual + 0.14)
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
    console.log(collapsed)
  }, [combustible])

  const mensajeEstado = useMemo(() => {
    return `Estado: ${status}`
  }, [status])

  return (
    <div className='bg-slate-900 text-blue-600 w-full h-full p-3'>
      <h1 className='text-xl text-sky-300 text-center'>Estado</h1>
      <ul>
        <li>distancia recorrida: {distantcia} pársecs</li>
        <li>Carga de energía: {combustible} %</li>
        <li>Esta colapsado? {collapsed ? 'true' : 'false'}</li>
        <li>
          <Flex vertical gap='small'>
            <Progress
              showInfo={false}
              percent={combustible}
              steps={30}
              size={[8, 20]}
              strokeColor={['#fbcfe8', '#fbcfe8', '#fbcfe8', '#2563eb']}
            />
          </Flex>
        </li>
        <li>{mensajeEstado}</li>
        <Button disabled={combustible <= 0} onClick={() => setStatus(3)} type='primary'>{status === 0 ? 'Despegar' : 'Explorar'}</Button>
        <Button disabled={status === 0} onClick={() => setStatus(2)} type='primary'>Detenerse</Button>

      </ul>
    </div>
  )
}
