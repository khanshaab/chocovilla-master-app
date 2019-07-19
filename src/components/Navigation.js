import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


 class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{fontFamily: "Monoton"}}>CHOCOVILLA</Navbar.Brand>
                <Nav className="mr-auto" variant="">
                <label className="ml-5">
                    <Link to="/home" className="sofi text-warning ftsize">
                        Home
                    </Link>
                </label>
                <label className="ml-5">
                    <Link to="/brands" className="sofi text-warning ftsize">
                        Brands
                    </Link>
                </label>
                <label className="ml-5">
                    <Link to="/chocolates" className="sofi text-warning ftsize">
                        Chocolates
                    </Link>
                </label>
                </Nav>
                <Form inline>
                <Link to="/search">
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" />
                </Link>
                <Button variant="outline-info">
                    Search
                </Button>
                </Form>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;

