import React, { useContext } from 'react'
import { UserContext } from './assets/context/UserContext'
import { CambiarFondo } from './components/CambiarFondo'

export const App = () => {

  const {user } = useContext(UserContext)
  return (
    <div>
      <h1>Hola! {user.name} </h1>
      <p>Correo: {user.mail} </p> 
      <CambiarFondo/>
    </div>
  )
}


// import { useState } from "react";
// import { CambiarFondo } from "./components/CambiarFondo";

// export const App = () => {
//   const [mostrar, setMostrar] = useState(false);

//   return (
//     <>
//       El codigo !prev es bastante usado para hacer una funcion de toggle
//       <button onClick={() => setMostrar((before) => !before)}>
//         {mostrar ? "modo claro" : "modo obscuro"}
//       </button>
//       {mostrar && <CambiarFondo />}
//     </>
//   );
// };
