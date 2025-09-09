import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const QSearch = () => {
  const [id, setId] = useState(0);

  const Navigate = useNavigate()

  return (
    <>
      <div className="z-20 absolute h-dvh w-dvw animate-backdropIn transition-all duration-500"></div>

      <div className="z-20 transition-all duration-500 text-amber-50 absolute h-dvh w-dvw flex items-center justify-center text-center">
        <div className="flex items-center justify-center text-center">
          <input
            className="border border-amber-50 rounded-l-2xl p-3 m-0"
            type="number"
            placeholder="# ingresa tu id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <button
            onClick={() => {Navigate(/cita/ + id)}}
            className="rounded-r-2xl border border-amber-50 p-3 m-0"
          >
            <Search />
          </button>
        </div>
      </div>
    </>
  );
};
