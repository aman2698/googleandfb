import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.reducer);
  return (
    <Router>
      <div className="App"></div>
      <Route exact path="/">
        <Login />
      </Route>
      <Switch>
        <Route exact path="/dashbord">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
