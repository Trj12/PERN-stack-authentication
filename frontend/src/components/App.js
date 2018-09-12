import React from 'react';
import {Link} from 'react-router-dom';
import AuthForm from './AuthForm';
import Logout from './Logout'
const Home=(props) =>(
<div>
<h2>
Main Page
</h2>
<div><Link to='/Page1'>Page 1</Link></div>
<div><Link to='/Page2'>Page 2</Link></div>
<br />
<Logout {...props} />
</div>
);

const App = (props)=>(
    <div>
    {props.auth.loggedIn?<div><Home {...props} /></div>:<AuthForm  {...props}/>}
    </div>
)  
export default  App;