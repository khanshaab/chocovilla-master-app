import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { changefieldInput } from '../actions/actionCreators';
import { connect } from "react-redux";


class LogoutNav extends Component {
     
    handleInputSubmit = name => e => {
        this.props.dispatch(changefieldInput(name, e.target.value));
    }

    handleLogout = () => {
        this.props.dispatch({type: "LOGOUT"})
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{fontFamily: "Monoton"}}>CHOCOVILLA</Navbar.Brand>
                <Nav className="mr-auto" variant="">
                <label className="ml-5">
                    <Link to="/home" className="text-warning sofi ftsize ">
                        Home
                    </Link>
                </label>
                <label className="ml-5">
                    <Link to="/brands" className="text-warning sofi ftsize">
                        Brands
                    </Link>
                </label>
                <label className="ml-5">
                    <Link to="/chocolates" className="text-warning sofi ftsize">
                        Chocolates
                    </Link>
                </label>
                </Nav>
                <Form inline>
                <Link to="/chocolates">
                    <FormControl type="text" placeholder="Search" name="search" className="mr-sm-2" onChange={this.handleInputSubmit("search")} />
                </Link>
                <Button variant="" className=" sofi btn-warning">
                    Search
                </Button>
                <Button variant="" className="ml-1 btn-danger sofi" onClick={this.handleLogout}>
                    LogOut
                </Button>
                </Form>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state){
return{
    search: state.search
};
}


export default connect(mapStateToProps)(LogoutNav);

