/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBrands } from '../actions/actionCreators';
// import Navigation from './Navigation'
import Card from "react-bootstrap/Card";
import { Link, Redirect } from "react-router-dom";
import LogoutNav from './LogoutNav';

class Brands extends Component {

    componentDidMount(){
        this.props.dispatch(getBrands());
    }

    render() {

        if(this.props.isLogin){
        return (
            <div>
                <LogoutNav />
                <div style={{marginLeft:"12%"}}>   
                {this.props.brands.map(b => (
                  <div key={b.id} className="brandsMainDiv">
                       <Card style={{
                           width: '20rem', 
                           display: 'inline-block', 
                           border: "1px solid #17a2b8",
                           backgroundColor: "#fff", 
                            backgroundClip: "padding-box",
                            }}>
                        <Link to={`/brands/${b.id}`}>
                            <div className="text-center">
                                <Card.Img src={b.logo} className="brandsImg"/>
                            </div>
                        </Link>
                        
                        <Card.Footer  style={{textAlign: "center", border: "1px solid #17a2b8"}}>
                        <b className="text-dark sofi ftsize " >{b.name}</b>
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
            <Redirect to="/"/>
            );
    }
    }
}

function mapStateToProps(brandState){
    return {
        brands: brandState.brands,
        isLoading: brandState.isLoading,
        isLogin: brandState.isLogin

    }
}
export default connect(mapStateToProps)(Brands);
