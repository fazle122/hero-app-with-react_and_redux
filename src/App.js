import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Heroes from './component/Heroes/Heroes';
import HeroDetail from './component/Heroes/HeroeDetail';

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <div>
            <div>
              <Header />
            </div>
            <div>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/heroes" component={Heroes} />
              <Route path="/hero-detail/:Id" component={HeroDetail} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
