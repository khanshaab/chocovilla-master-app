import React, { Component } from 'react';
import { connect } from "react-redux";
import { getChocolates } from '../actions/actionCreators';
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LogoutNav from './LogoutNav';

class Search extends Component {

    componentDidMount(){
        this.props.dispatch(getChocolates());
    }

    render() {
        if(!this.props.isLogin){
            alert("please login first");
         return( 
         <Redirect to="/"/>
         );
        }
        return (
            <div>
                <div>
                <LogoutNav />
                </div>
                <div style={{marginLeft:"12%"}}>   
                {this.props.chocolates.map(b => (
                  <div key={b.id} className="brandsMainDiv">
                       <Card style={{display: 'inline-block',
                                    width: '20rem',  
                                    border: "1px solid #17a2b8",
                                    backgroundColor: "#fff", 
                                    backgroundClip: "padding-box"}}>
                        <Link to={`/chocolates/${b.id}`}>
                        <div className="text-center">
                            <Card.Img src={b.image} className="brandsImg"/>
                            </div>
                            </Link>
                        <Card.Footer style={{textAlign: "center", border: "1px solid #17a2b8"}}>
                        <b className="text-muted">{b.name}</b>
                        </Card.Footer>
                        </Card>
                        
                  </div>
              ))}
              </div>
              <div>
              <Navbar fixed="bottom">
              <Footer />
              </Navbar>
              </div>  
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        chocolates: state.chocolates,
        isLoading: state.isLoading,
        isLogin: state.isLogin
    }
}
export default connect(mapStateToProps)(Search);
