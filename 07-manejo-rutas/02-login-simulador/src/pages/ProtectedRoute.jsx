import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children}) => {
  
    const {isAuth} = useAuth()

    return isAuth ? children : <Navigate to='/login'/>
}
