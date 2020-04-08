import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import firebase from '../config/firebase';


class SignOut extends Component{

    logOutUser = () => {
        firebase.auth().signOut().then(() => {
           this.props.history.push('/');
        });
       };

    render(){
        return <Button variant="outline-dark" size="sm" onClick={this.logOutUser} children="Sign Out" />;
    }
 
};
export default withRouter(SignOut);