import IState from "../interfaces/reducer/IState";
import IAction from "../interfaces/reducer/IAction";


export function reducerTraitement(state: IState, action: IAction): IState {
    // Utilise une instruction switch pour gérer les différents types d'actions
    switch (action.type) {
      // Si l'action est 'diviser', retourne un nouvel état avec le compteur divisé par 2
      case "diviser":
        return { ...state, count: state.count! / 2 };
      // Si l'action est 'multiplier', retourne un nouvel état avec le compteur multiplié par 10
      case "multiplier":
        return { ...state, count: state.count! * 10 };
      // Si l'action est 'increment', retourne un nouvel état avec le compteur incrémenté de 1
      case "increment":
        return { ...state, count: state.count! + 1 };
      // Si l'action est 'decrement', retourne un nouvel état avec le compteur décrémenté de 1
      case "decrement":
        return { ...state, count: state.count! - 1 };
        // Si l'action est 'civilite', 
      case "civilite":
          return { ...state, civilite: ["M","MME","Autre"] };
      // Si l'action n'est pas reconnue, lance une erreur
      default:
        throw new Error(); // Lance une erreur si le type d'action n'est pas géré
    }
  }