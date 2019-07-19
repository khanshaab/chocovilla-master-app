import React, { Component } from 'react';
import { connect } from "react-redux";
import { changefieldInput, getLogin } from '../actions/actionCreators';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
//import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";


class Login extends Component {

    handleInputSubmit = name => e => {
        this.props.dispatch(changefieldInput(name, e.target.value));
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        this.props.dispatch(getLogin(this.props.email, this.props.password));
    }

    render() {
        if(this.props.isLogin){
            return(
                <Redirect to="/home" />
            )
        }
        return (
            <div>
                <Navigation />
                <div className="sideImg col-md-6">
                <span className="offset-md-11">
                <div className="" style={{ 
                        width: '25rem',
                        backgroundColor: "#fff", 
                        backgroundClip: "padding-box",
                        border: "1px solid rgb(255, 222, 173)",
                        borderRadius: ".25rem",
                        padding: "62px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        marginTop: "20px",
                        marginLeft: "50%"}}>
                <Form onSubmit={this.handleLoginSubmit}>
                <Form.Label style={{
                        fontFamily: "-webkit-pictograph", 
                        fontSize: "xx-large"}}
                        className="mt-5">
                        Sign In
                </Form.Label>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={this.handleInputSubmit("email")}
                        required />
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
                <Form.Group controlId="formBasicChecbox">
                <Form.Check 
                    type="checkbox" 
                    label="Check me out"
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
                <br />
                <small>wants new account! 
                    <Link to="/signup">
                        <b> Signup</b>
                    </Link> here</small>
                    
                </Form>
                </div>
                </span>
                </div>
                
                </div>
        )
    }
}

function mapStateToProps(loginState){
return {
    email: loginState.email,
    password: loginState.password,
    isLogin: loginState.isLogin
};
}

export default connect(mapStateToProps)(Login);
