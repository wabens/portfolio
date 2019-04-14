import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';


const styles = {
    card: {
      minWidth: 400,
      minHeight:200,
      margin: 10,
      padding: 10,
      display: "flex",
      flexDirection: "row",
    },
    cardDiv: {
        margin: "0 auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        textAlign: "center",
        padding: 8,
       
    },
    cardText: {
        margin: 8,
        textAlign: 'left',
    }
}

class ProjectCard extends Component {

    // conditionally render the optional fields based on their presence
    // elemnts to render are set to state and called in render
    state = { 
        description: null, 
        thumbnail: 'images/placeholder.svg',
        website: null, 
        github: null,
        date_completed: null,
        tag: null
    }

    elementsToRender=()=>{
        const { classes } = this.props;
        if (Boolean(this.props.project.description) === Boolean(1)){
            this.setState({description: 
            <p className={classes.cardText}>{this.props.project.description}</p>
            })
        }
        if (Boolean(this.props.project.thumbnail) === Boolean(1)){
            this.setState({thumbnail: this.props.project.thumbnail})
        }
        if (Boolean(this.props.project.website) === Boolean(1)){
            this.setState({website: 
            <p className={classes.cardText}>Website: {this.props.project.website}</p>
            })
        }
        if (Boolean(this.props.project.gitub) === Boolean(1)){
            this.setState({github: 
            <p className={classes.cardText}>Github: {this.props.project.github}</p>
            })
        }
        if (Boolean(this.props.project.date_completed) === Boolean(1)){
            this.setState({date_completed: 
            <p className={classes.cardText}>Completed: {moment(this.props.project.date_completed).format('ll')}</p>
            })
        }
        // if (Boolean(this.props.project.tag_name) === Boolean(1)){
        //     this.setState({tag: 
        //     <p>{this.props.project.tag_name}</p>
        //     })  
        // } 
        if (this.props.project.tag_name !== 'None'){
            console.log(`in tag=none`);
            
            this.setState({
                tag: <p className={classes.cardText}>Tags: {this.props.project.tag_name}</p>
            })
        }

        console.log(`tag state`, this.state.tag);
        console.log(`date complete`, moment(this.props.project.date_completed).format('ll'))
    }

    componentDidMount(){
        this.elementsToRender()
    }

    render(){
            const { classes } = this.props;
        return (
            <Card className={classes.card}>
            <img className={classes.cardDiv} height='200' width='300'src={this.state.thumbnail} alt={this.props.project.name} />
            <div className={classes.cardDiv}>
                <h3>{this.props.project.name}</h3>
                {this.state.description}
                {this.state.website}
                {this.state.github}
                {this.state.date_completed}
                {this.state.tag}
            </div>
            </Card>
        )
}
}
const mapReduxStateToProps = reduxState => ({
    reduxState
})

export default connect(mapReduxStateToProps)(withStyles(styles)(ProjectCard));