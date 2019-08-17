import React, { Component } from "react";
import '../App.css';
import Parallax from 'react-rellax';
export default class About extends Component {
    render() {

      return (
<React.Fragment>
<Parallax scrollAxis="horizontal" speed={-2}>

<div className="rellax">
  <h1>About Us</h1>
</div>
</Parallax>
<Parallax speed={7} >
<div className="rellax">
  <h2>Winter Garden Game Design</h2>
</div>
</Parallax>
<Parallax speed={-4}>
<div className="rellax">
  <h3>I’m extra slow and smooth</h3>
</div>
</Parallax>

     

</React.Fragment>
      );
    }
  }
