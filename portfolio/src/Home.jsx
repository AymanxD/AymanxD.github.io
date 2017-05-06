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
              A React and Node.js web developer based in Toronto.
            <br/>
              Everything made here is only a slice of the ideas I have in mind to learn and develop.
            <br/>
              I solve problems.
          </p>
        </div>
        <img className="Ayman" src="http://res.cloudinary.com/aymanxd/image/upload/v1493918381/Ayman2_utydxy.jpg" alt="Ayman Mohatarem"/>
    </div>
    )
  }
}
