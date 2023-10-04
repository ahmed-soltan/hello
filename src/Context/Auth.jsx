import { useState , useEffect, createContext } from "react";
import {auth} from '../firebase/firebase.jsx'
import PropTypes from "prop-types";

export const AuthContext = createContext()
export const AuthProvider= ({children}) => {
    const [user , setUser] = useState(null)

    useEffect(()=>{
        const unsubscribed = auth.onAuthStateChanged(user=>{
            setUser(user)
        })
        return unsubscribed
    }, [])
    
    
    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.any.isRequired
  }