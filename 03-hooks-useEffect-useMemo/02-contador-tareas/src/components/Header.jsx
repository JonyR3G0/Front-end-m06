import React from "react";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";

export const Header = () => {
  return (
    <div className="flex content-center justify-between border-1 p-4 w-dvw h-auto">
      <div>
        <h1 className="text-gray-100 text-2xl font-thin">
          ⚛ To-do <span className="font-normal italic text-sky-400">clock!</span>
        </h1>
      </div>
      <div>
        <p className="text-amber-50">Rad away!</p>
      </div>
    </div>
  );
};
