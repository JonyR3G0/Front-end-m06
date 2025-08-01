import React, { useState, useEffect, useMemo } from "react";

export function ContadorDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [duracion, setDuracion] = useState("");

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea("");
      setDuracion("");
    }
  };

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Tiempo restante: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]); // Se ejecuta cada vez que las tareas cambian

  return (
    <div className="text-amber-50 font-light p-6">
      {/* STARTS TASK SPACE */}
      <div className="border-1 border-sky-800 p-3 rounded-xl">
        {/* Info block */}
        <h2 className="text-2xl bg-black italic font-normal absolute top-18 ">
          Tareas
        </h2>
        <h3 className="text-sm p-2 bg-black font-light absolute top-18 right-15 rounded-4xl border-amber-300 border-1 ">
          Restan: {calcularTiempoTotal} minutos
        </h3>

        {/* Tasks block */}
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea.nombre}: {tarea.duracion} minutos
            </li>
          ))}
        </ul>
      </div>
      {/* ENDS TASK SPACE */}

      <div className="fixed bottom-0 left-0 flex h-auto p-4 content-center justify-between w-dvw">
        <input
          className="border-sky-400 border-1 rounded-4xl p-1 text-sm"
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
        />
        <input
          className="border-sky-400 border-1 rounded-4xl p-1 text-sm"
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
        />
        <button
          className="shadow-sky-500 p-3 rounded-4xl text-sm bg-linear-65 from-sky-400 to-sky-700"
          onClick={agregarTarea}
        >
          Agregar <span className="font-bold italic">tarea!</span>
        </button>
      </div>
    </div>
  );
}
