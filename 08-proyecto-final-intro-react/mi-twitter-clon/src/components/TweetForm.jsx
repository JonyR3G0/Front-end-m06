import React from 'react'

const inputStyle = 'text-gray-300'
const inputButtonPostStyle =
'bg-white text-black rounded-2xl ps-2 pr-2 pt-1 pb-1 text-sm font-bold'
const buttonsContainerStyle =
'border-t border-gray-700'

export const TweetForm = () => {
  return (
    <form action=''>
      <input
        className={inputStyle}
        type='text'
        placeholder='¿Qué está pasando?'
      />
      <div className={buttonsContainerStyle}>
        <div />
        <button type='submit' className={inputButtonPostStyle}>Postear</button>
      </div>
    </form>
  )
}
