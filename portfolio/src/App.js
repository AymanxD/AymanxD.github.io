import React, { Component } from 'react';
import './styles/App.css';
import Landing from './LandingPage.jsx';
import Contact from './contact.jsx';

class App extends Component {
  render() {
    return (
      <div className="App site">
        <Landing />
        <Contact />
      </div>
    );
  }
}

export default App;
