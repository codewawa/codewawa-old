import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Presentations from './scenes/Presentations';
import Presentation from './scenes/Presentation';
import Tutorials from './scenes/Tutorials';
import Tutorial from './scenes/Tutorial';

import Header from 'components/Header';
const InProgress = () => {
  return (<Header style={{height:'40vh'}}><h2>Ta strona jest w budowie. Zajrzyj tu za jakiś czas...</h2></Header>);
}

class App extends Component {
  render() {
    return (<Router>
      <div className="page">
        <Navbar/>
        <div className="site-wrapper">
          <Switch>
          <Route path="/" exact component={Home}/>

          <Route path="/presentations" component={Presentations}/>
          <Route path="/presentation/:id" component={Presentation}/>

          <Route path="/tutorials" component={Tutorials}/>
          <Route path="/tutorial/:id" component={Tutorial}/>

          <Route path="/about" component={InProgress}/>
          <Route path="/projects" component={InProgress}/>
          <Route path="/meetups" component={InProgress}/>
          <Route path="/contact" component={InProgress}/>
        </Switch>
        </div>
      </div>
    </Router>);
  }
}

export default App;
