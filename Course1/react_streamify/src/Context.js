import React, { useContext, useState } from "react";
import { UseFetch } from "./UseFetch";

const AppContext = React.createContext();

/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {

  const { isLoading, isError, movie } = UseFetch(`${query}`);

  return (
    <AppContext.Provider value={{  movie, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };