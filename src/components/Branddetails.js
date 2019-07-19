import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBrands, getChocolates } from '../actions/actionCreators';
// import Navigation from './Navigation';
// import Footer from './Footer';
// import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, Redirect } from "react-router-dom";
import LogoutNav from './LogoutNav';



class Branddetails extends Component {


    componentWillMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getChocolates());
    }

    render() {
       
        if(this.props.isLogin){
            var filteredChocolates= this.props.chocolates.filter(c=>{
                return c.brandId === parseInt(this.props.match.params.id);
            });
        return (
            <div>
                 {this.props.brands[0] !== undefined && <> 
                <div>
                <LogoutNav />
                </div>
                 <div >
                 <Card className="cardStyle">
                    <Card.Body className="p-3 mb-5 bg-white rounded">
                    <Card.Title className="cardTitle" >
                    {this.props.brands[this.props.match.params.id-1].name}
                    </Card.Title>
                    <Card.Text style={{textAlign: "justify", fontSize: "large"}}>
                    {this.props.brands[this.props.match.params.id-1].desc}
                    </Card.Text>
                    <Link to="/brands">
                    <Card.Text style={{textAlign: "center"}}><Button>Go Back</Button></Card.Text>
                    </Link>
                    </Card.Body>
                   
                    </Card>
                 </div>
                 </>}
                 <div style={{marginLeft:"12%"}}>   
                    {filteredChocolates.map(b => (
                    <div key={b.id} className="brandsMainDiv">
                       <Card className="cardStyle">
                        <Link to={`/chocolates/${b.id}`}>
                        <div className="text-center">
                            <Card.Img src={b.image} className="brandsImg"/>
                            </div>
                            </Link>
                        <Card.Footer style={{textAlign: "center", border: "1px solid #17a2b8"}}>
                        <b className="text-dark sofi ftsize">{b.name}</b>
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
            return(
                <Redirect to="/404" />
            );
        }
    }
}

function mapStateToProps(brandState){
    return{
        brands: brandState.brands, 
        isLoading: brandState.isLoading,
        chocolates: brandState.chocolates,
        isLogin: brandState.isLogin,
    };
}

export default connect(mapStateToProps)(Branddetails);


// let getId =window.location.href.split("/");
//     var currentId = getId[getId.length-1]
//     chocolates: brandState.chocolates.filter(c=>{
//         return c.brandId===currentId;
//      }),    console.log("BrandId ",currentId);
