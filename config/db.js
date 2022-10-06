const mongoose = require('mongoose');
require ('dotenv').config({path:'./Config/.env'});


// db connection config
const db = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('successfully connected to db!'))
    .catch((error) => console.log((error)));
};

module.exports = db;
