import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {


    const nav = useNavigate()

    const {getCart, setCart} = useContext(mainContext)

    function addToCart(x){
        setCart([...getCart, x])
    }
    function showCard(x){
        const param = x.title.replaceAll(' ','-')
        nav('/AllProducts/' + param)
    }

    return (
        <div className='product'>


                <img src={item.photo} alt=""/>
                <p>Title: {item.title}</p>
                <p><b>Price: {item.price} 💰</b></p>
                <p>Description: {item.description}</p>

                <div className='flex'>
                    <div className='btn2' onClick={()=>addToCart(item)}>Add To Cart</div>
                    <div className='btn2' onClick={()=>showCard(item)}>Show Card</div>
                </div>


        </div>
    );
};

export default ProductCard;