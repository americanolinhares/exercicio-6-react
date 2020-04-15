import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Movie } from "./components/Movie";
import { Favorites } from "./components/Favorites";
import { Store } from "./store";


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/movies/:id" exact={true} component={Movie} />
        <Route path="/favorites" exact={true} component={Favorites} />
      </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
