import React, { Component } from 'react';
//import axios to call your backend.
import axios from 'axios';
//Import the ProductCard that will be responsible for rendering each product.
import ProductCard from '../../presentational/ProductCard/ProductCard';
//Import the loader that is used when the data is being retrieved 
import Loader from '../../presentational/Loader/Loader';
//import css file for styling
import './Home.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state ={
            //Have a products and loading 
            //products holding all your products
            products: [],
            //loading for when loader is shown
            //set it true, and when data is retrieve set to false.
            loading: true
        }
    }
    componentDidMount() {
        axios.get('/api/products').then(res => {
            //always have console.logs for debugging
            console.log('res.data products-----------', res.data);
            /////Set your loading to false, and products to the res.data, since we are doing res.send in our backend.
            this.setState({products: res.data, loading: false});
            //Each .then must have a .catch to catch errors.
        }).catch(err => console.log('Read all products Error-------', err));
    }
    render() {
        //Destruct the products, loading from state.
        const { products, loading } = this.state;
        //If it is done loading return html else return the loading indicator.
        if(!loading) {
            return (
                <div className='home container'>
                    <div className='home-products container'>
                        {/* If hte products have data return products else return nothing using terinary statement */}
                        {products.length ? products.map(product => <ProductCard key={product.id} {...product} />) : null}
                    </div>
                </div>
            );
        } else {
            return <Loader />
        }
    }
}