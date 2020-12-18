import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import SignIn from "./SignIn";
import Movies from "./Movies";
import Profile from "./profile"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      {/* remove nav */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/movies" component={Movies} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
