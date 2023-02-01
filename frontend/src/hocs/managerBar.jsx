import React from "react";
import SideBarManager from "../common/sideBarManager";
import Header from ".//../common/header";

class HomepageLayoutManager extends React.Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                <SideBarManager/>
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

export default HomepageLayoutManager;