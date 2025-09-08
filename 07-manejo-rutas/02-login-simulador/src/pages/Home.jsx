import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p> <Link to="/login">Ir a login</Link> </p>
    </div>
  )
}
