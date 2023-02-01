import React from "react";

// Pagina de quienes somos
const QuienesSomos = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="titulo-about">Nuestra Compañia</h3>
              <div className="underline max-auto"></div>
              <p className="texto-about-us-g">
                Electrosoft es la empresa de energía del Grupo Argos, apasionada
                por las energías renovables y por la eficiencia energética.
                Generamos y transmitimos energía eficiente de fuentes renovables
                con respaldo térmico. Hemos encontrado nuevas maneras de
                asesorar a nuestros clientes para que su hogar, empresa o
                proyecto urbano se conecten y puedan disfrutar de todas las
                ventajas de la nueva era de la energía. Tenemos presencia en
                Colombia, Panamá, Costa Rica y Honduras con una capacidad de
                generación de 1.810 MW desde 28 centrales hídricas, térmicas,
                fotovoltaicas y eólicas y proyectos solares que generaron en el
                año 2019, 5.625 GWh anuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra vision, mission and values */}
      <section className="section fondo-mv">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="titulo-about">Vision, Mision y Valores</h3>
              <div className="underline max-auto"></div>
            </div>
            <div className="col-md-4 text-center">
              <div className="vision">
                <h6>Nuestra Vision</h6>
                <p className="texto-about-us" >
                  Mejorar la vida de nuestros clientes, ayudando a personas,
                  negocios y comunidades a estar más y mejor conectados con el
                  mundo
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="Mision">
                <h6>Nuestra Vision</h6>
                <p className="texto-about-us">
                  Ser una empresa de vanguardia y de Electrosoft, líder en
                  México y con presencia mundial reconocida por nuestra ética
                  empresarial
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="vision">
                <h6>Valores</h6>
                <p className="texto-about-us">
                  Ser un grupo de inversión altamente integrado. Contando con
                  una administración eficiente en cada una de nuestras unidades
                  de negocios, orientada hacia la gente y su desarrollo
                  integral. Estando comprometidos al cien por ciento en el
                  crecimiento y desarrollo de nuestros clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
