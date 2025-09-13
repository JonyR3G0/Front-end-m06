import React from 'react'

const loginContainerStyle =
'bg-black h-dvh w-dvw text-white flex'
const logoContainerStyle =
'w-1/2 flex items-center text-center justify-center'

export const Login = () => {
  return (
    <main className={loginContainerStyle}>
      {/* Left logo */}
      <div className={logoContainerStyle}>
        <h1 className='title_font text-[15rem]'>Y</h1>
      </div>
      {/* Right login */}
      <div>
        <p>login</p>
      </div>
    </main>
  )
}
