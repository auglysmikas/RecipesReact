import React from 'react';
import {useContext} from "react";
import mainContext from "../context/mainContext";

const BasketFull = () => {

    const {getCart} = useContext(mainContext)


    let sum = getCart.reduce((a, b) => a + b.price, 0)

    return (
        <div>

            {getCart.map((x, i) =>
                <div className='productCart' key={i} >
                    <img src={x.photo} alt=""/>
                    <div className='center'>
                        <h>Title: {x.title}</h>
                        <h3>Price: {x.price}</h3>
                    </div>

                </div>
            )}

            <div className='total'>
                <h3>Total: {sum} 💰</h3>
            </div>

        </div>
    );
};

export default BasketFull;