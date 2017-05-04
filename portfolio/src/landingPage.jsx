import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio.jsx';
import Technologies from './technologies.jsx';
import Info from './Info.jsx';

export default class Landing extends Component {
  render(){
    return (
      <Router>
        <div className="landingPage">
          <div className="Navigation">
            <ul className="titleGrid">
              <li className="anchor"><Link className="link" to="/">Ayman Mohatarem</Link></li>
              <li className="anchor"><Link className="link" to="/Info">Info</Link></li>
              <li className="anchor"><Link className="link" to="/Portfolio">Portfolio</Link></li>
              <li className="anchor"><Link className="link" to="/Technologies">Technologies</Link></li>
              <img className="logo" src="favicon.gif" alt="logo"/>
            </ul>
          </div>
          <hr/>
          <Route path="/Info" component={Info}/>
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Technologies" component={Technologies}/>
        </div>
      </Router>
    )
  }
}
