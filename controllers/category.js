const {Category} = require("../models/Category")
const {Place} = require("../models/Place")


//Create operations 
exports.category_create_get = (req, res) => {
    Place.find()
    .then((places) =>{
        res.render("category/add" , {places});
    })
    .catch( err =>{
        console.log(err);
    })
}
    //save  place inside category 

exports.category_create_post = (req , res) => {
    //Empede schema
//     console.log(req.body);
    let category = new Category(req.body)
//Save category
category.save()
    .then(() => {
        console.log(req.body)
        req.body.place.forEach(place => {
            Place.findById(place)
            .then((place) => {
                place.category.push(category);
                place.save();
            })
            .catch(err => {
                console.log(err);
            })
        });
        res.redirect("/category/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
    })
}

exports.category_index_get = (req, res) => {
    //put the place name n the category
Category.find().populate('place')
.then((category) => {
    res.render("category/index" , {category});
})
.catch((err) => {
    console.log(err);
})
}

exports.category_show_get = (req, res) => {
    console.log(req.query.id);
    Category.findById(req.query.id).populate('place')
    .then((category) => {
        res.render("category/detail" , {category});
    })
    .catch((err) => {
        console.log(err);
    })
}


exports.category_delete_get = (req, res) => {
    console.log(req.query.id);
    Category.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/category/index");
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.category_edit_get = (req, res) => {
    Category.findById(req.query.id).populate('place')
    .then((category) => {
        res.render("category/edit" , {category});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.category_update_put = (req, res) => {
    console.log(req.body.id);
    Category.findByIdAndUpdate(req.body.id , req.body).populate('place')
    .then(() => {
        res.redirect("/category/index");
    })
    .catch((err) => {
        console.log(err);
    })
}







