import React from 'react'
import { Tweet } from './components/Tweet'
import { TweetList } from './components/TweetList'
import { TweetForm } from './components/TweetForm'
import { Home } from 'lucide-react'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
