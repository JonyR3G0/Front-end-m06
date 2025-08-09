import React from 'react'
import { Flex, Spin } from 'antd'

export const Explorando = () => {
  return (
    <div className='w-full h-full bg-slate-800 flex-col flex-initial flex justify-center items-center'>
      <div className='flex items-center'>
        <h1 className='text-6xl pr-4 text-sky-400 text-clip'>Explorando</h1>
        <Flex align='center' gap='middle'>
          <Spin size='large' />
        </Flex>
      </div>
      <img className='rounded-4xl p-3' src='src\res\explorer.gif' alt='Explorando' />
    </div>
  )
}
