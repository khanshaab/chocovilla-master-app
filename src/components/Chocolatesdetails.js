import React, { Component } from 'react';
import { connect } from "react-redux";
import { getChocolates } from '../actions/actionCreators';
//import Footer from './Footer';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, Redirect } from "react-router-dom";
import LogoutNav from './LogoutNav';


class Chocolatesdetails extends Component {


    componentWillMount(){
        this.props.dispatch(getChocolates());
    }

        // debugger; 

    render() {
        if(this.props.isLogin){
        return (
            <div>
                 {this.props.chocolates[0] !== undefined && <> 
                <div>
                <LogoutNav />
                </div>
                 <div className="container">
                 <Card style={{ 
                        width: '70rem', 
                        backgroundColor: "#fff", 
                        backgroundClip: "padding-box",
                        border: "1px solid #17a2b8",
                        borderRadius: ".25rem"}}>
                    <Card.Body className="p-3 mb-5 bg-white rounded">
                    <Card.Title style={{textAlign: "center", fontFamily: "-webkit-pictograph", fontSize: "-webkit-xxx-large"}} >
                    {this.props.chocolates[this.props.match.params.id-1].name}
                    </Card.Title>
                    <Card.Text style={{textAlign: "justify", fontSize: "large"}}>
                    {this.props.chocolates[this.props.match.params.id-1].desc}
                    </Card.Text>
                    <Link to="/chocolates">
                    <Card.Text style={{textAlign: "center"}}><Button>Go Back</Button></Card.Text>
                    </Link>
                    </Card.Body>
                   
                    </Card>
                 </div>
                 
                 </>}
             </div>
        );
    }else if(this.props.isLogin === false){
        return(
            <Redirect to="/" />
        );
    }
    else {
        return(
            <Redirect to="/" />
        );
    }
    }
}

function mapStateToProps(State){
    return{
        chocolates: State.chocolates,
        isLoading: State.isLoading,
        isLogin: State.isLogin
    };
}

export default connect(mapStateToProps)(Chocolatesdetails);
