import React from "react";
import SidebarAdmin from ".//../common/sideBarAdmin";
import Header from ".//../common/header";

class HomepageLayoutAdmin extends React.Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                <SidebarAdmin/>
                <div className="main" id="page-content-wrapper">
                    <Header/>
                    <div div className="container-fluid content-container">
                        <main>{this.props.children}</main>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomepageLayoutAdmin;