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
    console.log(req.body);

    const userID = req.user._id;
    const userName = req.user.name;

    let review = new Review({
        reviewContent: req.body.reviewContent,
        placeID: req.body.placeID,
        userID: userID,
        reviewerName: userName // reviewer's name
    });

    // Save Review
    review.save()
        .then(() => {
            res.redirect("/review/index");
        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later.");
        });
};



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

    Review.find({ placeID: req.query.id })
        .populate('user')
        .then((reviews) => {
            console.log('Fetched reviews:', reviews);
            res.render("review/detail", { reviews });
        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later.");
        });
};




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
