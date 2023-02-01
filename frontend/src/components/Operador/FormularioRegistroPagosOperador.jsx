import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
/*import InputGroup from 'react-bootstrap/InputGroup';*/
import Row from "react-bootstrap/Row";

function FormularioRegistroPagosOperador() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>ID Factura</Form.Label>
            <Form.Control type="number" placeholder="Factura" required />
            <Form.Control.Feedback type="invalid">
              Ingrese un ID de Factura Valido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Valor Pagado</Form.Label>
            <Form.Control type="number" placeholder="$0" required />
            <Form.Control.Feedback type="invalid">
              Ingrese un Monto a Pagar.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Medio de Pago</Form.Label>
            <Form.Select>
              <option>Seleccionar</option>
              <option value="1">Efectivo</option>
              <option value="2">Tarjeta Credito</option>
              <option value="3">Tarjeta Debito</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Ingrese un Medio de Pago Valido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Button type="submit" as={Col} md="2">
            Registrar Pago
          </Button>
        </Row>
      </Form>
  );
}

export default FormularioRegistroPagosOperador;
