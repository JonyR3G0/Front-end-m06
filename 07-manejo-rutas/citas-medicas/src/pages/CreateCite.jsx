import { CalendarPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCitesContext } from "../context/CitesContext";
import { useEffect } from "react";

// --- Tailwind CSS Class Constants ---

const backdropClasses =
  "z-20 absolute h-dvh w-dvw animate-backdropIn transition-all duration-500";
const modalWrapperClasses =
  "z-20 transition-all duration-500 text-amber-50 absolute h-dvh w-dvw flex items-center justify-center text-center";
const sectionClasses =
  "flex flex-col items-center justify-center text-center gap-2";
const headerContainerClasses =
  "flex items-center justify-center text-center gap-2";
const titleClasses =
  "text-5xl font-bold bg-gradient-to-r from-slate-50 to-cyan-300 bg-clip-text text-transparent";
const formClasses =
  "flex flex-col items-center justify-center text-center gap-2";
// Improvement Note: `w-xl` is not a standard Tailwind class. Ensure it's defined in your `tailwind.config.js`.
const inputRowClasses = "w-xl flex gap-2";
const inputClasses = "flex-1 border rounded-2xl p-2 text-white"; // Added text color for readability
const idDisplayClasses =
  "w-xl flex gap-2 border border-cyan-300 rounded-2xl p-2 justify-center";
const submitButtonClasses = `
  flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-200 hover:bg-cyan-950 
  transition-colors duration-400 buttonCustom border border-gray-300 
  hover:border-cyan-400 rounded-3xl px-4 py-2 text-sm w-xl
`;

/**
 * CreateCite Component
 *
 * This component renders a modal form to create a new medical appointment ('cite').
 * It uses a context to manage the global list of appointments.
 */
export const CreateCite = () => {
  // Destructure the appointments list and its setter from the context.
  const { citesList, setCitesList } = useCitesContext();
  // Hook for programmatic navigation. Renamed from `Navigate` to `navigate` to follow conventions.
  const navigate = useNavigate();

  /**
   * Handles the form submission.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new appointment object from the form data.
    const formData = new FormData(e.target);
    const newCite = {
      ...Object.fromEntries(formData.entries()),
      id: citesList.length, // Assign a new ID based on the current list length.
    };

    // Create the updated list of appointments.
    const updatedCitesList = [...citesList, newCite];

    // Update the global state.
    setCitesList(updatedCitesList);

    // Reset the form fields for the next entry.
    e.target.reset();

    // --- Improvement Note ---
    // Using `alert()` is disruptive for the user experience. A more modern approach is to use
    // a toast notification library (e.g., react-toastify, sonner) to show a less intrusive message.
    alert("Cita registrada, se redireccionara a la cita despues de aceptar");

    setTimeout(() => {
      navigate(`/cita/${newCite.id}`);
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem("citesList", JSON.stringify(citesList));
  }, [citesList]);

  return (
    <>
      {/* Backdrop for the modal */}
      <div className={backdropClasses}></div>

      {/* Modal content */}
      <div className={modalWrapperClasses}>
        <section className={sectionClasses}>
          <div className={headerContainerClasses}>
            <h1 className={titleClasses}>Crear cita</h1>
          </div>

          <form onSubmit={handleSubmit} className={formClasses}>
            {/* Patient Name Inputs */}
            <div className={inputRowClasses}>
              <input
                className={inputClasses}
                type="text"
                name="firstName"
                placeholder="Nombre(s) del paciente"
                required
              />
              <input
                className={inputClasses}
                type="text"
                name="lastName"
                placeholder="Apellido(s) del paciente"
                required
              />
            </div>

            {/* Date and Time Inputs */}
            <div className={inputRowClasses}>
              <input
                className={inputClasses}
                type="date"
                name="date"
                required
              />
              <input
                className={inputClasses}
                type="time"
                name="time"
                required
              />
            </div>

            {/* Display for the new appointment ID */}
            <div className={idDisplayClasses}>
              <h1>ID de cita #</h1>
              <p>{citesList.length}</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className={submitButtonClasses}>
              <CalendarPlus strokeWidth={2} size={15} />
              <span>Agendar cita</span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};
