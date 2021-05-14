import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Layout from "./Layout";
import HomePage from "./pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
