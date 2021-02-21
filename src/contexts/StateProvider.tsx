import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext<any>(null);

export const StateProvider: React.FC<any> = ({ reducer, initialState, children }: any) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
