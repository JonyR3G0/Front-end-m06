import React, { useEffect, useMemo, useState } from "react";
import { Flex, Progress, Button } from "antd";

// 1,en orbita, 0, sin combustible, 2, detenido

export const DataDashboard = () => {
  const [distantcia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(10);
  const [estadoNave, setEstadoNave] = useState(1);

  useEffect(() => {
    console.log("ready");
    const intervalo = setInterval(() => {
      setCombustible((actual) => {
        if (actual <= 0) {
          setEstadoNave(0);
          return 0;
        }
        setDistancia((bef) => bef + 12);
        return actual - 1;
      });
    }, 400);
    return () => {
      clearInterval(intervalo);
      console.log("unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Change in fuel");
  }, [combustible]);

  return (
    <div className="bg-slate-900 text-blue-600 w-full h-full p-3">
      <h1 className="text-xl text-sky-300">Estado</h1>
      <ul>
        <li>distancia recorrida: {distantcia} pársecs</li>
        <li>Carga de energía: {combustible}</li>
        <li>
          <Flex vertical gap="small">
            <Progress
              showInfo={false}
              percent={combustible}
              steps={30}
              size={[8, 20]}
              strokeColor={["#fbcfe8", "#fbcfe8", "#fbcfe8", "#2563eb"]}
            />
          </Flex>
        </li>
        <li>Estado: {estadoNave}</li>
      </ul>
      <Button
        disabled={combustible === 0}
        onClick={() => {
          setEstadoNave(2);
        }}
        type="primary"
      >
        Detenerse
      </Button>
    </div>
  );
};
