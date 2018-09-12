import React from 'react';
import {Link} from 'react-router-dom';
import history from '../history';
const Page1=() =>(
<div>
<h2>
Content
</h2>
<div><Link to='/'>Main</Link></div>
<div><a onClick={()=>{
    history.goBack();
}}>back</a></div>
</div>
);
export default  Page1;