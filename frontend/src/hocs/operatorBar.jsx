import React from "react";
import SideBarOperador from ".//../common/sideBarOperador";
import Header from ".//../common/header";

class HomepageLayoutOperador extends React.Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
                <SideBarOperador/>
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

export default HomepageLayoutOperador;