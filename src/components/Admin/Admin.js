import React, { Component } from 'react';
import { connect } from 'react-redux';


class Admin extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <section>
        <p>Empty Page</p>
      </section>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Admin);