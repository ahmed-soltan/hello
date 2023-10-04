import {useContext} from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth';
const PrivateRoutes = () => {
    const { user } = useContext(AuthContext)
    return(
        user ? user.email === "admin@admin.com" ? <Outlet/> : <Navigate to="/"/> :<Navigate to="/login"/>
    )
}

export default PrivateRoutes