import { useReducer } from "react";

// Selecting useReducer over useState makes more sense on bigger or more sophisticated proyects that needs advanced state managment.

// This is the actuall function that manages the reducer.
/**
 *
 * @param {object} state
 * @param {object} action
 * @returns {object} state with actions
 */
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "full":
      return { count: (state.count = 100) };
    default:
      return state;
  }
}

export function Counter() {
  // Creating the useReducer Hook.
  // The difference between the useState is that we can centralize
  // multiple functions
  // State it's the second parameter of the reducer (initial state)
  // the reducer (first parameter) it's the dispatch.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      {/* When clicked, dispatch is fired, and calls the function reducer. */}
      {/* and it passes an object to the reducer. (action) */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <button onClick={() => dispatch({ type: "full" })}>full</button>
    </div>
  );
}
