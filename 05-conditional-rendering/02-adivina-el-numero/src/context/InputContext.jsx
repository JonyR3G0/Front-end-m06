import { createContext, useState } from 'react'

// Creating and exporting the context
export const InputUserContext = createContext(0)

// Creating the context provider
export const InputContext = ({ children }) => {
  // Generating the state that will be passed down to the childrens
  const [inputContextState, setInputContextState] = useState(0)
  // We can't pass down more than one value to value. So we create an object so we can pass down the useState
  const StateObject = {
    inputContextState,
    setInputContextState
  }
  // Returning the provider
  return (
    <InputUserContext.Provider value={StateObject}>
      {children}
    </InputUserContext.Provider>
  )
}
