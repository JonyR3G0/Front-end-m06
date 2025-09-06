import { useReducer, useRef, useCallback, useEffect } from "react";

const savedHistory = JSON.parse(localStorage.getItem("history"));
const savedCount = parseInt(localStorage.getItem("count"));

const initialState = { count: 0, history: [] };
let userInput = null;

// Main state managment function
function reducer(state, action) {
  switch (action.type) {
    case "restoreHistory":
      return {
        count: savedCount,
        history: [...savedHistory],
      };
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
    case "userInput":
      return {
        count: userInput,
        history: [...state.history, `UI (Nuevo valor: ${userInput})`],
      };
    case "reset":
      return initialState;
    case "undo": {
      //   If we have nothing or the first action is "undoed", it's basically a restart.
      if (state.history.length === 0 || state.history.length === 1) {
        return initialState;
      } else {
        // As we need to return something, we will return the last good element
        // which happen to be, 2 positions behind the last.
        const newHistory = state.history.slice(0, state.history.length - 2);
        const lastGoodElement = state.history.slice(
          state.history.length - 2,
          state.history.length - 1
        );
        // Maybe tere's a more sophysticated way to do this rather tha this humungus thing, but it works
        // it works well and without bugs.

        // I found some bugs without converting to string, working with lastGoodElement[0][(letter)]
        // So, to get arround that, to string first
        const lastGoodElementString = lastGoodElement.toString();
        // Then, we slice the part that contains the prev calculated on the messaje, and till the end -1
        // to cover infinity cases of negative numbers and with all the 0's that you want.
        // finally we parse the string number to int, so this way it gets back as a number.
        const newCount = parseInt(
          lastGoodElementString.slice(16, lastGoodElementString.length - 1)
        );
        return {
          count: newCount,
          history: [...newHistory, lastGoodElement],
        };
      }
    }
    default:
      return state;
  }
}

export function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementBtnRef = useRef(null);

  //   Retrieve saved information on loading ONLY if exists
  useEffect(() => {
    if (savedCount) {
      dispatch({ type: "restoreHistory" });
    }
  }, []);

  // Saving states every time
  useEffect(() => {
    localStorage.setItem("count", state.count);
    localStorage.setItem("history", JSON.stringify(state.history));
  }, [state]);

  // Focus on button when open
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  //   ===== HANDLERS =====
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  const handleInput = useCallback((e) => {
    // SUPER basic validation (only paliative)
    userInput = isNaN(parseInt(e.target.value)) ? 0 : e.target.value;
    userInput = Math.floor(userInput);
    if (e.key === "Enter") dispatch({ type: "userInput" });
  }, []);

  //   xX===== HANDLERS =====Xx

  return (
    // Main container
    <div className="flex text-center text-lime-400 flex-col items-center">
      {/* <p className="text-[30rem] blur-sm absolute">{state.count}</p> */}
      <h1 className="text-5xl p-5">Registro de cambios</h1>
      <p className="pb-3 text-amber-50">
        <i>Demo tecnica useRef, useReducer, useCallback</i>
      </p>
      {/* Info and buttons layer */}
      <div>
        <div className="flex">
          <h2 className="text-2xl flex-1 font-bold text-amber-50 bg-slate-500 text-center rounded-2xl mb-2 mr-1">
            {" "}
            {state.count}
          </h2>
          <input
            className=" flex-1 border-2 p-1 border-slate-500 text-amber-50 rounded-2xl h-max mb-2 ml-1"
            type="number"
            step={1}
            onKeyDown={handleInput}
            placeholder="Enter para confirmar"
          />
        </div>

        <button
          className="border-2 bg-lime-950 p-2 m-1 rounded-2xl"
          ref={incrementBtnRef}
          onClick={handleIncrement}
        >
          Incrementar
        </button>

        <button
          className="border-2 bg-lime-950 p-2 m-1 rounded-2xl"
          onClick={handleDecrement}
        >
          Decrementar
        </button>

        <button
          className="border-2 bg-lime-950 p-2 m-1 rounded-2xl"
          onClick={handleUndo}
        >
          Deshacer
        </button>

        <button
          className="border-2 bg-lime-950 p-2 m-1 rounded-2xl"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
      {/* Console emulation layer */}
      <div className="m-3 bg-black/50 text-fuchsia-800 w-150 text-left p-2 rounded-2xl h-100 overflow-y-scroll">
        <h3 className="font-bold text-amber-50 bg-slate-500 text-center rounded-2xl mb-2">
          Historial de cambios web@user$
        </h3>
        <ul>
          {state.history.map((entry, index) => (
            <li key={index}>
              <strong className=" text-lime-400 ">web@user$:</strong>{" "}
              <i>{entry}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
