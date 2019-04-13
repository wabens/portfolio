import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';






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
        //console.log(`handleChange `, event.target.value);
        this.setState({
            project:{
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`submit`);
        
    }
        
        


    render() {
        console.log(`state `, this.state.project);
        
        return (
        <section>
            <form>
            <Grid spacing={8} container>
                <Grid item>
                    <TextField
                        label="Name"
                        name = 'name'
                        value={this.state.project.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant = "outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Description"
                        name = 'description'
                        value={this.state.project.description}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Thumbnail"
                        value={this.state.project.thumbnail}
                        name = 'thumbnail'
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Website"
                        value={this.state.project.website}
                        name = 'website'
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Github"
                        value={this.state.project.github}
                        name = 'github'
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Date"
                        value={this.state.project.date_completed}
                        name = 'date_completed'
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel>Tag</InputLabel>
                        <NativeSelect
                            value={this.state.project.tag_id}
                            onChange={this.handleChange}
                            input={<Input name="tag_id" id="age-native-helper" />}
                        >
                            <option value="" />
                            <option value={1}>one</option>
                            <option value={2}>two</option>
                            <option value={3}>three</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Grid>

            </Grid>
            </form>
        </section>
        );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(Admin);