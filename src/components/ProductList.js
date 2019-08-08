import React, { Component } from "react";
import sticker from '../sticker.svg';
import '../App.css';
import Carousel from 'react-3d-carousels';

export default class ProductList extends Component {
  render() {
    return (
      
      <React.Fragment>  
        <body>  
              <section class="section section-dark">
            <div className="valley">
              <div className="pimg1">
                <span className="border">
            <img src="https://i.pinimg.com/originals/27/a6/68/27a66840d494016ff0b634c607610105.jpg" className="pimg1" alt="valley"/>
            <div class="centered">Limitless Valley</div>
            </span>
            </div></div>
            </section>
            <div class="container">
            <div className="fox">
              <img src="https://i.pinimg.com/236x/fc/ed/53/fced53f591c806c660a6306567f0b528--art-fox-watercolor-animals.jpg" className="pimg1" alt="fox"/>
            </div>
            
           
            <div className="moose">
              <img src="https://render.fineartamerica.com/images/rendered/medium/poster/images/artworkimages/medium/1/moose-nastasia-cook.jpg" className="moose" alt="moose"/>
              <img src={sticker} className="sticker"/>
            </div>
            <div className="bluejay">
            <img src="https://dailypainters.com/artists/Paul-Wolber/paintings/full/2012/861/blue_jay___soft_landing.jpg" className="bluejay" alt="bluejay"/>
            </div>
            </div>
</body>
      </React.Fragment>
      // <Product />
    );
  }
}
