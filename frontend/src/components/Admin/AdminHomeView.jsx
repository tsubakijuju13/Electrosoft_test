import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

//Styles
import ".//../../assets/styles/content.css";

//Components


import ResponsiveTable from "../../common/responsivetable";

const AdminView = () => {
  return (
    <div>
      <Card className="title">
        <Card.Body>ADMINISTRACION DE USUARIOS</Card.Body>
      </Card>
      <Row className="row">
        <Col className="col" xs={5}></Col>
      </Row>

      {/* TABLA ADMINISTRACION USUARIO */}
      <div>
        <h1></h1> <ResponsiveTable />
      </div>
    </div>
  );
};
export default AdminView;
