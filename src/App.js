import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get startedadmkamd, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="header-container">
            <div class="top-link-container">
                <div class="end-top-bar">
                    <ul class="nav nav-tabs">
                        <li>
                            <a href="#">MY ACCOUNT</a>
                        </li>
                        <li>
                            <a href="#">WISHLIST</a>
                        </li>
                        <li>
                            <a href="#">MY CAR</a>
                        </li>
                        <li>
                            <a href="#">CHECKOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

    );
  }
}

export default App;
