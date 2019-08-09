import React, { Component } from "react";
import '../App.css';

export default class ProductList extends Component {
  render() {
    
    return (
      
      <React.Fragment>  
  <h1>Parallax Effect</h1>
    <p>The parallax code is from Collin Delphia's CodePen <a href="https://codepen.io/Kikoku/pen/PWyyVg">here</a>.</p>
    <p>I created the artwork in Adobe Illustrator based on the Animal Silhouette Moonlight Vector Illustration - Illustrator Tutorial by tutvid <a href="https://www.youtube.com/watch?v=RtnCn65MdN0">here</a>.</p>
        <div className="parralax-container">  
              <section class="section section-dark">
            <div className="valley">
              <div className="pimg1">
            <img src="https://i.pinimg.com/originals/27/a6/68/27a66840d494016ff0b634c607610105.jpg" className="pimg1" alt="valley"/>
            <div className="centered">Limitless Valley</div>
            </div>
            </div>
            </section>


            <div className="forest">
              <div className="pimg2">
            <img src={require('../Media/moose-v3.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>


            <div className="trees">
              <div className="pimg3">
            <img src={require('../Media/hummingbird.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>


            <section class="section section-dark">
            <div className="hills">
              <div className="pimg4">
            <img src={require('../Media/fox.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>
            </section>
          </div>


      </React.Fragment>
      // <Product />
    );
  }
}
