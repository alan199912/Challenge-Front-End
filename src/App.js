import './App.css';
import { BrowserRouter as Router, Route, Link,  Switch, Redirect  } from 'react-router-dom'
import React, { Component } from 'react'

// Components
import Nav from './components/Nav/nav';
import Detail from './components/Detail/detail';
import Home from './components/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>            
          <Route exact path="/" render={() => {
            return (
              <div>
                <Nav/>
              </div>
            )
            }}>
          </Route>
      </Router>
      </div>
    );
  }
}

export default App;
