import React, { useRef} from 'react';
import ReactToPrint from 'react-to-print';
import { useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";

import {Factura} from "./Factura.jsx";
import "./Factura.css";

const Imprimir = () => {
    const componentRef = useRef();

    let state = useLocation().state
    // console.log(state)
    state['ref'] = componentRef

    return (
      <div className='pdf'>
        <Factura state={state}/>
        <center>
        <ReactToPrint
          documentTitle={'Factura'+state.verFactura.no_factura}
          trigger={() => <Button variant='success'>imprimir</Button>}
          content={() => componentRef.current}
        />
        </center>
        
      </div>
    )
};

export default Imprimir;