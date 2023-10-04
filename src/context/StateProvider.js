
import React, { createContext, useReducer, useContext } from "react"

//Data later
export const StateContext = createContext();

//Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>    
);

//using state of data inside components
export const useStateValue = () => useContext(StateContext);

