import * as React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import { ComponentA } from "components/ComponentA";
import { ComponentB } from "components/ComponentB";

const App = (): JSX.Element => (
  <Router>
    <h1>React Components</h1>

    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/componentA">Component A</NavLink>
        </li>
        <li>
          <NavLink to="/componentB">Component B</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/">
        <p>Test that everything renders correctly</p>
      </Route>

      <Route path="/componentA">
        <ComponentA />
      </Route>
      <Route path="/componentB">
        <ComponentB />
      </Route>
    </Switch>
  </Router>
);

export default App;
