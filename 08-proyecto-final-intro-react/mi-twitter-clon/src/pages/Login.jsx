import React from 'react'

const loginContainerStyle = 'bg-black h-dvh w-dvw text-white flex'
const logoContainerStyle =
  'w-1/2 flex-1 flex items-center text-center justify-center'
const inputStyle = 'border border-white rounded-3xl p-2 w-1/2'
const buttonStyle =
  'bg-white rounded-4xl text-black font-bold text-md p-2 w-1/2 hover:cursor-pointer hover:bg-gray-100 transition-all duration-300'
const buttonInvertedStyle =
  'border border-white rounded-4xl font-bold text-md p-2 w-1/2 hover:cursor-pointer hover:bg-gray-800 transition-all duration-300'

//   TODO Actually implement this function and the login.
const handleForm = (e) => {
  e.preventDefault()
}

export const Login = () => {
  return (
    <main className={loginContainerStyle}>
      {/* Left logo */}
      <div className={logoContainerStyle}>
        <h1 className='title_font text-[18rem]'>Y</h1>
      </div>
      {/* Right login */}
      <div className='flex-1'>
        <div className='m-30'>
          <h2 className='impact_font text-6xl'>Lo que está pasando ahora</h2>
          <p className='impact_font mt-15 text-3xl'>Únete hoy</p>
          <form onSubmit={handleForm}>
            <div className='flex flex-col gap-5 pt-5'>
              <input
                className={inputStyle}
                placeholder='Email'
                type='email'
                required
              />
              <input
                className={inputStyle}
                placeholder='Contraseña'
                type='password'
                required
              />
              <button type='submit' className={buttonInvertedStyle}>
                Iniciar sesión
              </button>
            </div>
          </form>
          {/* Register button */}
          <div>
            <div className='relative border-t border-gray-700 w-1/2 mt-5 mb-5'>
              <p className='absolute inset-1/2 -translate-x-1/2 -translate-y-3 bg-black'>
                O
              </p>
            </div>
            <button className={buttonStyle}>Crear cuenta</button>
            <p className='w-1/2 text-gray-500 text-[.8rem] pt-2 leading-4'>Al registrarte no tienes que aceptar ningun <span className='text-blue-600'>Termino de uso</span> que escribimos para que sea inentendible y no lo leas, y terminemos lucrando con tus <span className='text-blue-600'>datos personales</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}
