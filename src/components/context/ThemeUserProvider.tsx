import React, { createContext, useState, ReactNode, useReducer, useEffect } from 'react';

import IState from "../../interfaces/reducer/IState";
import { reducerTraitement } from "../../reducers/reducerTraitement";

//objet user de type usestate qu'on partage
interface IUserContextProps {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    civilite?: string[];
}
//le user context qui permet de recucupérer les données dans les composants enfants 
export const UserContext = createContext<IUserContextProps | undefined>(undefined);
const initialState: IState = { count: 0, civilite: [] };

export const ThemeUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //initialise le useState
    const [user, setUser] = useState('Bob');

    const [state, dispatch] = useReducer(reducerTraitement, initialState);
    
    useEffect(() => {
        dispatch({ type: 'civilite' });
    }, []);

    let civilite = state.civilite;
    //{ civilite:["M", "MME", "Autre"] }

    //créé Provider à partir du UserContext
    return (
        <UserContext.Provider value={{ user, setUser, civilite }}>
            {children}
        </UserContext.Provider>
    );
}