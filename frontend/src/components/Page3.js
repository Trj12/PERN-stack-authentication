import React from 'react';
import {Link} from 'react-router-dom';
import history from '../history';
const Page3=() =>(
<div>
<h2>
Content3
</h2>
<div><Link to='/Page4'>Page4</Link></div>
<div><a onClick={()=>{
    history.goBack();
}}>back</a></div>
</div>
);
export default  Page3;