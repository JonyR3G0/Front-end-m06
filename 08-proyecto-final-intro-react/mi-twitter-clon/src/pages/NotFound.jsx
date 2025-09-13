import React from 'react'

const containerStyle =
  'bg-black h-dvh w-dvw text-gray-500 flex flex-col text-center items-center'
const buttonStyle =
  'bg-sky-500 w-min rounded-4xl text-white font-bold text-md p-1 pl-4 pr-4 hover:cursor-pointer hover:bg-sky-600 transition-all duration-300 m-5'
const container = 'm-20'

export const NotFound = () => {
  return (
    <div className={containerStyle}>
      <div className={container}>
        <p>Hmm... esta pagina no existe. Intenta buscar otra cosa. (ᵕ—ᴗ—)</p>
        <button className={buttonStyle}>Buscar</button>
      </div>
    </div>
  )
}
