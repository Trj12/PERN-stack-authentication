import React, { Component } from 'react';
import { Button ,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

class AuthForm extends Component{
    state={
        username:'',
        password:''
    }
    inputChange=(event)=>{
        const {name,value}=event.target;
         this.setState(
             {[name]:value}
         )
    }
    signup=()=>{
        const {username,password}=this.state
        this.props.auth.signup(username,password);
    }

    login=()=>{
        const {username,password}=this.state
        this.props.auth.login(username,password);
    }
    render(){
        return(
            <div>
            <h2>Food Hub</h2>
            <FormGroup>
            <FormControl type="text"
            value={this.state.username}
            name='username'
            placeholder="username" 
            onChange={this.inputChange}/>
            <br/>
            <FormControl type="password"
            value={this.state.password}
            name='password'
            placeholder="password" 
            onChange={this.inputChange}/>
            </FormGroup>
            <Button onClick={this.login}>Login</Button>
            <span>or</span>
            <Button onClick={this.signup}>Sign up</Button>
            </div>
        )
    }
}

export default AuthForm