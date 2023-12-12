//API's/ function
const {Place} = require("../models/Place")
const {Category} = require("../models/Category")
const {Review} = require("../models/Review");


//CRUD Operations
//HTTP POST - create - post the data
//HTTP GET - Read - Retrives the data
//HTTP PUT - update - updates the data
//HTTP DELETE/GET/POST - delete - deletes the data
//Create operations
exports.place_create_get = (req, res) => {
    Category.find()
    .then((categorys) =>{
        res.render("place/add" , {categorys});
    })
    .catch( err =>{
        console.log(err);
    })
}
    //save  category inside place
exports.place_create_post = (req , res) => {
    //Empede schema
//     console.log(req.body);
    let place = new Place(req.body)
// Category.findById(req.body.category)
// .then((category) => {
//     category.place.push(place);
//     category.save();
//     res.redirect("/category/index");
// })
// .catch((err) => {
//     console.log(ree);
// })
//Save place
place.save()
    .then(() => {
        console.log(req.body)
        req.body.category.forEach(category => {
            Category.findById(category)
            .then((category) => {
                category.place.push(place);
                category.save();
            })
            .catch(err => {
                console.log(err);
            })
        });
        res.redirect("/place/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
    })
}
exports.place_index_get = (req, res) => {
    //put the category name n the place
Place.find().populate('category')
.then((places) => {
    res.render("place/index" , {places});
})
.catch((err) => {
    console.log(err);
})
}
exports.place_show_get = (req, res) => {
    console.log(req.query.id);
    Place.findById(req.query.id).populate('category')
    .then((place) => {
        console.log(place)
        Review.find({placeID:place._id}).then((reviews)=>{
            res.render("place/detail" , {place, reviews});
        })
    })
    .catch((err) => {
        console.log(err);
    })
}
exports.place_delete_get = (req, res) => {
    console.log(req.query.id);
    Place.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/place/index");
    })
    .catch((err) => {
        console.log(err);
    })
}
exports.place_edit_get = (req, res) => {
    Place.findById(req.query.id).populate('category')
    .then((place) => {
        res.render("place/edit" , {place});
    })
    .catch((err) => {
        console.log(err);
    })
}
exports.place_update_put = (req, res) => {
    console.log(req.body.id);
    Place.findByIdAndUpdate(req.body.id , req.body).populate('category')
    .then(() => {
        res.redirect("/place/index");
    })
    .catch((err) => {
        console.log(err);
    })
}





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





