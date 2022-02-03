import React from 'react';
import {useContext} from "react";
import {useParams} from "react-router-dom";
import mainContext from "../context/mainContext";

const SingleProductComponent = () => {

    const {getProd, setProd, getCart, setCart} = useContext(mainContext)

    const {title} = useParams()

    const searchTitle = title.replaceAll('-',' ')

    const cardy = getProd.filter(x => x.title === searchTitle)[0]

    function addToCart(x){
        setCart([...getCart, x])
    }

    return (
        <div className='oneCard'>
            <img src={cardy.photo} alt=""/>
            <p>Price: {cardy.price}</p>
            <p>{cardy.description}</p>
            <p>Price: {cardy.price}</p>
            <div className="btn2" onClick={()=>addToCart(cardy)}>Add</div>

        </div>
    );
};

export default SingleProductComponent;