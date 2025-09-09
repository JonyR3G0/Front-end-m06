import React from "react";

import { Link } from "react-router-dom";
import icon from "../assets/cros.svg";
import { Calendar, Search, CalendarPlus } from "lucide-react";
import { QSearch } from "./QSearch";
import { useState } from "react";
import { CreateCite } from "./CreateCite";

export default function Citas() {
  const [renderQSearch, setRenderQSearch] = useState(false);
  const [renderCite, setRenderCite] = useState(false);

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
      <div className="relative z-10 flex flex-col items-start justify-start min-h-screen text-center p-4 mr-10 ml-10 p-10">
        {/* Tile */}

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">
          LISTA DE CITAS
        </h1>
        {/* Nav */}
          <div className="border border-amber-50 rounded-2xl w-full text-amber-50 p-5 mt-5 text-left">
            <p>Lista Map</p>
          </div>
      </div>
    </div>
  );
}
