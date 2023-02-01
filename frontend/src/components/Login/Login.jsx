import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

import * as LoginAPI from "./LoginAPI";

//Styles
import './/../../assets/styles/login.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//<img className="logo" src={require("./../../imagenes/logo1.png")} alt="logo" />

const Login = () => {

    
    const navigate = useNavigate();

    const initialState = { username: "cliente@gmail.com", password: "1234" };
    const [user, setUser] = useState(initialState);

    const handleInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            response = await LoginAPI.getToken(user);

            const data = await response.json();

            if (response.ok) {
                let token = data.access;
                const decodedToken = decodeToken(token);
                const userInfo = {
                    user_id: decodedToken.user_id,
                    name: decodedToken.name,
                    email: decodedToken.username,
                    role: decodedToken.role
                }

                let contrato = await LoginAPI.getContratos(userInfo.user_id);
                const contratoData = await contrato.json();
                
                setUser(initialState);

                switch (userInfo.role) {
                    case "administrador": 
                        navigate("/admin", {state: userInfo});
                        break;

                    case "cliente":
                        let listaFacturas = [];
                        for(var i=0; i<contratoData.length; i++){
                            let facturas = await LoginAPI.getFacturas(contratoData[i].id_contrato);
                            const facturasData = await facturas.json();
                            listaFacturas.push(facturasData);
                        }
                        userInfo["contratos"] = contratoData;
                        userInfo["facturas"] = listaFacturas;
                        userInfo["contratoSeleccionado"] = contratoData[0].id_contrato;
                        navigate("/cliente/home", {state: userInfo});
                        break;

                    case "operador": 
                        navigate("/operator", {state: userInfo});
                        break;

                    case "gerente": 
                        navigate("/manager", {state: userInfo});
                        break;
                    
                    default:
                        navigate("/")
                        break;
                }
            } 
            else {
                console.log("Login failed");
            }

        } catch (error) {
            console.log(error);
        }

    };



    return (

        <div className="background">
            <div className="electrosoft-title">
                <span>ELECTROSOFT</span>
            </div>


            <div className="form-container">
                <Form id="sign-in-form" className="form" onSubmit={handleSubmit}>

                    <h1 className="form-title" >¡Bienvenido!</h1>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="correo form-text">Correo</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Ingresar Correo" name="username" value={user.username} onChange={handleInputChange} className="position-relative" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="form-text" >Contraseña</Form.Label>
                        <Form.Control type="password" size="lg" placeholder="Ingrese Su Contraseña" name="password" value={user.password} onChange={handleInputChange} />
                    </Form.Group>

                    <div className="d-grid text-container">
                        <Button variant="outline-warning" type="submit" className="submit-button">Ingresar</Button>
                    </div>

                    <div className="my-3 text-container">
                        <span className="subtext">¿Olvidaste tu contraseña? <a className="subtext link" href="/recover">Recuperar Contraseña</a></span>
                        <span className="subtext">¿Aún no tienes cuenta? <a className="subtext link" href="/signup">Registrate</a></span>

                    </div>

                </Form>
            </div>
        </div>

    )
};

export default Login;
