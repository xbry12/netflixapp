import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Movies from "./components/Movies";
import Profile from "./components/profile";
import { Switch, Route } from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("http://localhost:8000/home", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => console.log({ output }));

    // fetch("https://localhost:8000/home", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => console.log({ output }));

    // fetch("https://localhost:8000/movies", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => console.log({ output }));

    // fetch("https://localhost:8000/signin", {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((output) => console.log({ output }));
  }

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
