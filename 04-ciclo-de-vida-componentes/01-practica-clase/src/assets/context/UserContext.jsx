import { createContext } from "react";

// Crear el contexto
export const UserContext = createContext()

// Provider
export const UserProvider = ({children}) => {

    const user = {
        name : 'Jon',
        mail : 'pepe@pepe',
        theme : 'light'
    }

    return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}
