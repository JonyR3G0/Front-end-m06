import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// --- Tailwind CSS Class Constants ---
const mainContainerClasses = "relative min-h-screen";
const backgroundContainerClasses = "absolute inset-0 bg-white dark:bg-gray-950";
const noiseOverlayClasses =
  "absolute inset-0 opacity-[0.15] dark:opacity-[0.07]";
const gradientOverlay1Classes =
  "absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-700/30 dark:via-transparent dark:to-purple-950/30";
const gradientOverlay2Classes =
  "absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-pink-50/30 dark:from-yellow-950/20 dark:via-transparent dark:to-pink-950/20";
const contentContainerClasses =
  "relative z-10 flex flex-col items-start justify-start min-h-screen text-center mr-10 ml-10 p-10";
const titleClasses =
  "text-5xl font-extrabold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent";
const listContainerClasses =
  "border border-amber-50 rounded-2xl w-full text-amber-50 p-5 mt-5 text-left";

function CitaDetalle() {
  const { id } = useParams();

  // State to hold the list of appointments. Initialize with an empty array.
  const [cites, setCites] = useState([]);
  const [actualCite, setActualCite] = useState({});

  // useEffect hook to load data from localStorage when the component mounts.
  // This ensures the code only runs on the client-side, where localStorage is available.
  useEffect(() => {
    // Retrieve the string from localStorage.
    const savedCitesJSON = localStorage.getItem("citesList");

    // Improvement Note: It's good practice to check if the data exists before parsing.
    if (savedCitesJSON) {
      try {
        // Parse the JSON string back into a JavaScript array and update the state.
        const parsedCites = JSON.parse(savedCitesJSON);
        setCites(parsedCites);
      } catch (error) {
        // Handle potential parsing errors if the data in localStorage is corrupted.
        console.error("Failed to parse cites from localStorage", error);
        setCites([]); // Reset to an empty array on error.
      }
    }
    // Improvement Note: Instead of reading directly from localStorage, this component
    // should ideally use the `useCitesContext` to get the `citesList`. This ensures
    // a single source of truth and that the UI updates reactively if the context changes.
  }, []); // The empty dependency array [] means this effect runs only once after the initial render.

  useEffect(() => {
    setActualCite(cites[id]);
  }, [cites]);

  useEffect(() => {
    console.log(actualCite);
  }, [actualCite]);

  return (
    <div className={mainContainerClasses}>
      {/* --- BACKGROUND --- */}
      <div className={backgroundContainerClasses}>
        {/* noise */}
        <div
          className={noiseOverlayClasses}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* gradient 1 */}
        <div className={gradientOverlay1Classes} />
        {/* gradient 2 */}
        <div className={gradientOverlay2Classes} />
      </div>
      {/* --- BACKGROUND --- */}

      {/* --- Main --- */}
      <div className={contentContainerClasses}>
        <h1 className={titleClasses}>DETALLES DE LA CITA #{id}</h1>
        <div className={listContainerClasses}>
          <div>
            <p>ID de la cita: {id}</p>
            <p>Nombre del paciente: {actualCite ? actualCite.firstName : "cargando"}</p>
            <p>Apellido del paciente: {actualCite ? actualCite.lastName : "cargando"}</p>
            <p>Fecha: {actualCite ? actualCite.date : "cargando"}</p>
            <p>Hora: {actualCite ? actualCite.time : "cargando"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitaDetalle;
