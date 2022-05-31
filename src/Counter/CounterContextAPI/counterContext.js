import React, {createContext, useReducer} from "react"
import reducerContext from "./reducer"

//Initial state
const initialState = {
    count: 0
}

export const CounterGlobalContext = createContext(initialState)

export const CounterContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducerContext, initialState)

    return(
        <CounterGlobalContext.Provider value={{ state, dispatch }}>
            { children }
        </CounterGlobalContext.Provider>
    )
}