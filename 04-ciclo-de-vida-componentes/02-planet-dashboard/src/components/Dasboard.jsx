import React from "react";
// Estados
const [distantcia, setDistancia] = useState(0);
const [combustible, setCombustible] = useState(100);
const [estadoNave, setEstadoNave] = useState("En orbita");
const [planetasVisitados, setPlanetasVisitados] = useState([]);

useEffect(() => {
  console.log("ready");
  const intervalo = setInterval(() => {
    // ? TODO Arreglar funcion para no funcionar con combustible negativo
    setCombustible((bef) => bef - 1);
    setDistancia((bef) => bef + 12);
  }, 1000);
  return () => {
    clearInterval(intervalo);
    console.log("unmounting");
  };
}, []);

useEffect(() => {
  console.log("Change in fuel");
}, [combustible]);

const mensajeEstado = useMemo(() => {
  return `Estado: ${estadoNave}`;
}, [estadoNave]);

export const Dasboard = () => {
  return (
    <div>
      {/* ... (información del panel) */}
      <h1>Panel de control</h1>
      <ul>
        <li>distancia: {distantcia} kmL</li>
        <li>combustible: {combustible}</li>
        <li>Estado: {estadoNave}</li>
      </ul>

      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
};
