const API_URL = 'http://localhost:8000/login/token/';
const API_SIGNUP_URL = 'http://localhost:8000/usuarios/';
const API_CONTRATO_URL = 'http://localhost:8000/contrato/';
const API_FACTURA_URL = 'http://localhost:8000/factura/';

export const signup = async (user) => {
    return await fetch(API_SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: user.nombre,
            apellido: user.apellido,
            direccion: user.direccion,
            identificacion: user.identificacion,
            telefono: user.telefono,
            ciudad: user.ciudad,
            barrio: user.barrio,
            email: user.email,
            password: user.password,
            re_password: user.re_password,
            role: "Cliente",
            
        })

    })
}


export const getToken = async (user) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    })

}

export const getContratos = async (user_id) => {
    return await fetch(API_CONTRATO_URL + user_id + "/cliente")
}

export const getFacturas = async (contrato_id) => {
    return await fetch(API_FACTURA_URL + contrato_id + "/contrato")
}