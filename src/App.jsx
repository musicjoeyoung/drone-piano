import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Piano from "./Piano";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/piano">
            <Piano />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
