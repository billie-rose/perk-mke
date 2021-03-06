import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Child from "./Admin/Child";
import Oppo from "./Oppo";
import About from "./About";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/oppo" component={Oppo} />
        <Route exact path="/about" component={About} />
        <Route exact path={`/child/:id`} component={Child} />
      </Switch>
    </div>
  );
}

export default App;
