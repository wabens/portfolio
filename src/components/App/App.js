import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Projects from '../Projects/Projects';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <section>
        <p>Empty Page</p>
        <Projects/>
      </section>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);