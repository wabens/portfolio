import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../ProjectCard/ProjectCard'

class Projects extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_PORTFOLIO'})
    }

    render() {
    return (
      <section>
          {JSON.stringify(this.props.reduxState)}
        <Grid container>
            { 
            this.props.reduxState.projects.map(project => 
                <Grid item>
                    <ProjectCard key={project.id} project={project}/>
                    {/* {JSON.stringify(project)} */}

                </Grid>)
            }
      </Grid>
      </section>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Projects);