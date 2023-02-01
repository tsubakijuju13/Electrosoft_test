import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from ".//../common/sidebar";
import Header from ".//../common/header";

class HomepageLayout extends React.Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div className="main" id="page-content-wrapper">
                    <Header/>
                    <div div className="container-fluid content-container">
                        {/* <main>{this.props.children}</main> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomepageLayout;