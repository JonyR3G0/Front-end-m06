import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  return (
    <div className="flex text-center text-lime-400 flex-col items-center">
      <h1 className="text-5xl p-5">Registro de cambios</h1>
      <p className="pb-3 text-fuchsia-800">
        <i>Demo tecnica useRef, useReducer, useCallback</i>
      </p>

      <div>
        <h2 className="text-2xl">Contador: {state.count}</h2>
        <button
          className="bg-cyan-300 rounded-2xl p-2 m-1 text-cyan-950"
          ref={incrementBtnRef}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="bg-fuchsia-500 rounded-2xl p-2 m-1 text-fuchsia-950"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

        <button ref={incrementBtnRef} onClick={handleIncrement}>
          +
        </button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <div className="m-3 bg-black/50 w-150 text-left text-lime-400 p-2 rounded-2xl h-100 overflow-y-scroll">
        <h3 className="italic underline font-bold text-fuchsia-700">Historial de cambios:</h3>
        <ul>
          {state.history.map((entry, index) => (
            <li key={index}><strong>web@user$:</strong> <i>{entry}</i></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
