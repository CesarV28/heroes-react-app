import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

import { types } from "../types/types";


const init = () => {
  
  const user = JSON.parse( localStorage.getItem('[USER]') );

  return {
    logged: !!user,
    user: user,
  }

}

export const AuthProvider = ({ children }) => {

   const [ authState, dispatch ] = useReducer( authReducer, {}, init);


   const login  = ( name = '') => {

    const user = { id: 28, name };

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('[USER]', JSON.stringify( user ) );
    
    dispatch(action);
    
   }

   const logout = () => {
    localStorage.removeItem('[USER]');

    const action = { type: types.logout }

    dispatch(action)
   }

  return (
    <AuthContext.Provider value={{
      ...authState,
      // Methos
      login: login,
      logout: logout
    }} >
        { children }
    </AuthContext.Provider>
  );
}
