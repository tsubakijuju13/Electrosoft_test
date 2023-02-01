import React from "react";

import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

//Styles
import ".//../../assets/styles/content.css";

//Components
import Graph from "./Graph";
import { useLocation } from "react-router";

// imagenes
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

// radom de iamgenes
const imagenes = [banner1, banner2];
const random = Math.floor(Math.random() * imagenes.length);

//const Nombre = () => { return (Login.user.username) };

const Client = () => {

    const { state } = useLocation()

    console.log(state)
    console.log('cliente')

    const checkFacturasPendientes = () => {
        for (let i = 0; i < state.facturas[0].length; i++) {
            if (state.facturas[0][i].estado === "En Mora") {
                return true;
            }
        }
        return false;
    };

    return (
        <div>
            <Card className="title">
                <Card.Body>¡Bienvenido/a de vuelta, {state.name} </Card.Body>
            </Card>
            <Row className="row">
                <Col className="col" xs={5}>
                    <Card className="content-card" >
                        <Card.Body>
                            ESTADO DE FACTURA:
                            {checkFacturasPendientes() ? (
                                <span className="red-text"> Pendiente</span>
                            ) : (
                                <span className="green-text"> Al día</span>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row">
                <Col className="col" xs={5}>
                    <Graph state={state} />
                </Col>
                <Col className="col" xs={1}></Col>

                <Col className="col" xs={4}>
                    <Row className="row">
                        <Card className="content-card">
                            <Card.Body>
                                Dirección {state.contratos[0].direccion} <br />
                                Estrato {state.contratos[0].estrato} <br />
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="row">
                        <Col className="col">
                            <Card className="content-card">
                                <Card.Body>
                                    - Tu consumo en el último mes fue de {state.facturas[0][0].consumo_energia} kWh
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className="publicity">
                {/* poner imagenes de publicidad */}
                <Link to="/client/nuevo_ontrato" target="_blank">
                    <img src={imagenes[random]} alt="publicidad" className="baner" />
                </Link>
            </div>
        </div>
    );
};

export default Client;