const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Need an id, name, description, price, 
//Id is created by default in mongodb
const product = new Schema({
    name: String,
    description: String,
    price: Number,
    //Add a New picture added to model.
    picture: String
});

//To create a model, use the name of the model, and the schema with the properties of the model
// that  wil be inserted to the  database.
module.exports = mongoose.model('Product', product);