import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Logo from './assets/logo.svg';
import Infos from './pages/Infos';
import Helmet from 'react-helmet'

function Routes() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <img src={Logo} alt="Vestibulei Logo" />
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/">Home</Link>
          <Link className="p-2 text-dark" to="/infos">Informações</Link>
          <Link className="p-2 text-dark" to="/404">404</Link>
        </nav>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/infos" exact component={Infos} />

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes

export function NoMatch() {
  return (
    <div className="container">
        <Helmet>
          <title>Erro - Vestibulei</title>
        </Helmet>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Erro</h1>
      </div>

      <div className="alert alert-danger" role="alert">
        Página não encontrada!
      </div>
    </div>
  )
}