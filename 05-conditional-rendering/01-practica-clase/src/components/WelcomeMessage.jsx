import React from "react";

// // Forma tradicional (if else)
// export const WelcomeMessage = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <h1>Bienvenido</h1>;
//   } else {
//     return <h1>Inicia sesión</h1>;
//   }
// };

// // Ternario
// export const WelcomeMessage = ({ isLoggedIn }) => {
//   return <>{isLoggedIn ? <h1>Bienvenido</h1> : <h1>Inicia sesión </h1>}</>;
// };

// Operador &&
export const WelcomeMessage = ({ isLoggedIn }) => {
  return <>{isLoggedIn && <h1>Bienvenido</h1>}</>;
};
