import React, { useReducer } from "react"; // Importe React et le hook useReducer de la bibliothèque React
import IState from "../interfaces/reducer/IState";
import { reducerTraitement } from "../reducers/reducerTraitement";

// Déclaration de l'état initial
const initialState: IState = { count: 0, civilite: [] };

// Définition du composant fonctionnel Counter
const UseReducerV1: React.FC = () => {
  // Utilise le hook useReducer pour gérer l'état et les dispatches des actions
  const [state, dispatch] = useReducer(reducerTraitement, initialState);

  // Rendu du composant
  return (
    <div>
        
      {/* Affiche la valeur actuelle du compteur */}
      <p>Count: {state.count}</p>
      <div>Civilité:</div>{" "}
      {state.civilite?.map((value: string, index) => (
        <div key={index}>{value}</div>
      ))}
      <button onClick={() => dispatch({ type: "civilite" })}>
        Afficher Civilité
      </button>
      &nbsp;
      {/* Bouton pour déclencher l'action 'diviser' */}
      <button onClick={() => dispatch({ type: "diviser" })}>Diviser</button>
      &nbsp;
      {/* Bouton pour déclencher l'action 'multiplier' */}
      <button onClick={() => dispatch({ type: "multiplier" })}>
        Multiplier
      </button>
      &nbsp;
      {/* Bouton pour déclencher l'action 'increment' */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      &nbsp;
      {/* Bouton pour déclencher l'action 'decrement' */}
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default UseReducerV1;
