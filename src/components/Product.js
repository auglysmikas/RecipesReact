import React from 'react';
import {useRef, useContext} from "react";
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";


const Product = () => {

    const title = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()

    const nav = useNavigate()

    const {getProd, setProd} =useContext(mainContext)


    function createCard(){
        if(title.current.value.length>0
        && description.current.value.length>0
        && photo.current.value.length>0
        && price.current.value.length>0) {

            const prod = {
                title: title.current.value,
                description: description.current.value,
                photo: photo.current.value,
                price: price.current.value,
            }
            setProd([...getProd, prod])
            nav('/')

        }
        else alert("please fulfill all the parameters")

    }


    return (
        <div className='card'>

            <input type="text" ref={title} placeholder='title'/>
            <input type="text" ref={description} placeholder='description'/>
            <input type="text" ref={photo} placeholder='photo'/>
            <input type="number" ref={price} placeholder='price'/>

            <div onClick={createCard} className='btn'>Create Post</div>

        </div>
    );
};

export default Product;