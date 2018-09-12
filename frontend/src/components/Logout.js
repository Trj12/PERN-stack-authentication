import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

const Logout =props=>
(
    <Button onClick={props.auth.logout}>Log out</Button>
)

export default Logout