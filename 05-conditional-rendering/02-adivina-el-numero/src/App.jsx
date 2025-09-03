import React from 'react'
import { Game } from './components/Game'
import { InputContext } from './context/InputContext'

export const App = () => {
  return (
    <InputContext>
      <Game />
    </InputContext>
  )
}
