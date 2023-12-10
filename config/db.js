//Mongoose dependency 
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DATABASEURL)
.then(() => {
    const db = mongoose.connection;
    console.log(`MongoDB: Connected to ${db.name} at Host ${db.host} and Port ${db.port}`);
})
.catch((err) => {
console.log("MongoDB not Connected!!" + err)

})
