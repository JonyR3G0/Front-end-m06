import React from 'react'

export const InputNumber = ({ getInputNumber, userInput }) => {
  return (
    <div>
      <input className='border-1 rounded-4xl p-1 border-slate-800 active:caret-amber-50 transition-all duration-300 ease-in-out' onChange={(e) => getInputNumber(e.target.value)} type='number' min='0' max={100} name='' id='' defaultValue={userInput} />
    </div>

  )
}
