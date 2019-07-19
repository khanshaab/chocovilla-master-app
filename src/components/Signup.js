import React, { Component } from 'react';
import { connect } from "react-redux";
//import  { useEffect } from "immer";
import { getSignup, changefieldInput } from "../actions/actionCreators";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
// import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
class Signup extends Component {

    handleInputSubmit = name => e => {
        this.props.dispatch(changefieldInput(name, e.target.value));
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(getSignup(
            this.props.firstName,
            this.props.lastName,
            this.props.email,
            this.props.password
            ))
    }


    render() {
        if(this.props.isSignup){
            return(
                <Redirect to="/" />
            );
        }
        return (
            <div>
                <Navigation />
                <div className="sideImg col-md-6">
                <span className="offset-md-11">
                <div style={{ 
                        width: '25rem',
                        backgroundColor: "#fff", 
                        backgroundClip: "padding-box",
                        border: "1px solid rgb(255, 222, 173)",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: ".25rem",
                        padding: "20px",
                        marginTop: "20px",
                        marginLeft: "50%" }}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Label style={{
                    fontFamily: "-webkit-pictograph", 
                    fontSize: "xx-large"}}>
                        Sign Up
                </Form.Label>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="First name" 
                    onChange={this.handleInputSubmit("firstName")} 
                    required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Last name" 
                    onChange={this.handleInputSubmit("lastName")} 
                    required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={this.handleInputSubmit("email")} 
                    required
                    />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"  
                    onChange={this.handleInputSubmit("password")} 
                    required
                    />
                </Form.Group>
                {/* <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                Submit
                </Button>
                <br />
                <small>Account already exists! <Link to="/"><b>Signin</b></Link> here</small>
                </Form>
                </div>
                </span>
                </div>  
            </div>

              
        )
    }
}

function mapStateToProps(state){
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        isSignup: state.isSignup
    };
}

export default connect(mapStateToProps)(Signup);
