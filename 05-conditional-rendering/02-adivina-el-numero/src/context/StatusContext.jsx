import { children, createContext, useState } from 'react'

export const StatusTurn = createContext('')

export const StatusContext = ({ children }) => {
  const [state, setState] = useState('frio')
  const StateObject = {
    state,
    setState
  }
  return (

    <StatusTurn.Provider value={StateObject}>
      {children}
    </StatusTurn.Provider>

  )
}
