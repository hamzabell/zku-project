import React, { useContext } from 'react';
import reducer from './reducer';

const AppContext = React.createContext(null);
const useGlobalContext = () => useContext(AppContext);

const DATA = {
    col: 5,
    row: 5,
    puzzle: [0, 11, 9, 0, 0,4, 0, 0,17,0, 11, 0,0,0,9,0,23,0,0,0,0,0, 8,0, 0],
    blocked: [0,3,4,9,15,20,21],
    toFill: [6,7,11,12,13,17,18,19,23,24]
}

const initialState = {
    data: DATA,
    errors: {},
    hasEnded: false,
    reset: null,
}

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

export {GlobalContextProvider, useGlobalContext};
