import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "../common/sidebar";
import Header from "../common/header";

const ClientLayout = () => {

    const {state} = useLocation();
    const redirecTo = "/";

    if (!state ){
        console.log("validación invalida");
        return redirecTo ? <Navigate to={redirecTo} /> : null;
    }
    else{
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar state={state} />
                <div className="main" id="page-content-wrapper">
                    <Header state={state}/>
                    <div div className="container-fluid content-container">
                        {/* <main>{this.props.children}</main> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        )
    }

        
    
};

export default ClientLayout;