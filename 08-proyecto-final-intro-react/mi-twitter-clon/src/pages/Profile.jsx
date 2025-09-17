import React, { useEffect, useState } from 'react'
import AvatarInitial from '../components/AvatarInitial'
import { Link, useNavigate } from 'react-router-dom'
import { Home, LogOutIcon } from 'lucide-react'

const mainContainerStyle =
  'flex bg-black h-dvh text-white flex-col text-center justify-center items-center gap-8'
const buttonStyle =
  'bg-white rounded-4xl text-black font-bold text-md p-2 w-1/3 hover:cursor-pointer hover:bg-gray-100 transition-all duration-300 m-2 flex justify-center items-center gap-2'

const buttonStyleHome =
  'bg-sky-500 rounded-4xl text-white font-bold text-md p-2 w-1/3 hover:cursor-pointer hover:bg-sky-600 transition-all duration-300 m-2 flex justify-center items-center gap-2'

export const Profile = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({ email: 'e' })

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  return (
    <main className={mainContainerStyle}>
      <div className='flex gap-5 text-center justify-center items-center'>
        <AvatarInitial name={user.username} size='lg' />
        <h1 className='text-5xl font-bold'>{user.username}</h1>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <button className={buttonStyle} onClick={logout}>
          <LogOutIcon />
          <span>Salir</span>
        </button>
        <Link
          to='/'
          className={buttonStyleHome}
        >
          <Home />
          <span>Volver a Home</span>
        </Link>

      </div>
    </main>
  )
}
