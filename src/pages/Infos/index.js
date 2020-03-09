import React from 'react';

import Helmet from 'react-helmet'

function Infos() {
  return (
    <div className="container">
      <Helmet>
        <title>Infos - Vestibulei</title>
      </Helmet>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Informações</h1>
        <p className="lead">Já aqui as Informações não são tão informativas assim.</p>
      </div>
    </div>
  );
}

export default Infos;
