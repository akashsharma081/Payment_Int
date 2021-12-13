import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Winter from '../Compo/Winter';

export const GlobalState=(props)=>{
return(<div><p>User course:{props.name}</p></div>);
}


//Intial State
const initialState={
    transactions: [
          { id: 1, text: "", amount: 20 }, 
        ]
}

//Create Context
export const GlobalContext =createContext(initialState); 

//Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer , initialState);

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,}}>
           {children}    
        </GlobalContext.Provider>
        )
}