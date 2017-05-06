import React, { Component } from 'react';
import './styles/Home.css';

export default class Info extends Component {

  render(){
    return(
      <div className="Home">
        <div className="Home-flex">
          <p className="name">
            Ayman Mohatarem
          </p>
          <p className="description">
              I am a React and Node.js web developer based in Toronto.
            <br/>
              Everything made here has been created to build upon my tenacity for solving difficult problems.
            <br/>
              I seek the epitome of innovation.
          </p>
        </div>
        <img className="Ayman" src="http://res.cloudinary.com/aymanxd/image/upload/v1493918381/Ayman2_utydxy.jpg" alt="Ayman Mohatarem"/>
    </div>
    )
  }
}
