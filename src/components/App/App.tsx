import * as React from "react";
import { CookiesProvider } from "react-cookie";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import ComponentA from "components/ComponentA";
import { ComponentB } from "components/ComponentB";

import "bulma/css/bulma.min.css";

const App = (): JSX.Element => (
  <Router>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">React Components</h1>
        </div>
      </div>
    </section>

    <nav>
      <div className="container">
        <ul className="columns">
          <li className="column">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="column">
            <NavLink to="/componentA">Component A</NavLink>
          </li>
          <li className="column">
            <NavLink to="/componentB">Component B</NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <Switch>
      <Route exact path="/">
        <p>Test that everything renders correctly</p>
      </Route>

      <Route path="/componentA">
        <CookiesProvider>
          <ComponentA />
        </CookiesProvider>
      </Route>
      <Route path="/componentB">
        <ComponentB />
      </Route>
    </Switch>
  </Router>
);

export default App;
