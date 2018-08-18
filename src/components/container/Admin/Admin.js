import React, { Component } from 'react';
//import css file for styling
import './Admin.css';
//import the product form that will responsible for creating a product.
import ProductForm from '../../presentational/ProductForm/ProductForm';
//import axios to do axios calls
import axios from 'axios';
//Have global variable set to your Cloudinary Url.
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/alia1997/image/upload';
//import axios that will getALlProducts, createAProduct
export default class Admin extends Component {
    //In our state we will have a name, description, price, and picture in our state which will be our values when we create a product
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            price: '', 
            picture: '',
            //Define the boolean that will display the form.
            doCreate: false
        }
    }
    //We are gonna make it a arrow function since we are gonna pass it to our Form component
    handleName = (val) => {
        this.setState({name: val});
    }
    handleDesciption = (val) => {
        this.setState({description: val});
    }
    handlePrice = (val) => {
        this.setState({price: val});
    }
    //This is where will do an axios.get towards our cloudinary endpoint 
    //which will have a axios.post within the .then posting to your cloudinary database. 
    //In handle Changes for uploading images will use files. 
    handlePictureUpload = (files) => {
        console.log('files----------', files[0]);
         //Do a axios.get to get our credentials we will use to post to our cloudinary database. 
         //NOw define your formData, and append each value with a string, then a value.
         const formData = new FormData();
         axios.get('/api/upload')
         .then(res => {
            //  console.log(res.data.payload);
             //  console.log(process.env.REACT_APP_CLOUDINARY_API_KEY);
             //Append signature and cloudinary key
             formData.append("signature", res.data.payload.signature);
             //Then append the cloudinary api key. 
             formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
             //Then append the timestamp
             formData.append("timestamp", res.data.payload.timestamp);
             //Then append the image itself which will be the first value of the files array, make sure the string is file not files.
             formData.append("file", files[0]);
             //For debugging  purpose console.log each property of formData.entries()
             for(let key in  formData.entries()) {
                 console.log('key----------', key);
             }
             //Now post the image with all the credentails.
            axios.post('https://api.cloudinary.com/v1_1/aa1997/image/upload', formData).then(response => {
                //Now set the state of the image using the secure url 
                console.log(response);
                // this.setState({picture: response.data.secure_url})
            }).catch(err => console.log('Error posting to cloudinary database', err));
         }).catch(err => console.log('Get credentials Error---------', err));
    }
    createProduct = () => {
        //Destruct name, price, descrption, and picture from the state to post it to our database. 
        const { name, price, description, picture, doCreate } = this.state;
        //If the form is show, and all the input fields have values.
        if(doCreate && name && price && description && picture) {
            axios.post('/api/products', {name, price, description, picture})
            .then(res => {
                //Console.log the new product your just created 
                console.log(res.data.product);
            }).catch(err => console.log('Create Products Error-------------', err));
        } else {
            //Set the state of doCreate 
            this.setState({doCreate: !this.state.doCreate});
        }
    }
    render() {
        const { picture, description, name, price } = this.state;
        return (
            <div className='admin container'>
                <h2>Admin</h2>
                <button onClick={() => this.createProduct()}>Create Product</button>
                {/* <ProductForm create={this.createProduct} handleName={this.handleName} handleDesciption={this.handleDesciption}
                handlePrice={this.handlePrice} handlePictureUpload={this.handlePictureUpload} {...this.state}/> */}
                 <form>
                <img src={picture} alt={name} />
                <input type='file' onChange={e => this.handlePictureUpload(e.target.files)} value={picture}/>
                <input type='text' onChange={e => this.handleName(e.target.value)} value={name}/>
                <input type='text' onChange={e => this.handleDescription(e.target.value)} value={description}/>
                <input type='text' onChange={e => this.handlePrice(e.target.value)} value={price}/>
            </form>
            </div>
        );
    }
}