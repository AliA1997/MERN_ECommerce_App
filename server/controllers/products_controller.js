const mongoose = require('mongoose');
const Product  = require('../models/product');
module.exports = {
    readAllProducts(req, res) {
        //When using mongoose can use a callback or a use a exec method to catch and respond to errors.
        Product.find({}).exec((err, products) => {
            if(err) console.log('Get Product Mongoose Error------------------', err);
            // console.log('products-------------', products);
            res.status(200).send(products);
        });
    },
    readProduct(req, res) {
        //Destruct the id from the endpoint url, to retrieve  a specific product.
        const { id } = req.params;
        //Copy and paste on of the product's id to the url when testing it.
        //Use the findById to get a specific product.
        Product.findById(id).exec((err, product) => {
            if(err) console.log('Get Single Product Error---------------', err);
            console.log('product--------------', product);
            res.status(200).json({product});
        })
    }
}