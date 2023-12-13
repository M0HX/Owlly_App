//API's/ function
// const upload = require('../config/multer');
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
        .then((categorys) => {
            // Pass an empty place object for the add page
            res.render('place/add', { categorys, place: {} });
        })
        .catch((err) => {
            console.log(err);
            res.send('Please try again later.');
        });
};
    //save  category inside place
    exports.place_create_post = (req, res) => {
        // Example route using Multer
        // upload.single('placeImg')(req, res, function (err) {
        //     if (err) {
        //         console.log(err);
        //         return res.send('Error uploading file.');
        //     }
        console.log("req.body", req.body)
    
        console.log("req.file", req.file)
        if(req.file) {
        req.body.placeImg = "/uploads/" + req.file.filename
        } else {
            req.body.placeImg = "/uploads/default.png";
        }
            const place = new Place(req.body);
            
            // Handle file upload using multer
            // File upload was successful, update placeImg property
            // if (req.file) {
            //     place.placeImg = req.file.path;
            // }
    
            place.save()
                .then((savedPlace) => {
                    console.log('Saved place:', savedPlace);
    
                    res.redirect("/place/index");
                })
                .catch((err) => {
                    console.log(err);
                    res.send('Please try again later.');
                });
        // });
    };
    
    



exports.place_index_get = (req, res) => {
    //put the category name n the place
Place.find().populate('category')
.then((places) => {
    Review.find()
    .then(review=>{
        res.render("place/index" , {places,review});
    })
    .catch(err=>{
        console.log(err);
    })

})
.catch((err) => {
    console.log(err);
})
}

exports.place_show_get = (req, res) => {
    console.log("place id: " + req.query.id);
    Place.findById(req.query.id)
        .populate('category')
        .then((place) => {
            Review.find({ placeID: req.query.id })
                .populate('user')
                .then((reviews) => {
                    console.log('Fetched reviews:', reviews);
                    res.render("place/detail", { place, reviews });
                })
                .catch((err) => {
                    console.log(err);
                    res.send("Please try again later.");
                });
        })
        .catch((err) => {
            console.log(err);
        });
};







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





