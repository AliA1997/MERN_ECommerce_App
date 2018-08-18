//Import cloudinary that will be responisble for signing the credentials. 
const cloudinary = require('cloudinary');
module.exports = {
    upload(req, res) {
        //We will first define our timestamp, and our api_secret
        //Create a new Date instance.then get the time and divide it by a thousand, then have it within Math.round();
        const timestamp = Math.round(new Date().getTime() / 1000);
        //Define our api secret that we will use to sign the request. 
        const api_secret = process.env.CLOUDINARY_API_SECRET;
        //Now define your signature by using cloudinary.utils. sign_api_request to sign request with the timestamp and api_secret/
        ///Passs a object with your timestamp, and then as a second argument your api secret.
        const signature = cloudinary.utils.api_sign_request({timestamp: timestamp}, api_secret);
        //Define our payload that will have the api key
        const payload = {
            timestamp,
            signature 
        }
        //Then send our payload to our front-end 
        res.status(200).json({payload});
    }
}