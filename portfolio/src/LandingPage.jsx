import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, browserHistory} from 'react-router-dom';
import './styles/LandingPage.css';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import Technologies from './Technologies.jsx';

export default class Landing extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <div className="landingPage">
          <div className="Navigation">
            <ul className="titleGrid">
              <li className="anchor"><Link className="link" to="/Home">Home</Link></li>
              <li className="anchor"><Link className="link" to="/Portfolio">Portfolio</Link></li>
              <li className="anchor"><Link className="link" to="/Technologies">Technologies</Link></li>
              <img className="logo" src="favicon.gif" alt="logo"/>
            </ul>
          </div>
          <hr/>
          <Switch>
            <Redirect exact from="/" to="/Home" />
          </Switch>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Technologies" component={Technologies}/>
        </div>
      </Router>
    )
  }
}
