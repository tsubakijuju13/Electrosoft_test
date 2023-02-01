import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
//import "./responsive.css";

const urlfactura = "http://localhost:8000/factura/";
const url = "http://localhost:8000/usuarios/";
const url_delete = "http://localhost:8000/delete_user/";

class App extends Component {
  state = {
    busqueda: "",
    user_id: "",
    constData: [],
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      no_factura: "",
      fecha_expedicion: "",
      fecha_vencimiento: "",
      valor_total: "",
      valor_recargo: "",
      estado: "",
    },
  };

  peticionGet = () => {
    axios
      .get(urlfactura)
      .then((response) => {
        this.setState({ data: response.data });
        this.setState({ constData: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      })

      .catch((error) => {
        console.log(error.data);
      });
  };

  peticionPut = () => {
    axios
      .put(url + this.state.user_id + "/", this.state.form)
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
      });
  };

  peticionDelete = () => {
    console.log(this.state);
    axios
      .delete(url_delete + this.state.user_id + "/")
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarFactura = (factura) => {
    this.setState({
      user_id: factura.id,
      tipoModal: "actualizar",
      form: {
        no_factura: factura.no_factura,
        fecha_expedicion: factura.fecha_expedicion,
        fecha_vencimiento: factura.fecha_vencimiento,      
        estado: factura.estado,
        codigo_contrato: factura.codigo_contrato,
        alumbrado_valor_total: factura.alumbrado_valor_total,
        consumo_energia: factura.consumo_energia,
        energia_lectura_actual: factura.energia_lectura_actual,
        energia_valor_total: factura.energia_valor_total,
        valor_total: factura.valor_total,
      },
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  filtrarElementos = () => {
    console.log(this.state.constData);
    var search = this.state.constData.filter((item) => {
      if (
        item.no_factura
          .toString()
          .toLowerCase()
          .includes(this.state.busqueda.toLowerCase())
      ) {
        return item;
      }
    });
    this.setState({ data: search });
  };

  componentDidMount() {
    this.setState({ data: this.state.data });
    this.peticionGet();
  }

  onChange = async (e) => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
    console.log(this.state.busqueda);
  };

  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <Card className="title">
          <Card.Body>ADMINISTRACION DE FACTURAS</Card.Body>
        </Card>
        <br />
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ form: null, tipoModal: "insertar" });
            this.modalInsertar();
          }}
        >
          Agregar Factura
        </button>
        {/* Caja de busqueda
          <input class="form-control mt-3" id="myInput" type="text" placeholder="Search.."></input> */}
        <br />
        <br />

        <div className="table-responsive">
          <div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="textField"
              name="busqueda"
              value={this.state.busqueda}
              onChange={this.onChange}
            />
            <button type="button" className="btnBuscar">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha de expedición</th>
                <th>Fecha de vencimiento </th>
                <th>Valor</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((factura) => {
                return (
                  <tr key={factura.no_factura}>
                    <td>{factura.no_factura}</td>
                    <td>{factura.fecha_expedicion}</td>
                    <td>{factura.fecha_vencimiento}</td>
                    <td>{factura.valor_total}</td>
                    <td>{factura.estado}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.seleccionarFactura(factura);
                          this.modalInsertar();
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      {"   "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.seleccionarFactura(factura);
                          this.setState({ modalEliminar: true });
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.modalInsertar()}
            ></span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="numero_factura">Numero de factura</label>
              <input
                className="form-control"
                type="text"
                name="no_factura"
                id="no_factura"
                onChange={this.handleChange}
                value={form ? form.no_factura : ""}
              />

              <br />
              <label htmlFor="fecha_expedicion">Fecha de expedición</label>
              <input
                className="form-control"
                type="text"
                name="fecha_expedicion"
                id="fecha_expedicion"
                onChange={this.handleChange}
                value={form ? form.fecha_expedicion : ""}
              />
              <br />

              <label htmlFor="fecha_vencimiento">Fecha de Vencimiento</label>
              <input
                className="form-control"
                type="text"
                name="fecha_vencimiento"
                id="fecha_vencimiento"
                onChange={this.handleChange}
                value={form ? form.fecha_vencimiento : ""}
              />

              <label htmlFor="estado">Estado</label>
              <input
                className="form-control"
                type="text"
                name="estado"
                id="estado"
                onChange={this.handleChange}
                value={form ? form.estado : ""}
              />

              <label htmlFor="codigo_contrato">Codigo de contrato</label>
              <input
                className="form-control"
                type="text"
                name="codigo_contrato"
                id="codigo_contrato"
                onChange={this.handleChange}
                value={form ? form.codigo_contrato : ""}
              />

              <label htmlFor="valor_alumbrado">Valor Alumbradi</label>
              <input
                className="form-control"
                type="text"
                name="alumbrado_valor_total"
                id="alumbrado_valor_total"
                onChange={this.handleChange}
                value={form ? form.alumbrado_valor_total : ""}
              />

              <label htmlFor="consumo_energia">Consumo de energia</label>
              <input
                className="form-control"
                type="text"
                name="consumo_energia"
                id="consumo_energia"
                onChange={this.handleChange}
                value={form ? form.consumo_energia : ""}
              />

              <br />
              <label htmlFor="lectura_energia">Lectura actual de energia</label>
              <input
                className="form-control"
                type="text"
                name="energia_lectura_actual"
                id="energia_lectura_actual"
                onChange={this.handleChange}
                value={form ? form.energia_lectura_actual : ""}
              />
              <br />
              <label htmlFor="energia_total">Energia valor total</label>
              <input
                className="form-control"
                type="text"
                name="energia_valor_total"
                id="energia_total"
                onChange={this.handleChange}
                value={form ? form.energia_valor_total : ""}
              />
              <br />
              <label htmlFor="valor_total">Valor total</label>
              <input
                className="form-control"
                type="text"
                name="valor_total"
                id="valor_total"
                onChange={this.handleChange}
                value={form ? form.valor_total : ""}
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal === "insertar" ? (
              <button
                className="btn btn-success"
                onClick={() => /*console.log(this.state)*/ this.peticionPost()}
              >
                Insertar
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.peticionPut()}
              >
                Actualizar
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estás seguro que deseas eliminar a este usuario{" "}
            {form && form.nombre}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.peticionDelete()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
