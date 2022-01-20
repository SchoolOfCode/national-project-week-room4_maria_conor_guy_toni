import React from 'react';
import samaritans from "../../images/Samaritans-logo.png";
import mind from "../../images/Mind-Logo.png";
import "./index.css";

const Footer = () => {
    return (
        <div>
          <footer>
          <p>
         <a href="mailto:anne-marie@schoolofcode.com?subject=I might need some help&body=Hello Anne-Marie">Contact</a>


          </p>
          <img className = "logos" src = {samaritans} alt="Samaritans logo" width="100px"height="100px"
              href="https://www.samaritans.org/" target="_blank"/>
          <img className = "logos" src = {mind} alt="Mind Logo" width="100px"height="100px"
              href="https://www.mind.org.uk/" target="_blank"/>

          
          
          </footer> 
        </div>
    )
}

export default Footer