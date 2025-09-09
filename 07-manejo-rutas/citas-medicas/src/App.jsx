import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Citas from "./pages/Citas";
import CitaDetalle from "./pages/CitaDetalle";
import NotFound from "./pages/NotFound";
import { CitesContextProvider } from "./context/CitesContext";

function App() {
  return (
    <BrowserRouter>
      <CitesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/cita/:id" element={<CitaDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CitesContextProvider>
    </BrowserRouter>
  );
}

export default App;
