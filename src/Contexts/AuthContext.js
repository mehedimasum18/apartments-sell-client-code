import {  createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContexts.Provider value={allContexts}>
            {children}
        </AuthContexts.Provider>
        
    );
}

export default AuthProvider;