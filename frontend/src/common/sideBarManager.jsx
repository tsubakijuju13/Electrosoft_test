import React from "react";
import { Link } from "react-router-dom";

const SideBarManager = () => {
  return (
    <div className="sidenav" id="sidebar-wrapper">
      <div>
        <Link to="/">
          <div className="sidebar-header">
            <span className="sidebar-header-title">ELECTRO</span>
            <br></br>
            <br></br>
            <span className="text-right">SOFT</span>
          </div>
        </Link>
      </div>
      <div className="sidebar-items">
        <ul className="list-unstyled ps-0">
          <li className="mb-3">
            <Link tag="a" className="" to="/manager">
              <i className="fa fa-dashboard"></i> Estado financiero
            </Link>
          </li>
          <li className="mb-3">
            <Link tag="a" className="" to="/manager/geografia_cliente">
              <i className="fa fa-file-o"></i> Geografia de cliente
            </Link>
          </li>
          <li className="mb-3">
            <Link tag="a" className="" to="/manager/reporte_consumo">
              <i className="fa fa-file-o"></i> Reporte de consumo
            </Link>
          </li>
          <li className="mb-3">
            <Link tag="a" className="" to="/manager/reporte_usuarios">
              <i className="fa fa-file-o"></i> Reporte de usuarios
            </Link>
          </li>
          

          

          {/* collapsable list item example */}
          {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}
        </ul>
      </div>

      <div className="dropdown fixed-bottom-dropdown">
        {/*cerrar cession*/}

        <ul className="list-unstyled ps-0">
          <li className="mb-3">
            <Link tag="a" className="" to="/">
              <i className="fa fa-text-width" aria-hidden="true"></i> Cerrar
              sesión
            </Link>
          </li>
          <li>
            <Link tag="a" className="" to="/client/ayuda">
              <i className="fa fa-text-width" aria-hidden="true"></i> Ayuda
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarManager;
