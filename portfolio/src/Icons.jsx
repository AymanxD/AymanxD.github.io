import React, {Component} from 'react';
import './styles/Technologies.css';
import './styles/devicons.css';

const devicon = require('./data/devicon.json');

let r = Math.floor(Math.random() * (255 - 0) + 0);
let g = Math.floor(Math.random() * (255 - 0) + 0);
let b = Math.floor(Math.random() * (255 - 0) + 0);
let colour = "rgb("+r+","+g+","+b+")";

const changeColour = (id) => {
  colour = "rgb("+r+","+g+","+b+")";
 document.getElementById(id).style.color = colour;
}

const returnColour = (id) => {
  if(colour === "rgb("+r+","+g+","+b+")"){
   r = Math.floor(Math.random() * (255 - Math.random()) + 0);
   g = Math.floor(Math.random() * (255 - Math.random()) + 0);
   b = Math.floor(Math.random() * (255 - Math.random()) + 0);
 }
 document.getElementById(id).style.color = "#444445";
}

export default class Icon extends Component{
  render(){
    return(
      <div className="iconGrid">
        {devicon.map((dev, id) => {
          return(
            <div key={id} id={"color"+id} className="Icon" onMouseOver={(e) => changeColour("color"+id)} onMouseLeave={(e) => returnColour("color" + id)}>
              <div className="IconSize">
                <div className={dev.devicon}></div>
              </div>
              <div className="IconName">{dev.label}</div>
            </div>
          )
        })}
      </div>
    )
  }
}
