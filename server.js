//Dependencies
//Load Express
const express = require('express')
const session = require('express-session');
const passport = require('passport');

// Load Express EJS LAYOUTS
const expressLayouts = require('express-ejs-layouts');

const dayjs = require('dayjs');
dayjs().format()

//Initialize Express 
const app = express();

//Require and initalize dotenv
require('dotenv').config();

//Port Configuration
const port = process.env.PORT;

//bringing in configs at the same time
require('./config/passport');

//Making the session saved for every user and using it 
app.use(session({
    secret: process.env.secret,
    resave: false, 
    saveUninitialized: true
}));

//Passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
    res.locals.user = req.user;
    next();
})



//Node.js to look for all the static file in public folder (CSS, JS, AUDIO)
app.use(express.static(__dirname + '/public'));


//Nodejs to look into the folder called views for all the ejs files
app.set("view engine", "ejs");

//NodeJs to look into views folder for the file named layout.ejs
app.use(expressLayouts);

//Database Configuration
const db = require('./config/db');

//Import Routes
const indexRouter = require("./routes/index");
const placeRouter = require('./routes/place');
const categoryRouter = require("./routes/category");
const reviewRouter = require('./routes/review');


//Mount Routes
app.use("/", indexRouter)
app.use('/place', placeRouter);
app.use("/category", categoryRouter)
app.use('/review', reviewRouter);





app.listen(port, ()=> {
    console.log(`The Entertainment App is running on this Port ${port}`);
});
