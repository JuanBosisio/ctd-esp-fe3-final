import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import axios from "axios";

export const themes = {
  light: {
    font:'black',
    background: 'white'
  },
  dark:{
    font: 'white',
    background: 'black'
  }
};

export const initialState = {currentTheme: themes.light}

export const ThemeContext = createContext([]);

export const ContextGlobal = createContext([]);

export const reducer= ((state, action) => {
  switch (action.type){
    case "TOGGLE_THEME":{
      if (state.currentTheme == themes.light)
        return {state,currentTheme: themes.dark};
      else if (state.currentTheme == themes.dark)
        return {state,currentTheme: themes.light};
    }
    default:
      throw new Error();
    } 
})





export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [data, setData] = useState([])

  useEffect( () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const providerApi = useMemo (()=>({data,setData}),[data,setData]);

  return (
    <ContextGlobal.Provider value={providerApi.data}>
      {children}
    </ContextGlobal.Provider>
  );

  
};

export const ThemeProvider = (({children})=>{

  const [state,dispatch] = useReducer (reducer,initialState);


  return(
    <ThemeContext.Provider value={{currentTheme: themes.light,dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
})
