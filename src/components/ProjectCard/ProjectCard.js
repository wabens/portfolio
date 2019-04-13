import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
      minWidth: 295,
      minHeight:457,
      margin: 10,
      padding: 10,
      display: "flex",
      flexDirection: "column",
    //   alignContent: "top",
    //   justifyContent: "center"
    },
    cardDiv: {
        margin: "0 auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        textAlign: "center"
       
    }
}

class ProjectCard extends Component {
    
  render(){
        const { classes } = this.props;
    return (
        <Card className={classes.card}>
        <img className={classes.cardDiv} height='200' width='300'src={this.props.project.thumbnail} alt={this.props.project.name} />
        <div className={classes.cardDiv}>
            <p>{this.props.project.name}</p>
            <p>{this.props.project.description}</p>
        </div>
        </Card>
    )
}
}
// const mapReduxStateToProps = reduxState => ({
//     reduxState
// })

export default withStyles(styles)(ProjectCard);