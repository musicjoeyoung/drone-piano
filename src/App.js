import logo from "./logo.svg";
import "./App.css";
import Piano from "./Piano";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
