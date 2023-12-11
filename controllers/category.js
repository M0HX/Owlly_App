const {Category} = require("../models/Category")
const {Place} = require("../models/Place")


//Add Category
exports.category_create_get = (req, res) => {
    Category.find()
    .then((category) =>{
        res.render("category/add" , {category});
    })
    .catch( err =>{
        console.log(err);
    })
}

//Save Category

exports.category_create_post = (req , res) => {
    let category = new Category(req.body)

    //save recipe 
    category.save()
    .then(() => {
        res.redirect("/category/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
    })
}
exports.category_index_get = (req, res) => {
    //put the place name n the category
Category.find()
.then((category) => {
    res.render("category/index" , {category});
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
    Category.findById(req.query.id)
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
