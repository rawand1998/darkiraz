import { Navigate ,useLocation } from "react-router-dom";
import React from 'react'
// import {useAuth} from './AuthContext'
import { useAuth } from './AuthProvider';

function RequiredAuth({children}) {
    const {currentUser} = useAuth();
     const location = useLocation(); // عشان
   
    //لو ما في يوزر روح سجل دخول
    if(!currentUser){
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
  return children
}

export default RequiredAuth