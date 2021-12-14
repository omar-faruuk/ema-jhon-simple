import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import  NotFound  from './components/NotFound/NotFound.jsx';

import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';



function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/order">
            <Review></Review>
          </Route>

          <Route path="/manage">
           <Inventory></Inventory>
          </Route>
          
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/product/:key">
            <ProductDetail></ProductDetail>
          </Route>

          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
