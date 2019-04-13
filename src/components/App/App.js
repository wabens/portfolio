import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <section>
        <p>Empty Page</p>
        <Admin/>
        <Projects/>
      </section>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);