import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { isExpired, decodeToken } from "react-jwt";
import * as LoginAPI from "./LoginAPI";
import "react-notifications/lib/notifications.css";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

//Styles
import ".//../../assets/styles/login.css";

const url_api = "http://localhost:8000/usuarios/";

function onChange(value) {
  console.log("Captcha value:", value);
}

const FormularioRegistroAdmin = () => {
  const navigate = useNavigate();

  const initialState = {
    nombre: "",
    apellido: "",
    direccion: "",
    identificacion: "",
    telefono: "",
    ciudad: "Cali",
    barrio: "Valle del lili",
    email: "",
    password: "",
    re_password: "",
    role: "cliente",
    active: true,
  };
  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //Componente que imprime notificaciones dependiendo del tipo pasado
  const notification = (type, msg) => {
    return () => {
      switch (type) {
        case "information":
          NotificationManager.info("Notificación de informacion");
          break;
        case "exito":
          NotificationManager.success(msg, "Exito");
          break;
        case "advertencia":
          NotificationManager.warning("Mensaje del Warning");
          break;
        case "error":
          NotificationManager.error(
            "Mensaje del Error",
            "Titulo tambien xd",
            2000
          );
          break;
      }
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
          let response;
          response = await LoginAPI.signup(user);

          const data = await response.json();
          console.log(data);
          if (response.ok) {
              notification('exito', "Se ha realizado el registro");
              //navigate("/");
          } else {

          }

      } catch (error) {
        NotificationManager.error('Mensaje del Error', "Titulo tambien xd", 2000);
        console.log(error);
      }

      console.log(user);
  };

  return (
    <div className="background">
      <NotificationContainer />
      <Form id="register-form" onSubmit={handleSubmit}>
        <img
          className="logo"
          src={require("../../assets/images/logo1.png")}
          alt="logo"
        />
        <h1 className="form-title">Registro de usuario</h1>
        <div className="container">
          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label className="Letras">Nombre</Form.Label>
              <Form.Control
                /*onBlur={(e) => console.log(e.target.value)}*/
                value={user.nombre}
                name="nombre"
                required
                className="nombre"
                type="text"
                placeholder="Nombre"
                pattern="[A-Za-z-ñ]+"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom02">
              <Form.Label className="Letras">Apellido</Form.Label>
              <Form.Control
                /*onBlur={(e) => console.log(e.target.value)}*/
                value={user.apellido}
                name="apellido"
                required
                type="text"
                placeholder="Last name"
                pattern="[A-Za-z-ñ]+"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback>Correcto</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label className="Letras">Documento</Form.Label>
              <Form.Control
                value={user.identificacion}
                onChange={handleInputChange}
                name="identificacion"
                maxlength="20"
                minlength="3"
                type="text"
                placeholder="Numero de Documento"
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su docuemnto.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="3">
              <Form.Label className="Letras">Tipo de Documento</Form.Label>
              <Form.Select>
                <option>Cedula</option>
                <option>Ti</option>
                <option>Pasaporte</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label className="Letras">Direccion</Form.Label>
              <Form.Control
              name="direccion"
              value={user.direccion}
              onChange={handleInputChange}
              type="text" placeholder="Direccion" required />
              <Form.Control.Feedback type="invalid">
                Escribe tu direccion.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom06">
              <Form.Label className="Letras">Telefono</Form.Label>
              <Form.Control
              value={user.telefono}
              onChange={handleInputChange}
              name="telefono"
                maxlength="10"
                minlength="9"
                type="text"
                placeholder="Telefono"
                required
                pattern="[0-9]+"
              />
              <Form.Control.Feedback type="invalid">
                Numero de telefono.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label className="Letras">Email</Form.Label>
              <Form.Control

                type="Email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su Email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-md-center">
            <Form.Group as={Col} md="2" controlId="validationCustom08">
              <Form.Label className="Letras">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={user.password}
                name="password"
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su contraseña.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom09">
              <Form.Label className="Letras">Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar Contraseña"
                name="re_password"
                value={user.re_password}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese su contraseña.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="4">
              <Form.Group className="justify-content-md-center" id="abajo">
                <Form.Check
                  className="Letras"
                  required
                  label="Estoy de acuerdo con los terminos y condiciones"
                  feedback="Debe aceptar antes de enviar."
                  feedbackType="invalid"
                />
                
                <div> 
                <ReCAPTCHA className="captcha"
                sitekey="6LfD06ojAAAAAAV0fCbRNC_EYfBhE8_hFzHGsfuL" 
                onChange={onChange} />
                </div>

                <center> 
                <Button type="submit">Registrar</Button>
                </center>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default FormularioRegistroAdmin;
