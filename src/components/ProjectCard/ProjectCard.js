import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
      minWidth: 295,
      minHeight:457,
      margin: 10,
      padding: 10,
    },
}

const ProjectCard = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <img src={props.character.url} alt={props.character.name} />
      <div>
        <p>Character Name:  {props.character.name}</p>
        <p>Anime:  {props.character.show}</p>
      </div>
    </Card>
  )
}
const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default withStyles(styles)(ProjectCard);