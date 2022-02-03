import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import ProductCard from "./ProductCard";


const AllProducts = () => {

    const {getProd} = useContext(mainContext)

    return (
        <div className='allProducts'>
            {getProd.map((x,i)=> <ProductCard key={i} index={i} item={x}/>)}
        </div>
    );
};

export default AllProducts;