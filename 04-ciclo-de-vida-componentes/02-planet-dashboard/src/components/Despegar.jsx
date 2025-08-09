import React from 'react'
import { Flex, Spin } from 'antd'

export const Despegar = () => {
  return (
    <div className='w-full h-full bg-slate-800 flex-col flex-initial flex justify-center items-center'>
      <h1 className='text-6xl pr-4 text-sky-400 text-center animate-bounce animate-colorPulsar'>Esperando despegue</h1>
      <img className='rounded-4xl p-3' src='src\res\ignition.gif' alt='Esperando despegue' />
    </div>
  )
}
