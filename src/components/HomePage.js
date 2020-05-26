import React, { Component } from "react";
import '../App.css';

export default class HomePage extends Component {
  render() {

    return (
      <React.Fragment>
        <div id="parallax-container">
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax0.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax3.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax4.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax5.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax6.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax7.png")' }}></div>
          <div style={{ background: 'url("http://www.firewatchgame.com/images/parallax/parallax8.png")' }}></div>
        </div>
        <div id="content">
          <h1>Parallax Effect</h1>
          <p>Scrolling is fun</p>
          <p>with the parallax effect</p>
        </div>
      </React.Fragment>
    );
  }
}
