import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";



const Sidebar = ({ state }) => {

    return (
        <div className="sidenav" id="sidebar-wrapper">
            <div>
                <Link to="/">
                    <div className="sidebar-header">
                        <span className="sidebar-header-title">ELECTRO</span>
                        <br></br><br></br>
                        <span className="text-right">SOFT</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-3">
                        <Link to="/cliente/home" state={state}>
                            <i className="fa fa-dashboard"></i> Resumen
                        </Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/cliente/consulta-tu-factura" state={state}>
                            <i className="fa fa-file-o"></i> Consulta tu factura
                        </Link>
                    </li>

                    <li className="mb-3">
                        <Link to="/cliente/tarjeta-cliente" state={state}>
                            <i className="fa fa-file-o"></i> Ingresa tu tarjeta
                        </Link>
                    </li>

                
                </ul>
            </div>

            <div className="dropdown fixed-bottom-dropdown">

                <ul className="list-unstyled ps-0">
                    <li>
                        <Link to="/cliente/ayuda" state={state}>
                            <i className="fa fa-text-width" aria-hidden="true"></i> Ayuda
                        </Link>
                    </li>
                </ul>
            </div>
        </div>


    )

};

export default Sidebar;