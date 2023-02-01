import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Tarjeta.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PaymentForm = () => {
  const [state, setState] = useState({
    id: useLocation().state.user_id,
    number: "",
    name: "",
    cvc: "",
    expiry: "",
    focus: "",
  });
  

  const handleFocus = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  // code peticion post a la api
  const submitPayment = () => {
    const data = {
      identificacion: state.name,
      numero_tarjeta: state.number,
      fecha_vencimiento: state.expiry,
      cvv: state.cvc,
    };
    axios.post("http://localhost:8000/tarjetas/registrar_tarjetas/", data).then((res) => {
        console.log(res);
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        alert(JSON.stringify(err));
      });
  };
  console.log(submitPayment);

  return (
    <div className="background" >
    <center>
      <div className="card center" id="contenedorTarjeta">
        <div className="card-body">
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          />
          <form>
            <div className="form-group">
              <label htmlFor="number">Número de la tarjeta</label>
              <input
                type="text"
                className="form-control"
                name="number"
                maxLength="16"
                placeholder="Número de tarjeta"
                onChange={handleChange}
                onFocus={handleFocus}
                pattern="[0-9]+"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                maxLength="30"
                placeholder="Nombre"
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="expiry">Vencimiento</label>
                <input
                  type="text"
                  className="form-control"
                  name="expiry"
                  maxLength="4"
                  placeholder="Expiración"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  className="form-control"
                  name="cvc"
                  maxLength="4"
                  placeholder="CVC"
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success btn-block btn-lg mt-4 "
              onClick={submitPayment}
            >
              Añadir Tarjeta
            </button>
          </form>
        </div>
      </div>
    </center>
    </div>
  );
};

export default PaymentForm;
