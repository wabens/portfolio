import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';


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

const ProjectCard = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <img className={classes.cardDiv} height='200' width='200'src={props.project.thumbnail} alt={props.project.name} />
      <div className={classes.cardDiv}>
        <p>{props.project.name}</p>
        <p>{props.project.description}</p>
      </div>
    </Card>
  )
}
const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default withStyles(styles)(ProjectCard);