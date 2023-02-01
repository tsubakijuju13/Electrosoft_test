import React, { Component } from "react";
import "./Factura.css";
import { Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner3 from "../../assets/images/banner1.png"
import banner4 from "../../assets/images/banner2.png";
import codigo from "../../assets/images/codigos.jpg";

import "./Factura.jsx";

//const imagen = "https://drive.google.com/file/d/1rSquirLKxlxxSBWvPx8FUU-0YRIqEVDp/view?usp=share_link"
const imagen = "../../assets/images/logo.svg";
//import {Prueba} from './prueba.jsx';
// radom de iamgenes
const imagenes = [banner3,banner4];
const random = Math.floor(Math.random() * imagenes.length);

export const Factura = ({ state }) => {
  const factura = state.verFactura;

  return (
    <div
      ref={state.ref}
      // style={{ width: "100%", height: "80%", marginTop: "60px" }}
    >
      {/* DISEÑO FACTURA */}
      <div className="container invoice">
        <div className="invoice-header">
          <Row className="row">
            <Col className="col" xs={5}>
              <h3>
                Factura <small>#{factura.no_factura}</small>
              </h3>
              <h6 class="text-muted">
                NO: #{factura.no_factura} | Expedicion:{" "}
                {factura.fecha_expedicion}{" "}
              </h6>
            </Col>
            <Col xs={5}>
              <ul className="media-body list-unstyled">
                <li>
                  <strong>Electrosoft</strong>
                </li>
                <li>Innovacion energetica</li>
                <li>Aragan City, 3 piso</li>
                <li>soporte@electrosoft.com</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="invoice-body">
          <div className="row">
            <div className="col-xs-5">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 class="panel-title">Electrosoft</h3>
                </div>
                <div className="panel-body">
                  <dl className="dl-horizontal">
                    <dt>Compañia</dt>
                    <dd>Electrosoft Corporation</dd>
                    <dt>Direccion</dt>
                    <dd>Aragan City, 3 piso</dd>
                    <dt>Telefono</dt>
                    <dd>123-456-7890</dd>
                    <dt>Email</dt>
                    <dd>electrosoft@gmail.com</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-xs-7">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">Detalles de factura</h3>
                </div>
                <div class="panel-body">
                  <dl class="dl-horizontal">
                    <dt>Factura No</dt>
                    <dd>{factura.no_factura}</dd>
                    <dt>Fecha</dt>
                    <dd>{factura.fecha_expedicion}</dd>
                    <dt>Expira en</dt>
                    <dd>{factura.fecha_vencimiento}</dd>
                    <dt>Valor total</dt>
                    <dd>{factura.valor_total}</dd>
                    <dt>Estado</dt>
                    <dd>{factura.estado}</dd>
                    <dt>&nbsp;</dt>
                    <dd>&nbsp;</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Servicios</h3>
            </div>
            {/* tabla de servicios */}
            <table class="table table-bordered table-condensed">
              <thead>
                <tr>
                  <th class="text-center colfix">Concepto</th>
                  <th class="text-center colfix">Consumo </th>
                  <th class="text-center colfix">Energia Total</th>
                  <th class="text-center colfix">Lectura Actual</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="text-center colfix">Servicio Energetico</td>
                  <td class="text-center colfix">
                    Kwh {factura.consumo_energia}
                  </td>
                  <td class="text-center colfix">
                    ${factura.energia_valor_total}
                  </td>
                  <td class="text-center colfix">
                    Kwh {factura.energia_lectura_actual}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* tabla de totales */}
          <div class="panel panel-default">
            <table class="table table-bordered table-condensed">
              <thead>
                <tr>
                  <th class="text-center colfix">Alumbrado</th>
                  <th class="text-center colfix">Estado </th>
                  <th class="text-center colfix">Energia Total</th>
                  <th class="text-center colfix">Total a Pagar</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="text-center colfix">
                    ${factura.alumbrado_valor_total}
                  </td>
                  <td class="text-center colfix">{factura.estado}</td>
                  <td class="text-center colfix">
                    ${factura.energia_valor_total}
                  </td>
                  <td class="text-center colfix">${factura.valor_total}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row">
            <div class="col-xs-7">
              <div class="panel panel-default">
                <div class="panel-body ">
                  <h>Nota</h>
                  <p /*style="margin:3px 0 5px"*/>
                    {" "}
                    Actividad económica principal 3514. Grandes Contribuyentes
                    según Resolución # 9061 del 10 de diciembre de 2020.
                    Responsable impuesto sobre las ventas.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xs-5">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">Metodos de Pago</h4>
                </div>
                <div class="panel-body">
                  <p>
                    Por su comodidad puede realizar el pago de su factura en
                    cualquiera de los siguientes bancos:
                  </p>
                  <ul class="list-unstyled">
                    <li>
                      Chostoy Bank - <span class="mono">MO123456789456123</span>
                    </li>
                    <li>
                      Joroco Bank - <span class="mono"> MO123456789456123</span>
                    </li>
                    <li>
                      Kigrium Bank - <span class="mono">MO123456789456123</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <center> 
          <img src={codigo} alt="codigo de barras" className="codigo-barras"  />
        </center>
          <div className="publicity">
          {/* poner imagenes de publicidad */}
          <img src={imagenes[random]} alt="publicidad" className="baner-factura" />
        </div>
        </div>


        

        <div class="invoice-footer">
          Gracias por elegir nuestros servicios.
          <br /> Esperamos que su experiencia con nosotros sea satisfactoria.
          <br />
          <strong>~ELECTROSOFT~</strong>
        </div>
      </div>
    </div>
  );
};
