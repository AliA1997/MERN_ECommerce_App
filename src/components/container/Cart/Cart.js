import React, { Component } from 'react';
//import the ProductCard component to display what is in the cart. 
import ProductCard from '../../presentational/ProductCard/ProductCard';
//import the css file for styling
import './Cart.css';

//Define sample data for now to display in your cart.
const sampleCartData = [
    { name: 'Test 1', description: 'Test Product 1', price: 20, id: 1},
    { name: 'Test 2', description: 'Test Product 2', price: 10, id: 2},
    { name: 'Test 3', description: 'Test Product 3', price: 30, id: 3}
] 
export default class Cart extends Component {
    render() {
        return (
            <div className='cart container'>
                <div className='cart-info container'>
                    <h2>Your Cart!</h2>
                    <div>
                        {sampleCartData.map(product => <ProductCard key={product.id} {...product} />)}
                    </div>
                </div>
            </div>
        );
    }
}