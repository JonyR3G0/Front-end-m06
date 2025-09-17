import React, { use, useEffect, useState } from 'react'
import { Tweet } from './components/Tweet'
import { TweetList } from './components/TweetList'
import { TweetForm } from './components/TweetForm'
import { Home } from 'lucide-react'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'

export const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (username) => {
    const userData = { username }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <HomePage /> : <Login onLogin={login} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
