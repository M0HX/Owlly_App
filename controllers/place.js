//API's/ function
const {Place} = require("../models/Place")
const {Category} = require("../models/Category")
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
        res.render("place/detail" , {place});
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