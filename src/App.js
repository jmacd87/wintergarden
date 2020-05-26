import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Default from "./components/Default";
import Contact from "./components/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {

  render() {
    return (
      <ParallaxProvider>
        <React.Fragment>

          <Navbar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
      </ParallaxProvider>
    );
  }
}

export default App;
