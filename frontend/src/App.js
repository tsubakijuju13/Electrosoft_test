import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Styles
import './assets/styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import Login from './components/Login/Login';
import FormularioRegistroAdmin from './components/Admin/FormularioRegistroAdmin';
import Validator from './components/Login/validator';

// Clientes
import Client from './components/Client/Client';
import ConsultaFactura from './components/Client/ConsultaFactura';
import Tarjeta from './components/Client/Tarjeta';
import HistorialPagos from './components/Client/HistorialPagos';

//Empresa
import QuienesSomos from './components/Empresa/QuienesSomos';
import Ayuda from './components/Empresa/Ayuda';

//Operador
import Operator from './components/Operador/Operator';
import Pagos_bancarios from './components/Operador/Pagos_bancarios';
import FormularioRegistroPagosOperador from './components/Operador/FormularioRegistroPagosOperador';
import FormularioCrearFacturaOperador from './components/Operador/FormularioCrearFacturaOperador';
import FormularioCrearContratoOperador from './components/Operador/FormularioCrearContratoOperador';
import FacturasOperador from './components/Operador/facturasOperador';

//Manager
import Manager from './components/Manager/Manager';
import Reporte_consumo from './components/Manager/reporte_consumo';
import Reporte_usuarios from './components/Manager/info_usuarios';

import Signup from './components/Login/Signup';
import RecoveryPassword from './components/Login/RecoveryPass';


import AdminHomeView from './components/Admin/AdminHomeView';
import Geomap from './components/Openstreetmap/Geomap';


//Layout
import ClientLayout from './hocs/ClientLayout';
import HomepageLayout from './hocs/HomepageLayout';
import HomepageLayoutAdmin from './hocs/adminBar';
import HomepageLayoutOperator from './hocs/operatorBar';
import HomepageLayoutManager from './hocs/managerBar';

import {Factura} from './components/Client/Factura.jsx';
import Imprimir from './components/Client/Imprimir.jsx';

//<Route element={<HomepageLayout />}>
function App() {
  return (
    <BrowserRouter>

      <Routes>
               
        {/*rutas inicio */}
        <Route path="/" element={<Login />} />

        {/*rutas registro */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<RecoveryPassword />} />

        {/*rutas cliente */}
        <Route path="cliente" element={<ClientLayout />}>
          <Route index element={<Client />} />
          <Route path="home" element={<Client />} />
          <Route path="consulta-tu-factura" element={<ConsultaFactura />} />
          <Route path="tarjeta-cliente" element={<Tarjeta />} />
          <Route path="historial-de-pagos" element={<HistorialPagos />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="ayuda" element={<Ayuda />} />
        </Route>
        <Route path="/factura" element={<Factura />} />
        <Route path="/imprimir" element={<Imprimir />} />

        {/*rutas empresa */}
        
        

        {/*rutas operador */}
        <Route path="/operator" element={<HomepageLayoutOperator><FacturasOperador/></HomepageLayoutOperator>} />
        <Route path="/operator/pagos_bancarios" element={<HomepageLayoutOperator><Pagos_bancarios/></HomepageLayoutOperator>} />
        <Route path="/crearpagos" element={<HomepageLayoutOperator><FormularioRegistroPagosOperador/></HomepageLayoutOperator>} />
        <Route path="/crearfacturas" element={<HomepageLayoutOperator><FormularioCrearFacturaOperador/></HomepageLayoutOperator>} />
        <Route path="/crearcontratos" element={<HomepageLayoutOperator><FormularioCrearContratoOperador/></HomepageLayoutOperator>} />



        {/*rutas administrador */}

         <Route 
          path="admin" 
          element= { <Validator><HomepageLayoutAdmin><AdminHomeView/></HomepageLayoutAdmin></Validator> } /> 
        
         <Route path="/adminref" element={<HomepageLayout><FormularioRegistroAdmin /></HomepageLayout>} />
        
            
          
        

        {/*rutas manager */}
        <Route path="/manager" element={<HomepageLayoutManager><Manager/></HomepageLayoutManager>} />
        <Route path="manager/geografia_cliente"  element={<HomepageLayoutManager><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayoutManager>} />
        <Route path="/manager/reporte_consumo" element={<HomepageLayoutManager><Reporte_consumo/></HomepageLayoutManager>} />
        <Route path="/manager/reporte_usuarios" element={<HomepageLayoutManager><Reporte_usuarios/></HomepageLayoutManager>} />

        
        <Route path="/reportes"  element={<HomepageLayout><Geomap lat={3.3718534} lon={-76.5495206}/></HomepageLayout>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
