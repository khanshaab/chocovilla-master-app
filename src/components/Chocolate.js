import React, { Component } from 'react';
import { connect } from "react-redux";
import { getChocolates } from '../actions/actionCreators';
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LogoutNav from './LogoutNav';

class Chocolates extends Component {

    componentDidMount(){
        this.props.dispatch(getChocolates());
    }

    render() {
       if(this.props.search.length > 0){
            let filterChocolate = this.props.chocolates.filter(c => {
                return c.name.toLowerCase().includes(this.props.search);
            });
            if(!filterChocolate.length){
                return(
                    <div>
                    <div>
                    <LogoutNav />
                    </div>
                          <div className="sofi" 
                          style={{
                              marginLeft: "36%", 
                              marginTop: "15%", 
                              fontSize: "-webkit-xxx-large"}}>
                              No result found
                              </div>
                    </div>
                )
            }
            return (
                <div>
                    <div>
                    <LogoutNav />
                    </div>
                    <div style={{marginLeft:"12%"}}>   
                    {filterChocolate.map(b => (
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
        if(this.props.isLogin){
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
                        <Card.Footer className="bg-muted" style={{textAlign: "center", border: "1px solid #17a2b8"}}>
                        <b className="text-dark sofi">{b.name}</b>
                        </Card.Footer>
                        </Card>
                        
                  </div>
              ))}
              </div>  
            </div>
        );
        }else if(this.props.isLogin === false){
            return(
                <Redirect to="/" />
            );
        }else{
            alert("Please login first");
            return(
                <Redirect to="/" />
            );
        }
    }
}

function mapStateToProps(state){
    return {
        chocolates: state.chocolates,
        isLoading: state.isLoading,
        isLogin: state.isLogin,
        search: state.search
    }
}
export default connect(mapStateToProps)(Chocolates);
