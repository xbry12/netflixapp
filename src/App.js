import React, {Component} from 'react';
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import SignIn from "./SignIn";
import Movies from "./Movies";
import Profile from "./profile";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   fetch("http://localhost:8000/profile/1", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then((output) => console.log({output}));
  // }
  render() {
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
}

export default App;
