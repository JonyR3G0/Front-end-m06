import { Link } from "react-router-dom";
import icon from "../assets/cros.svg";
import { Calendar, Search, CalendarPlus } from "lucide-react";
import { QSearch } from "./QSearch";
import { useState } from "react";
import { CreateCite } from "./CreateCite";

export default function Home() {

    const [renderQSearch, setRenderQSearch] = useState(false)
    const [renderCite, setRenderCite] = useState(false)

    return (
    <div className="relative min-h-screen">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-white dark:bg-gray-950">
        {/* noise */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* gradient 1 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-700/30 dark:via-transparent dark:to-purple-950/30" />
        {/* gradient 2 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-pink-50/30 dark:from-yellow-950/20 dark:via-transparent dark:to-pink-950/20" />
      </div>
      {/* --- BACKGROUND --- */}
      {/* --- Main --- */}
      {/* Center z-10 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4 mr-10 ml-10">
        {/* Searchbar op */}
        {renderQSearch ? <QSearch /> : null}
        {renderCite ? <CreateCite /> : null}
        {/* Tile */}
        <div className="flex items-center justify-center text-center">
          <img
            src={icon}
            alt="Icono Farmacia"
            width="50"
            height="50"
            className="mr-2"
          />
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">
            BIENVENIDO A TU PORTAL DE CITAS
          </h1>
        </div>
        {/* Sub */}
        <p className="text-gray-300 font-light font-stretch-ultra-expanded p-2 mt-2 w-2/4">
          Accede rápido a la información que necesitas. Recuerda tener a mano tu
          numero de cita para acceder a ella más rápido.
        </p>
        {/* Nav */}
        <nav className="mt-8 flex items-center justify-center text-center gap-7">
          <Link
            to="/citas"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-200 hover:bg-emerald-950 
             transition-colors duration-400 buttonCustom border border-gray-300 
             hover:border-emerald-400 rounded-3xl px-4 py-2 text-sm"
          >
            <Calendar strokeWidth={2} size={15} />
            <span>Ver lista de citas</span>
          </Link>
          {/* <Link
            to="/citas123"
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-200 hover:bg-emerald-950 
             transition-colors duration-400 buttonCustom border border-gray-300 
             hover:border-emerald-400 rounded-3xl px-4 py-2 text-sm"
          >
            <Search strokeWidth={2} size={15} />
            <span>Buscar una cita</span>
          </Link> */}
          <button
            onClick={() => {setRenderCite(true)}}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-200 hover:bg-emerald-950 
             transition-colors duration-400 buttonCustom border border-gray-300 
             hover:border-emerald-400 rounded-3xl px-4 py-2 text-sm"
          >
            <CalendarPlus strokeWidth={2} size={15} />
            <span>Crear una cita</span>
          </button>

          <button
            onClick={() => {setRenderQSearch(true)}}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-200 hover:bg-emerald-950 
             transition-colors duration-400 buttonCustom border border-gray-300 
             hover:border-emerald-400 rounded-3xl px-4 py-2 text-sm"
          >
            <Search strokeWidth={2} size={15} />
            <span>Buscar una cita</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
