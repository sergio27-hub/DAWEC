import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import  Navbar from './components/layouts/navbar.jsx';
import  Inicio from './components/pages/Inicio.jsx';
import  PerfilDeUsuario from './components/pages/PerfildeUsuario.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/user/:userId" component={PerfilDeUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
