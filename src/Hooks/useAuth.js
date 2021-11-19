import { useContext } from 'react';
import { AuthContexts } from '../Contexts/AuthContext';


const useAuth = () => {
   
    return useContext(AuthContexts);
};

export default useAuth;