import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user:id' element={<UserProfile/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}
