//Dependencies
//Load Express
const express = require('express')

// Load Express EJS LAYOUTS
const expressLayouts = require('express-ejs-layouts');

//Initialize Express 
const app = express();

//Require and initalize dotenv
require('dotenv').config();

//Port Configuration
const port =process.env.PORT;

//Node.js to look for all the static file in public folder (CSS, JS, AUDIO)
app.use(express.static("public"));


//Nodejs to look into the folder called views for all the ejs files
app.set("view engine", "ejs");

//NodeJs to look into views folder for the file named layout.ejs
app.use(expressLayouts);

//Database Configuration
const db = require('./config/db');


// Import/Require Routes
const indexRouter = require('./routes/index');
const reviewRouter = require('./routes/review');


// Mount Routes
app.use('/', indexRouter);
app.use('/review', reviewRouter);



app.listen(port, ()=> {
    console.log(`The Entertainment App is running on this Port ${port}`);
});
