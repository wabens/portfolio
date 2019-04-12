import React, { Component } from 'react';
import { connect } from 'react-redux';


class Projects extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PORTFOLIO'})
    }

    render() {
    return (
      <section>
          {JSON.stringify(this.props.reduxState)}
      </section>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Projects);