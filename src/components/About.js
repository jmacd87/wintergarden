import React, { Component } from "react";
import '../App.css';

export default class About extends Component {
    render() {

      return (
        <div id="bodywrap">
        <div id="page-wrap">
          <div id="fancy-fancy">
          <div id="inner-wrap">
              <img src="https://publicdomainvectors.org/photos/1473020652.png"></img>
              <h1 className="display-3"><strong>About Us</strong></h1>
              <h2>We are Wintergarden!</h2>
              <h4>

 Wintergarden is a board game design company focused on creating high quality, earth friendly games. We started as a humble solution to our modern "phone on the diner table" problem and transformed into building a company built on cooperative games.
<br/>
Wintergarden began in a sun room in a small Austrian apartment in Innsbruck to a now maritime office in Yarmouth, Nova Scotia. We've come a long way, but our mission has been the same: to challenge the way modern games are played, making human connection the cornerstone.  
<br/>
Reach out to us: 
<br/>
</h4>
<h2>josh@wintergardengd.com</h2>

		<div className="hexWrapper">
			<div className="hexagon">
      <img src={require('../Media/josh.png')} />
			</div>
		</div>

 <h2><strong>Josh Robertson</strong></h2>
<h4><u>Specialty:</u> Founder, owner, lead designer.</h4>
<h4><u>Super power:</u> Turning all ideas into good ideas.</h4>
<h4><u>Hits:</u> Retro video game soundtracks.</h4>
<h4><u>Misses:</u> Empty fridges.</h4>
<img src={require('../Media/hannah.png')}/>
              <h2><strong>Hannah Szypulski</strong></h2>
<h4><strong>Specialty:</strong> Illustrator, Concept Art/Design.</h4>
<h4><strong>Super power:</strong>Honing all the smallest details.</h4>
<h4><strong>Hits:</strong> Perfect sketchbooks.</h4>
<h4><strong>Misses:</strong> Dirty beaches.</h4>
          </div>
        </div>
        </div>
        </div>
      );
    }
  }
  