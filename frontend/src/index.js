import React, { Component } from 'react';
import { render } from 'react-dom';
import history from './history';
import {Router,Switch,Route,Redirect} from'react-router-dom';
import Auth from './Auth'
import {App,Page1,Page2,Page3,Page4} from './components';

const auth = new Auth;
const callbackComponent = ()=>{
    if(auth.loggedIn){
        setTimeout(()=>history.replace('/'),1500);
        return<h4>loading...</h4>
    }else{
        return<Redirect to={{pathname:'/'}} />
    }
 }
 const AuthRoute=props=>{
     const {Component,path}=props;
     return(
         <Route path={path} render={ ()=>auth.loggedIn?<Component/>:<Redirect to={{pathname:'/'}}/>
}/>
     );
 }
 auth.checkAuthentication()
 .then(()=>{
    render (
        <Router history={history}>
        <Switch>
        <Route exact path="/" render ={()=><App auth={auth} />}/>
        <Route path="/callback" render ={props=>callbackComponent(props)}/>
        <AuthRoute path="/Page1" Component ={Page1}/>
        <AuthRoute path="/Page2" Component ={Page2}/>
        <AuthRoute path="/Page3" Component ={Page3}/>
        <AuthRoute path="/Page4" Component ={Page4}/>
        </Switch>
        </Router>,document.getElementById('root'));
 });
    

