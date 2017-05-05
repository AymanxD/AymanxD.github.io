import React, { Component } from 'react';
import './styles/Contact.css';
import {Icon} from 'react-fa';


export default class Contact extends Component{
  render() {
    return(
        <footer>
          <p className="title">Contact me here: aymanmohatarem@gmail.com</p>
          <div className="socialMediaLinks">
            <a className="contactLink" href="https://www.facebook.com/AymanxD"><Icon name="facebook"/></a>
            <a className="contactLink" href="https://www.linkedin.com/in/aymanmohatarem/"><Icon name="linkedin"/></a>
            <a className="contactLink" href="https://github.com/AymanxD"><Icon name="github"/></a>
          </div>
        </footer>
    )
  };
};
