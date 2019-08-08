import React, { Component } from "react";
import sticker from '../sticker.svg';
import '../App.css';
import Carousel from 'react-3d-carousels';

export default class ProductList extends Component {
  render() {
    return (
      
      <React.Fragment>  
        <div className="parralax">  
              <section class="section section-dark">
            <div className="valley">
              <div className="pimg1">
            <img src="https://i.pinimg.com/originals/27/a6/68/27a66840d494016ff0b634c607610105.jpg" className="pimg1" alt="valley"/>
            <div className="centered">Limitless Valley</div>
            </div>
            </div>
            </section>

            <section class="section section-dark">
            <div className="forest">
              <div className="pimg2">
            <img src={require('../Media/moose.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>
            </section>

            <section class="section section-dark">
            <div className="trees">
              <div className="pimg3">
            <img src={require('../Media/hummingbird.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>
            </section>

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
