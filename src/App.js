import React from 'react';
import Home from "./components/Home";
import './App.css';
import Login from './components/Login';
import Signup from "./components/Signup";
import Brands from "./components/Brands";
import Chocolate from "./components/Chocolate";
import { Route } from "react-router-dom";
import Branddetails from './components/Branddetails';
import Search from './components/Search'; 
import Chocolatesdetails from './components/Chocolatesdetails';
//import PagenotFound from './components/PagenotFound';


function App() {
  return (
    <div>
      <Route path="/" component={Login} exact />     
      <Route path="/signup" component={Signup} exact /> 
      <Route path="/home" component={Home} exact /> 
      <Route path="/brands" component={Brands} exact />
      <Route path="/brands/:id" component={Branddetails} exact />
      <Route path="/chocolates" component={Chocolate} exact />
      <Route path="/search" component={Search} exact />
      <Route path="/chocolates/:id" component={Chocolatesdetails} exact />
    </div>
  );
}

export default App;
