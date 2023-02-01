import React from "react";
import { useState } from "react";
import "./ayuda.css";

const Ayuda = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="background">
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item">
            <div className="title50" onClick={() => toggle(index)}>
              <h2>{item.pregunta}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show" : "content"}>
              {" "}
              {item.respuesta}{" "}
            </div>
          </div>
        ))}
      </div>
      
        <div className="contactanos">
          <h2 className="mb-3 mt-3">Contactanos</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Nombre
              </label>
              <input className="ayuda-entrada" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Correo
              </label>
              <input
                className="ayuda-entrada"
                type="email"
                id="email"
                required

              />
            </div >
            <div className="mb-3 " >
              <label className="form-label" htmlFor="message">
                Mensaje
              </label>
              <textarea className="caja" id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
     
    </div>
    </div>
  );
};

const data = [
  {
    pregunta: "¿Qué es la plataforma?",
    respuesta:
      "Es una plataforma que permite a los usuarios encontrar y contratar servicios de manera fácil y segura.",
  },
  {
    pregunta: "¿Cómo funciona?",
    respuesta:
      "Los usuarios pueden buscar servicios en la plataforma, y los proveedores pueden ofrecer sus servicios.",
  },
  {
    pregunta: "¿Cómo puedo registrarme?",
    respuesta:
      "Para registrarse, debe ingresar a la plataforma y completar el formulario de registro.",
  },
  {
    pregunta: "¿Cómo puedo iniciar sesión?",
    respuesta:
      "Para iniciar sesión, debe ingresar a la plataforma y completar el formulario de inicio de sesión.",
  },
  {
    pregunta: "¿Cómo puedo publicar un servicio?",
    respuesta:
      "Para publicar un servicio, debe ingresar a la plataforma y completar el formulario de publicación de servicios.",
  },
  {
    pregunta: "¿Cómo puedo buscar un servicio?",
    respuesta:
      "Para buscar un servicio, debe ingresar a la plataforma y completar el formulario de búsqueda de servicios.",
  },
  {
    pregunta: "¿Cómo puedo contactar a un proveedor?",
    respuesta:
      "Para contactar a un proveedor, debe ingresar a la plataforma y completar el formulario de contacto.",
  },
];

export default Ayuda;
