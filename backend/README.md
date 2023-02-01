```
# Datos para pruebas en la API

localhost:8000/usuarios/   GET

{
    "username": "geider",
    "email": "geideran808087@gmail.com",
    "password": "mami2000",
    "re_password": "mami2000",
    "role": "Cliente",
    "active": true,
    "nombre": "Geider",
    "apellido": "Montano",
    "identificacion": "69696969",
    "direccion": "Cra 89 av. 6ta",
    "barrio": "Braga"
}
{
    "username": "santiago",
    "email": "santirami@gmail.com",
    "password": "soyfandelaslolis",
    "re_password": "soyfandelaslolis",
    "role": "Cliente",
    "active": true,
    "nombre": "Santiago",
    "apellido": "Ramirez",
    "identificacion": "10252556545",
    "direccion": "Calle 6 #6b",
    "barrio": "Llanos del norte"
}
{
    "username": "juanes",
    "email": "chostoy@gmail.com",
    "password": "remasterChostoy",
    "re_password": "remasterChostoy",
    "role": "Cliente",
    "active": true,
    "nombre": "Juan",
    "apellido": "Betancourt",
    "identificacion": "25230147",
    "direccion": "Cra 43 #90-100",
    "barrio": "Sindicio"
}

------- ## -------- ## ------- ## -------- ##------- ## 
Creación Contratos:
http://localhost:8000/contrato/   POST

{
  "estado_contrato": "activo",  ->Default: Opcional(opcional)
  "ciudad": "Medellin",         ->Default: Cali(opcional)
  "direccion": "Cra 2 #5av",
  "departamento": "Antioquia"
  "estrato": "3",
  "uso": "Domestico",           ->Default: Domestico(opcional)
  "id_cliente": 3
}

{
    "fecha_vinculación": "2023-01-29",    ->Default(Se rellena automaticamente)
    "estado_contrato": "activo",          ->Default(Se rellena automaticamente)
    "ciudad": "Pradera",
    "departamento": "Valle del cauca",
    "direccion": "Cra. 10",
    "estrato": "3",
    "uso": "Domestico",                   ->Default(Se rellena automaticamente)
    "id_cliente": 1
},
{
    "fecha_vinculación": "2023-01-29",      ->Default(Se rellena automaticamente)
    "estado_contrato": "activo",            ->Default(Se rellena automaticamente)
    "ciudad": "Manizales",
    "departamento": "Caldas",
    "direccion": "Calle 8",
    "estrato": "1",
    "uso": "Domestico",                     ->Default(Se rellena automaticamente)
    "id_cliente": 2
},
{
    "fecha_vinculación": "2023-01-29",      ->Default(Se rellena automaticamente)
    "estado_contrato": "activo",            ->Default(Se rellena automaticamente)
    "ciudad": "Medellín",
    "departamento": "Antioquia",
    "direccion": "Av. 80",
    "estrato": "3",
    "uso": "Domestico",                     ->Default(Se rellena automaticamente)
    "id_cliente": 3
}

------- ## -------- ## ------- ## -------- ##------- ## 
{
    "fecha_vencimiento": "2023-1-1",
    "estado": "En Mora",
    "consumo_energia": 3,
    "energia_lectura_actual": "12",
    "energia_valor_total": 35667,
    "lys_valor_total": 12314,
    "alumbrado_valor_total": 2345,
    "pago_total": 312314535,
    "codigo_contrato": 1
}
Juanes165 — 02/01/2023 21:59
http://localhost:8000/contrato/
{
    "fecha_vinculación": "2023-1-1",
    "estado_contrato": "Active",
    "ciudad": "cali",
    "direccion": "casrasf",
    "estrato": "2",
    "uso": "1",
    "id_cliente": 1
}
http://localhost:8000/usuarios/
{
    "nombre": "Juan",
    "apellido": "Betancourt",
    "role": "Cliente",
    "identificacion": "123123123",
    "direccion": "casras",
    "ciudad": "cal",
    "barrio": "ascas",
    "telefono": "3124567890",
    "email": "juan@gmail.com",
    "password":"123",
    "re_password":"123"
}
http://localhost:8000/factura/
{
    "fecha_vencimiento": "2022-5-25",
    "estado": "En Mora",
    "consumo_energia": 3,
    "energia_lectura_actual": "12",
    "energia_valor_total": 35667,
    "lys_valor_total": 12314,
    "alumbrado_valor_total": 2345,
    "codigo_contrato": 1,
    "valor_total":441234,
    "valor_recargo": 312314535
}
PARA FILTRAR POR CONTRATO http://localhost:8000/factura/1/contrato/


```