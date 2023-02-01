import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

//https://react-bootstrap.github.io/components/navbar/
const Header = ({ state }) => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="page-header">
      <Container>
        <Navbar.Brand>
          <Link
            to="/cliente/quienes-somos"
            className="QuienesSomos"
            state={state}
            color="white"
            style={{ textDecoration: 'none' }}
          >
            {" "}
            Quienes Somos{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="#features">No se</Nav.Link>*/}
            {/* <Nav.Link href="#pricing">Que cosa</Nav.Link>*/}
            {/*<NavDropdown title="Poner aqui" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
    </NavDropdown>*/}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Modo dark</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
