import React from "react";
import {Nombre} from '../hooks/useInitialState';

export type AppContextProps = {
    state: Nombre,
    createUser: any,
    getUser: any,
    removeFromCart: any,
    addToCart: any,
    getCart: any,
    addToCart1: any,
    removeUser: any
}

const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export default AppContext;