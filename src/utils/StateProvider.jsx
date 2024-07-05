import React, { Children } from 'react'
import { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({children, initialState, reducer}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useSateProvider = () => useContext(StateContext);