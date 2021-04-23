import React from "react";
import { Switch, Route, Link, useLocation, useRouteMatch, use } from "react-router-dom";

export default function NestedRouter() {
    // const loaction = useLocation()
    const {path} = useRouteMatch()
  return (
    <div>
      <h1>Demo nested router</h1>
      <ul>
        <li>
          <Link to={`${path}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${path}/vue`}>Vue</Link>
        </li>
        <li>
          <Link to={`${path}/angular`}>Angular</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/topic/react">
          <h3>react</h3>
        </Route>
        <Route path="/topic/vue">
          <h3>vue</h3>
        </Route>
        <Route path="/topic/angular">
          <h3>angular</h3>
        </Route>
      </Switch>
    </div>
  );
}
