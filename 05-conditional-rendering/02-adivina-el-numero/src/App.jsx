import React from 'react'
import { Game } from './components/Game'
import { StatusContext } from

export const App = () => {
  return (
    <StatusContext>
      <Game />
    </StatusContext>

  )
}
