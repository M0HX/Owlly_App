// API's / Functions

const {Review} = require("../models/Review");


// CRUD Operations
// HTTP POST - Create -> Post the data.
// HTTP GET  - Read   -> Retrieves the data.
// HTTP PUT/POST  - Update -> Updates the data.
// HTTP DELETE/GET/POST - Delete -> Deletes the data.




// Create Operation
exports.review_create_get = (req, res) => {
    Review.find()
    .then( reviews => {
        res.render("review/add", {reviews})
    }
    )
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
    //res.render("review/add");
}

exports.review_create_post = (req, res) => {
    console.log(req.body); //check if we're getting req.body
    let review = new Review(req.body);

    // Save Review
    review.save()
    .then(() => {
        res.redirect("/review/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })

}

exports.review_index_get = (req, res) => {
    Review.find()
    .then((reviews) => { // catch reviews and then display
        res.render("review/index", {reviews}); // then we sending them to our index
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}

exports.review_show_get = (req, res) => {
    console.log(req.query.id);
    Review.findById(req.query.id).populate('review')
    .then((review) => {
        res.render("review/detail", {review})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}

exports.review_delete_get = (req, res) => {
    console.log(req.query.id);
    Review.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/review/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}

exports.review_edit_get = (req, res) => {
    console.log(req.query.id);
    Review.findById(req.query.id)
    .then((review) => {
        // console.log(review);
        res.render("review/edit", {review});
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}


exports.review_update_put = (req, res) => {
    console.log(req.query.id);
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/review/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later.")
    })
}
