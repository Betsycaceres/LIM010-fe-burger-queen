import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../src/css/App.css'
import Home from './componentes/Home';
import Mesero from './componentes/mesero';
import Cocina from './componentes/JefeCocina';
import ListoParaServir from "./componentes/ListoParaServir";

export default function App() {
  return (
    <Router>
      <div className="content">
        <React.Fragment>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Mesero />
            </Route>
            <Route path="/cocina">
              <Cocina/>
            </Route>
            <Route path="/despacho">
              <ListoParaServir />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </div>
    </Router>
  );
}
