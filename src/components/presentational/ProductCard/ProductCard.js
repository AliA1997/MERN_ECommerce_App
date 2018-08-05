import React from 'react';
//Import the css file for styling 
import './ProductCard.css';

//Don't forget to pass props to a stateless component as a argument.
const ProductCard = (props) => {
    const { name, price } = props;
    return ( 
        <div className='product-card container'>
            <div>
                <p className='product-card label'>{name}</p>
                <p className='product-card label'>${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;