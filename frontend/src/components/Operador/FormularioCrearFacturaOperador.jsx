import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as OperadorAPI from './OperadorAPI';

function FormularioCrearFacturaOperador() {

  const initialFactura = { contrato: "", lectura_actual: "" };
  const [factura, setFactura] = useState(initialFactura);

  const handleInputChange = (event) => {
    setFactura({ ...factura, [event.target.name]: event.target.value });
    console.log(factura)
  };


  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    let consumo = Math.floor(Math.random() * 1000);
    let energia = Math.floor(Math.random() * 1000000)
    let alumbrado = 25165
    let total = energia + alumbrado

    setFactura({
      ...factura, consumo: consumo,
      fecha_expedicion: new Date(),
      energia_valor_total: energia,
      alumbrado_valor_total: alumbrado,
      valor_total: total,
      valor_recargo: 1.02 * total
    });

    console.log(factura);
    try {
      const response = await OperadorAPI.postFactura(factura);
      console.log(response);
    }

    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='background'>
      <Form id="form-factura" className="content-container" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="cont">
            <Form.Label>Numero Contrato</Form.Label>
            <Form.Control placeholder="No Contrato" required name="contrato" value={factura.contrato} onChange={handleInputChange} />
            {/* <Form.Control.Feedback type="invalid">
            Ingrese un No de Contrato Valido.
          </Form.Control.Feedback> */}
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="cons">
            <Form.Label>Lectura Registrada</Form.Label>
            <Form.Control placeholder="Lectura Actual" required name="lectura_actual" value={factura.lectura_actual} onChange={handleInputChange} />
            {/* <Form.Control.Feedback type="invalid">
            Ingrese el valor de la Lectura Actual
          </Form.Control.Feedback> */}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <center className="center">
            <Button type="submit" md="2">
              Crear Factura
            </Button>
          </center>
        </Row>
      </Form>
    </div>
  );
}

export default FormularioCrearFacturaOperador;