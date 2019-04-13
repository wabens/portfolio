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
    state={
        project: {
            name: '', 
            description: '', 
            thumbnail: '',
            website: '', 
            github: '',
            date_completed: '01-01-2019',
            tag_id: '7',
        }
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_TAGS'})
    }

    handleChange = (event) => {
        //console.log(`handleChange `, event.target.value);
        this.setState({
           
            project:{
                 ...this.state.project,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`submit`, this.state.project);
        this.props.dispatch({type: "POST_PROJECT", payload: this.state.project})
        
    }
        

    render() {
        // console.log(`state `, this.state.project);
        
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
                        label="Date Complete"
                        type="date"
                        value={this.state.project.date_completed}
                        name = 'date_completed'
                        onChange={this.handleChange}
                        margin="normal"
                        defaultValue={'2019-01-01'}
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
                        <option value={7}></option>
                        {this.props.reduxState.tags.map(tag => 
                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                        )}
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button color='primary' variant='contained' onClick={this.handleSubmit}>Submit</Button>
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