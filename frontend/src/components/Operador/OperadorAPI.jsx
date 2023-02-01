const API_CONTRATO_URL = 'http://localhost:8000/contrato/';
const API_FACTURA_URL = 'http://localhost:8000/factura/';

export const postFactura = async (factura) => {
    console.log(JSON.stringify({
        fecha_expedicion: '2023-02-01',
        fecha_vencimiento: '2023-02-16',
        consumo_energia: factura.consumo,
        energia_lectura_actual: factura.lectura_actual,
        energia_valor_total: factura.energia_valor_total,
        alumbrado_valor_total: factura.alumbrado_valor_total,
        valor_total: factura.valor_total,
        valor_recargo: factura.valor_recargo,
        codigo_contrato: factura.contrato
      }))
    return await fetch(API_FACTURA_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fecha_expedicion: '2023-02-01',
            fecha_vencimiento: '2023-02-16',
            consumo_energia: factura.consumo,
            energia_lectura_actual: factura.lectura_actual,
            energia_valor_total: factura.energia_valor_total,
            alumbrado_valor_total: factura.alumbrado_valor_total,
            valor_total: factura.valor_total,
            valor_recargo: factura.valor_recargo,
            codigo_contrato: factura.contrato
          })

    }).catch((error) => {
        console.error('Error:', error);
    });
}


export const getContratos = async (contrato_id) => {
    return await fetch(API_CONTRATO_URL + contrato_id)
}

export const getFacturas = async (contrato_id) => {
    return await fetch(API_FACTURA_URL + contrato_id + "/contrato")
}