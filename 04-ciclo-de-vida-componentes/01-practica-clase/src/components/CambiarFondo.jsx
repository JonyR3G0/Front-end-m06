// Este mini componente simula el ciclo de vida en react con useEffect. Vemos que los estilos del documento se ven alterados al montarse y al desmontarse.

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../assets/context/UserContext";

export const CambiarFondo = () => {

  const {user} = useContext(UserContext)

  const [cuenta, setCuenta] = useState(0);
  useEffect(() => {
    // Mounting
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // Unmounting
    return () => {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    };
  }, []);

  useEffect(() => {
    // Actualitation!
    console.log("Actualizando button info");
  }, [cuenta]);

  return (
    <>
      <p>{user.name} {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Cuenta de clicks!</button>
    </>
  );
};
