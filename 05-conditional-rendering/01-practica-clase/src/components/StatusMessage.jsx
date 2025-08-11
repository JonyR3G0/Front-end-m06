import React from "react";

export const StatusMessage = ({ status }) => {
  switch (status) {
    case "loading":
      return <p>Cargando...</p>;
    case "succes":
      return <p>Ok!</p>;
    case "error":
      return <p>Algo malio sal...</p>;
    default:
      return <p>Error desconocido :0</p>;
  }
};
