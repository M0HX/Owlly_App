// API's / Functions

const User = require("../models/User");


// CRUD Operations
// HTTP POST - Create -> Post the data.
// HTTP GET  - Read   -> Retrieves the data.
// HTTP PUT/POST  - Update -> Updates the data.
// HTTP DELETE/GET/POST - Delete -> Deletes the data.




// Create Operation
exports.user_create_get = (req, res) => {
    User.find()
    .then( users => {
        res.render("user/add", {users})
    }
    )
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
    //res.render("user/add");
}

exports.user_create_post = (req, res) => {
    console.log(req.body); //check if we're getting req.body
    let user = new User(req.body);

    // Save User
    user.save()
    .then(() => {
        res.redirect("/user/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })

}

exports.user_index_get = (req, res) => {
    // console.log("u: ",res.locals.user._id)
    if(res.locals.user){
         User.findById(res.locals.user._id)
    .then((users) => { // catch users and then display
        res.render("user/index", {users}); // then we sending them to our index
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
    }
   
}

exports.user_show_get = (req, res) => {
    // console.log(req.query.id);
    User.findById(req.query.id).populate('user')
    .then((user) => {
        res.render("user/detail", {user})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}

exports.user_delete_get = (req, res) => {
    // console.log(req.query.id);
    User.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/user/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}

exports.user_edit_get = (req, res) => {
    // console.log(req.query.id);
    User.findById(req.query.id)
    .then((user) => {
        // console.log(user);
        res.render("user/edit", {user});
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}


exports.user_update_put = (req, res) => {
    // console.log(req.query.id);
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/user/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}
