import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';



class Admin extends Component {
     // Renders the entire app on the DOM

    state={
        project: {
            name: '', 
            description: '', 
            thumbnail: '', 
            website: '', 
            github: '',
            date_completed: '', 
            tag_id: '',
        }
    }

    handleChange = (event) => {
        console.log(`handleChange `, event.target.value);
        this.setState({
            project:{
                [event.target.name]: event.target.value
            }
        })
        
        
    }

    render() {
        return (
        <section>
            <form>
                <TextField
                    label="Name"
                    name = 'name'
                    value={this.state.project.name}
                    onChange={this.handleChange}
                    margin="normal"
                    variant = "outlined"

                />
                <TextField
                    label="Description"
                    name = 'description'
                    value={this.state.project.description}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Thumbnail"
                    value={this.state.project.thumbnail}
                    name = 'thumbnail'
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Website"
                    value={this.state.project.website}
                    name = 'website'
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Github"
                    value={this.state.project.github}
                    name = 'github'
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Date"
                    value={this.state.project.date_completed}
                    name = 'date_completed'
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        </section>
        );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Admin);