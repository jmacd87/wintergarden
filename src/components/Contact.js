import React, { Component } from "react";
import ReactContactForm from 'react-mail-form';
 

class About extends Component {
    render() {

      return (

        
    <div className="contactForm">  
    <h1> CONTACT US</h1> 
  <form method="POST">
    <label htmlFor="name">Name</label>
    <br/>
    <input type="text" name="name" />
        <br/>
    <label htmlFor="email">Email</label>
    <br/>
    <input type="email" name="email" />
    <br/>
    <label htmlFor="message">Message</label>
    <br/>
    <textarea name="message" rows="3"></textarea>
    <br/>
    <input type="submit" />
  </form>
        </div>
      );
    }
  }
  
  export default About;