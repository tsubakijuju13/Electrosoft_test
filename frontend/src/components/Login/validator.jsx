import {Navigate, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const Validator = ({ isAllowed, children, redirecTo= "/" }) => {

    const {state} = useLocation();
    if (!state ){
        console.log("validación invalida");
        return redirecTo ? <Navigate to={redirecTo} /> : null;
    }
    else
    
    {
        return children? children : <Outlet />;
    }

};

export default Validator;