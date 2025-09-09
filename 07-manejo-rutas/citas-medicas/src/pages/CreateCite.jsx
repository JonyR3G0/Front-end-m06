import { CalendarPlus, CircleX } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useCitesContext } from "../context/CitesContext";

export const CreateCite = () => {
  const { citesList, setCitesList } = useCitesContext();
  const Navigate = useNavigate();
  const mangeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setCitesList([...citesList, Object.fromEntries(formData.entries())]);
    console.log(Object.fromEntries(formData.entries()));
    e.target.reset();
    alert('Cita registrada, se redireccionara a la cita despues de aceptar')
    setTimeout(() => {
        Navigate(/cita/ + citesList)        
    }, 1000);
  };

  return (
    <>
      <div className="z-20 absolute h-dvh w-dvw animate-backdropIn transition-all duration-500"></div>

      <div className="z-20 transition-all duration-500 text-amber-50 absolute h-dvh w-dvw flex items-center justify-center text-center">
        <section className="flex flex-col items-center justify-center text-center gap-2">
          <div className="flex items-center justify-baseline text-center gap-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-50 to-cyan-300 bg-clip-text text-transparent">
              Crear cita
            </h1>
          </div>

          <form
            onSubmit={mangeSubmit}
            className="flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-xl flex gap-2">
              <input
                className="flex-1 border rounded-2xl p-2"
                type="text"
                name="firstName"
                placeholder="Nombre(s) del paciente"
                required
              />
              <input
                className="flex-1 border rounded-2xl p-2"
                type="text"
                name="lastName"
                placeholder="Apellido(s) del paciente"
                required
              />
            </div>
            <div className="w-xl flex gap-2">
              <input
                className="flex-1 border rounded-2xl p-2"
                type="date"
                name="date"
                required
              />
              <input
                className="flex-1 border rounded-2xl p-2"
                type="time"
                required
                name="time"
              />
            </div>
            <div className="w-xl flex gap-2 border border-cyan-300 rounded-2xl p-2">
              <h1>ID de cita #</h1>
              <p>{citesList.length}</p>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-200 hover:bg-cyan-950 
             transition-colors duration-400 buttonCustom border border-gray-300 
             hover:border-cyan-400 rounded-3xl px-4 py-2 text-sm w-xl"
            >
              <CalendarPlus strokeWidth={2} size={15} />
              <span>Agendar cita</span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};
