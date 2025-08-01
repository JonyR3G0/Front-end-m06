import { LimpiezaEffect } from "./components/LimpiezaEffect"
import { ExpensiveCalculationComponent } from "./components/CalcTemp"

function App() {

  
  return (
    <>
      <h1>useEffect</h1>
      <LimpiezaEffect/>
      {/* El uso del hook use memo, memoriza la carga sin ser afectado por la actualizacion de otros elementos del DOM */}
      <ExpensiveCalculationComponent/>
    </>
  )
}

export default App
