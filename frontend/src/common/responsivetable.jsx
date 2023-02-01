  import React, { Component } from "react";
  import * as ReactDOM from 'react-dom';
  import axios from "axios";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEdit, faTrashAlt, faSliders } from "@fortawesome/free-solid-svg-icons";
  import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  import "./responsive.css";

  const urlUsuarios = "http://localhost:8000/usuarios/user_info/";
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
        nombre: "",
        apellido: "",
        email: "",
        identificacion: "",
        direccion: "",
        ciudad: "",
        barrio: "",
        telefono: "",
        password: "",
        re_password: "",
        role: "",
      },
    };
  
    peticionGet = () => {
      axios
        .get(urlUsuarios)
        .then((response) => {
          this.setState({ data: response.data });
          this.setState({ constData: response.data});
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
          console.log(error.response.data);
        });
    };
  
    peticionPut = () => {
      axios
        .put(url + this.state.user_id + "/", this.state.form)
        .then((response) => {
          this.modalInsertar();
          this.peticionGet();
        })
        .catch((error) => {
          console.log(error.response.data)
        });
    };
  
    peticionDelete = () => {
      console.log(this.state)
      axios.delete(url_delete + this.state.user_id + "/").then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
      }).catch((error) => {
        console.log(error.response.data)
      });
    };

    changeActive = () => {
      var pelos_peludos = {}

      if (this.state.form.is_active == 'True') {
        pelos_peludos.is_active = 'False'
      }else {
        pelos_peludos.is_active = 'True'
      }

      axios
      .put(url + this.state.user_id + "/change_state/", pelos_peludos)
      .then((data) => {
        console.warn(data.data);
        this.peticionGet();
      })
      .catch((error) => {
        console.warn(error.response.data);
      });
    };
  
    modalInsertar = () => {
      this.setState({ modalInsertar: !this.state.modalInsertar });
    };
  
    seleccionarUsuario = (usuario) => {
      this.setState({
        user_id: usuario.id,
        tipoModal: "actualizar",
        form: {  
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          role: usuario.role,
          is_active: usuario.is_active,
          barrio: usuario.barrio,
          ciudad: usuario.ciudad,
          direccion: usuario.direccion,
          identificacion: usuario.identificacion,
          telefono: usuario.telefono,

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
      var search = this.state.constData.filter(item=>{
        if (item.email.toString().toLowerCase().includes(this.state.busqueda.toLowerCase()) ||
            item.nombre.toString().toLowerCase().includes(this.state.busqueda.toLowerCase())
        )
        
        {
          return item;
        }
      });
      this.setState({data: search});
    }


  
    componentDidMount() {
      this.setState({ data: this.state.data });
      this.peticionGet();
    }

    onChange=async (e) => {
      e.persist();
      await this.setState({busqueda: e.target.value});
      this.filtrarElementos();
      console.log(this.state.busqueda);
    }
  
    render() {
      const { form } = this.state;
      return (
        <div className="App">
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
            Agregar Usuario
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
            <button type="button" className="btnBuscar" >
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>




            <table  className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((usuario) => {
                  return (
                    <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.apellido}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.role}</td>
                      <td>{usuario.is_active == 'True'? "True" : "False"}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.seleccionarUsuario(usuario);
                            this.modalInsertar();
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        {"   "}
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.seleccionarUsuario(usuario);
                            this.setState({ modalEliminar: true });
                          }}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        {"   "}
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            ReactDOM.flushSync(() => {
                              this.seleccionarUsuario(usuario);
                            });
                            this.changeActive()
                          }}
                        >
                          <FontAwesomeIcon icon={faSliders} />
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
                <br />
  
                <label htmlFor="nombre">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={this.handleChange}
                  value={form ? form.nombre : ""}
                />
  
                <br />
                <label htmlFor="apellido">Apellido</label>
                <input
                  className="form-control"
                  type="text"
                  name="apellido"
                  id="apellido"
                  onChange={this.handleChange}
                  value={form ? form.apellido : ""}
                />
                <br />
  
                <label htmlFor="documento">Documento</label>
                <input
                  className="form-control"
                  type="text"
                  name="identificacion"
                  id="documento"
                  onChange={this.handleChange}
                  value={form ? form.identificacion : ""}
                />
  
  
                <label htmlFor="telefono">telefono</label>
                <input
                  className="form-control"
                  type="text"
                  name="telefono"
                  id="telefono"
                  onChange={this.handleChange}
                  value={form ? form.telefono : ""}
                />
  
                <label htmlFor="city">Ciudad</label>
                <input
                  className="form-control"
                  type="text"
                  name="ciudad"
                  id="city"
                  onChange={this.handleChange}
                  value={form ? form.ciudad : ""}
                />
  
                <label htmlFor="barrio">Barrio</label>
                <input
                  className="form-control"
                  type="text"
                  name="barrio"
                  id="barrio"
                  onChange={this.handleChange}
                  value={form ? form.barrio : ""}
                />
  
                <label htmlFor="direccion">Direccion</label>
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  id="direccion"
                  onChange={this.handleChange}
                  value={form ? form.direccion : ""}
                />
  
  
                <br />
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                  value={form ? form.email : ""}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                  value={form ? form.password : ""}
                />
                <br />
                <label htmlFor="password2">Password2</label>
                <input
                  className="form-control"
                  type="password"
                  name="re_password"
                  id="password2"
                  onChange={this.handleChange}
                  value={form ? form.re_password : ""}
                />
                <br />
                <label htmlFor="role">Role</label>
                <input
                  className="form-control"
                  type="text"
                  name="role"
                  id="role"
                  onChange={this.handleChange}
                  value={form ? form.role : ""}
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
  