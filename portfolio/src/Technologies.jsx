import React, {Component} from 'react';
import './styles/Technologies.css';
import Icons from './Icons.jsx';

export default class Technologies extends Component {

  render(){
    return(
      <div className="technologies">
        <p className="description-title">
          These are some of the technologies I've used:
        </p>
        <Icons/>
      </div>
    )
  }
}
