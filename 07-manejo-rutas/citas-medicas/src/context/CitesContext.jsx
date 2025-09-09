import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

// 1.Creating the context
const CitesContext = createContext();

// 3.Creating a personalized hook to simplify the destructuring and import on use.
export const useCitesContext = () => {
  return useContext(CitesContext);
};

// 2.Creating the provider
export const CitesContextProvider = ({ children }) => {
  const [citesList, setCitesList] = useState([]);

  return (
    <CitesContext.Provider value={{ useCitesContext, citesList, setCitesList }}>
      {children}
    </CitesContext.Provider>
  );
};
