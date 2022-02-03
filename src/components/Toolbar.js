import React from 'react';
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";
import {useContext} from "react";

const Toolbar = () => {

    const {getCart} =useContext(mainContext)

    return (
        <div className='toolbar'>

            <Link  className='btn' to="/">All Products</Link>
            <Link  className='btn' to="/createProducts">Create Products</Link>
            <Link  className='btn ml-40' to="/shoppingCart">Shopping Cart    items: {getCart.length}</Link>
        </div>
    );
};

export default Toolbar;