import React from "react";

import { Route, Router, Switch } from "./router-lib";
//const { Route, Router, Switch } = require("./router-lib");

import { Home } from "../pages/Home";
import { News } from "../pages/News";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
    </Router>
  );
};
