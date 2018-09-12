import React from 'react';
import {Link} from 'react-router-dom';
import history from '../history';
const Page2=() =>(
<div>
<h2>
Content2
</h2>
<div><Link to='/'>Main</Link></div>
<div><Link to='/Page3'>Page3</Link></div>
<div><a onClick={()=>{
    history.goBack();
}}>back</a></div>
</div>
);
export default  Page2;