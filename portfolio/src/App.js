import React, { Component } from 'react';
import './App.css';
import Landing from './landingPage.jsx';
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
