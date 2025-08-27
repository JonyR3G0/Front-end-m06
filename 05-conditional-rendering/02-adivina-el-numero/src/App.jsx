import React from 'react'
import { Game } from './components/Game'
import { StatusContext } from './context/StatusContext'

export const App = () => {
  return (
    <StatusContext>
      <Game />
    </StatusContext>
  )
}
