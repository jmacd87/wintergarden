import React, { Component } from "react";
import '../App.css';

export default class HomePage extends Component {
  render() {
    
    return (
      
      <React.Fragment>  

            <div id="parallax-container">
            
               <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax0.png")'}}></div>
                <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax1.png")'}}><img src={require('../Media/First-Drafts-V4.png')} className="logoMain"/></div>
                
                    <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax3.png")'}}></div>
                  <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax4.png")'}}></div>
                <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax5.png")'}}></div>
                <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax6.png")'}}></div>
                <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax7.png")'}}></div>
                <div style={{background: 'url("http://www.firewatchgame.com/images/parallax/parallax8.png")'}}></div>
            </div> 

        <div id="content"> 
            <h1>Limitless Valley</h1>
              <p>The best board game ever.</p>
              <p>Play for ages.
                </p>
                <div className="moose">
                <img src={require('../Media/moose-v3.png')} className="moose"/>
                </div>
                {/* <div className="moose">
                <img src={require('../Media/fox.png')} className="fox"/>
            </div> */}
            {/* <div className="moose">
                <img src={require('../Media/hummingbird.png')} className="bluejay"/>
            </div> */}
            </div>



      </React.Fragment>

    );
  }
}
