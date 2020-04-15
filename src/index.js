import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import { Movie } from "./components/Movie";


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/:id" exact={true} component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
