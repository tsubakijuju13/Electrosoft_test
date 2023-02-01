import React, { Component } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import Card from "react-bootstrap/Card";


import "./Factura.jsx";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import axios from "axios";


import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
//import { icon } from "@fortawesome/fontawesome-svg-core";

function ConsultaFactura() {


  const navigate = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const urlFactura = "http://localhost:8000/factura/";
  const urlContrato = "http://localhost:8000/contrato/";

  const [state, setState] = useState(useLocation().state);
  console.log(state);

  const buscarContrato = (contrato) => {
    for (var i = 0; i < state.contratos.length; i++) {
      if (state.contratos[i].id_contrato == contrato) {
        return i;
      }
    }
  };

  const buscarFactura = (factura) => {
    for (
      var i = 0;
      i < state.facturas[buscarContrato(state.contratoSeleccionado)].length;
      i++
    ) {
      if (
        state.facturas[buscarContrato(state.contratoSeleccionado)][i]
          .no_factura == factura
      ) {
        return i;
      }
    }
  };


  const pagar = (no_factura) => {
    const data = {
      cliente: state.user_id,
      factura: no_factura,
    };
    console.log(data)
    axios.post("http://localhost:8000/tarjetas/pagar/", data).then((res) => {
        console.log(res);
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        console.log(JSON.stringify(err));
      });
  };


  const columns = [
    {
      dataField: "no_factura",
      text: "ID",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "fecha_expedicion",
      text: "Fecha de expedición",
      sort: true,
    },
    {
      dataField: "fecha_vencimiento",
      text: "Fecha de vencimiento",
      sort: true,
    },
    {
      dataField: "valor_total",
      text: "Valor",
      sort: true,
    },
    {
      formatter: (cellContent, row) => (
        //boton que imprime la factura en consola
        <button
          className="btn btn-primary"
          onClick={() => {
            const verFactura =
              state.facturas[buscarContrato(state.contratoSeleccionado)][buscarFactura(row.no_factura)];
            // console.log(state.facturas[buscarContrato(state.contratoSeleccionado)][buscarFactura(row.no_factura)]);
            navigate("/imprimir", {state: {verFactura}})
          }}
        >
          Imprimir Factura
        </button>
      ),
      text: "Imprimir Factura",
    },
    {
      formatter: (cellContent, row) => (
        //boton que envia pagar factura a la base de datos y pone en consola el id del usuario y el id de la factura
        <button
          className="btn btn-primary"
          onClick={() => {
            const facturaSeleccionada =
              state.facturas[buscarContrato(state.contratoSeleccionado)][buscarFactura(row.no_factura)];
            pagar(facturaSeleccionada.no_factura);
          }}
        >
          Pagar Factura
        </button>

      ),
    },
  ];

  const changeContrato = (event) => {
    console.log(event.target.value);
    setState({ ...state, contratoSeleccionado: event.target.value });
  };

  return (
    /* drop-down*/
    <div>
      <Card className="title mb-3">
        <Card.Body> FACTURAS </Card.Body>
      </Card>

      <label className="label">Selecciona tu contrato: &nbsp;</label>
      {/* Drop-down linlado a la base de datos */}

      <select
        className=""
        name="contratos"
        value={state.contratoSeleccionado}
        onChange={changeContrato}
      >
        {state.contratos.map((e, key) => {
          return (
            <option key={key} value={e.id_contrato}>
              {e.direccion}
            </option>
          );
        })}
      </select>

      {/* <Select options={columns} labelField="name" valueField="id" onChange={(values) => this.setValues(values)} /> */}
      <br></br>
      <br></br>
      <div className="tabla">
        <BootstrapTable
          keyField="id"
          data={state.facturas[buscarContrato(state.contratoSeleccionado)]}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory()}
          filter={filterFactory()}
          button
        ></BootstrapTable>
      </div>
      
    </div>
  );
}

export default ConsultaFactura;
