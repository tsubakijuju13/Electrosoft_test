import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Circle, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'

const Geomap = (props) => {

    const [data, setData] = useState([]);
    const data_query_lat_lon = [[6.428055, -9.429499], 
        [21.00789, -10.940835], 
        [-24.703615, -127.439308], [-24.143474, -10.030696], 
        [37.09024, -95.712891], [-32.522779, -55.765835], [-8.874217, 125.727539], 
        [61.52401, 105.318756]] 
        

        

    //Bueno iba a realizar la petición desde aqui pero la idea es hacerlo un componente reutilizable
    //Esto que ven es el get a la ruta que hace la consulta a la API para conseguir la longitud y latitud
    useEffect(() => {
        axios.get('http://localhost:8000/contrato/coordenadas/')
            .then((res) => {
                //Seteo tanto log como lat
                setData(res.data)
                //console.log(res.data);
            })
            .catch((e) => console.log(e.response.data));
    }, []);

    return(
        <MapContainer center={[props.lat, props.lon]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {data.map((coor) => (
                <Circle center={[coor["lat"], coor["lon"]]} color='red' fill='#f03' fillOpacity={0.5} radius={500}>
                    <Popup>
                        Información extra  ....
                    </Popup>
                </Circle>
            ))}
        </MapContainer>
    );
}

export default Geomap