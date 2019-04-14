import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <section>
      <Router>
        <header>
          <h1>Walter Benson</h1>
        </header>
        <Route exact path="/" component={Projects}/>
        <Route exact path="/admin" component={Admin}/>
        {/* <Admin/> */}
        
      </Router>
      </section>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);