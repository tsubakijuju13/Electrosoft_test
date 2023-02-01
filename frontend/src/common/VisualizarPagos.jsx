import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const url = "http://localhost:8000/usuarios/";

class App extends Component {
  state = {
    data: [],
    form: {
      name: "",
      last_name: "",
      email: "",

    },
  };

  peticionGet = () => {
    axios.get(url).then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
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

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
       {/*<br /> */} 
        <table className="table ">
          <thead>
            <tr>
              <th>Numero de Factura</th>
              <th>Fecha de Pago</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((usuario) => {
              return (
                <tr>
                  <td>{usuario.user_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;