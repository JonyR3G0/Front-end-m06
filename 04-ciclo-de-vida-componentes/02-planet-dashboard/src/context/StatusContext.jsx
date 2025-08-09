import { createContext, useState } from 'react'

// Estados disponlibles: 1 detenido (falta de combustible o al 0iniciar) 2 Explorando, 3 Registrando planeta

export const StatusContext = createContext(0)

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState(0)

  const value = { status, setStatus }

  return (
    <StatusContext.Provider value={value}>
      {children}
    </StatusContext.Provider>
  )
}
