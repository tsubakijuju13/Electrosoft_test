import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/*import InputGroup from 'react-bootstrap/InputGroup';*/
import Row from 'react-bootstrap/Row';

function FormularioRegistroAdmin() {
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
        <Form.Group as={Col} md="2" controlId="validationCustom01" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue="Chostoy"
            pattern="[A-Za-z-ñ]+"
          />
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Celtiz"
            pattern="[A-Za-z-ñ]+"
          />
          <Form.Control.Feedback>Correcto</Form.Control.Feedback>
        </Form.Group> 

        <Form.Group as={Col} md="5" controlId="validationCustom03">
        <Form.Label>Rol</Form.Label>
        <div class="input-group mb-3" >
          <div class="col-1">
          <label class="input-group-text" for="inputGroupSelect01">Tipo</label>
          </div>
          <div class="col-3">
          <select class="form-select" id="inputGroupSelect01">
          <option value="1">Cliente</option>
          <option value="2">Operador</option>
          <option value="2">Gerente</option>
          <option value="3">Administrador</option>
          </select>
          </div>
        </div>
        </Form.Group>


      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Documento</Form.Label>
          <Form.Control maxlength="20" minlength="3" type="text" placeholder="Numero de Documento" required pattern="[0-9]+" />
          <Form.Control.Feedback type="invalid">
            Ingrese su docuemnto.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <div class="input-group mb-3" >
          <div class="col-1">
          <label class="input-group-text" for="inputGroupSelect01">Tipo</label>
          </div>
          <div class="col-1">
          <select class="form-select" id="inputGroupSelect01">
          <option value="1">Cedula</option>
          <option value="2">Ti</option>
          <option value="3">Pasaporte</option>
          </select>
          </div>
        </div>
      </Row>

        

        <Row className="mb-3"> 
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Direccion</Form.Label>
          <Form.Control  type="text" placeholder="Direccion" required />
          <Form.Control.Feedback type="invalid">
            Escribe tu direccion.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationCustom06">
          <Form.Label>Telefono</Form.Label>
          <Form.Control maxlength="10" minlength="9" type="text" placeholder="Telefono" required pattern="[0-9]+"/>
          <Form.Control.Feedback type="invalid">
            Numero de telefono.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Ingrese su Email.
          </Form.Control.Feedback>
          </Form.Group>

          
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="2" controlId="validationCustom06">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" required />
          <Form.Control.Feedback type="invalid">
            Ingrese su contraseña.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="validationCustom07">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirmar Contraseña" required />
          <Form.Control.Feedback type="invalid">
            Ingrese su contraseña.
          </Form.Control.Feedback>
          </Form.Group>
      </Row>
        

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Estoy de acuerdo con los terminos y condiciones"
          feedback="Debe aceptar antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit">
        Registrar
        </Button>
    </Form>
  );
}

export default FormularioRegistroAdmin;