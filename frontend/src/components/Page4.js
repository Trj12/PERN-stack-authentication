import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import history from '../history';
class Page4 extends Component {
    render () {
        return (
            <div>
                <h2>Content4</h2>
                <div><a onClick={()=>{
                    history.goBack();
                }}>back</a></div>
            </div>
        )
    }
}

export default Page4