import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/*import InputGroup from 'react-bootstrap/InputGroup';*/
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function FormularioCrearContratoOperador() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const info = {
      id_cliente: form.elements.id_cliente.value,
      fecha_vinculacion: form.elements.fecha_vinculacion.value,
      estado: form.elements.estado.value,
      ciudad: form.elements.ciudad.value,
      direccion: form.elements.direccion.value,
      estrato: form.elements.estrato.value,
      uso_del_servicio: form.elements.uso_del_servicio.value,
    };


    axios
      .post('http://localhost:8000/contrato/', info)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.data);
      });


  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3"> 
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>ID Cliente</Form.Label>
            <Form.Control  type="number" placeholder="Cliente" required />
            <Form.Control.Feedback type="invalid">
              Ingresa un ID valido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Fecha Vinculación</Form.Label>
            <Form.Control type="date" placeholder="Fecha Vinculado" required/>
            <Form.Control.Feedback type="invalid">
              Ingresa una Fecha valida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Estado</Form.Label>
          <Form.Control maxlength="30" type="text" defaultValue="activo" placeholder="Estado Contrato" required />
          <Form.Control.Feedback type="invalid">
            Ingrese el Estado Actual del Contrato.
          </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control maxlength="30" type="text" defaultValue="Cali" placeholder="Ciudad Contrato" required />
          <Form.Control.Feedback type="invalid">
            Ingrese la Ciudad.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Dirección</Form.Label>
          <Form.Control maxlength="40" type="text" placeholder="Dirección" required/>
          <Form.Control.Feedback type="invalid">
            Ingrese una Dirección válida.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Estrato</Form.Label>
          <Form.Control maxlength="10" type="number" min="1" max="5" placeholder="Estrato" required/>
          <Form.Control.Feedback type="invalid">
            Ingrese el Estrato.
          </Form.Control.Feedback>
          </Form.Group>
        </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Uso del Servicio</Form.Label>
          <Form.Control type="text" defaultValue="Domestico" placeholder="Tipo de Uso" required />
          <Form.Control.Feedback type="invalid">
            Ingrese un Tipo de Servicio válido.
          </Form.Control.Feedback>
          </Form.Group>
      </Row>

      <Row>
        <Button type="submit" as={Col} md="2">
          Crear Contrato
        </Button>
      </Row>
    </Form>
  );
}

export default FormularioCrearContratoOperador;