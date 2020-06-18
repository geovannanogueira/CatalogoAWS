import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pagina_principal/App';
import Login from './pagina_login/App';
import Servicos from './pagina_servicos/App';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

  const routing =(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/servicos' component={Servicos}/> 
        </Switch>
      </div>
    </Router>
  );

  ReactDOM.render(routing, document.getElementById('root'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
