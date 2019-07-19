import React, { Component } from 'react'
// import Navigation from './Navigation';
import Footer from './Footer';
import Navbar from "react-bootstrap/Navbar";
import LogoutNav from './LogoutNav';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";



class Home extends Component {
 
    render() {
     
        if(this.props.isLogin){
        return (
            <div>
                <div>
                <LogoutNav />
                </div>
                
                <div className="sofi" 
                          style={{
                              marginLeft: "25%", 
                              marginTop: "15%", 
                              fontSize: "-webkit-xxx-large"}}>
                              Home Page under construction.......
                              <h3>Footer is also under construction....</h3>
                              </div>
              
                <div className="mt-5">
                <Navbar fixed="bottom">
                <Footer />
                </Navbar>
                </div>
                </div>
            )
           }
           else if(this.props.isLogin === false){
            return( 
            <Redirect to="/"/>
            );
           }else{
            alert("please login first");
            return( 
                <Redirect to="/"/>
                );
      
           }
    }
}

function mapStateToProps(LoginState){
    return {
        isLogin: LoginState.isLogin
    };
}


export default connect(mapStateToProps)(Home);
