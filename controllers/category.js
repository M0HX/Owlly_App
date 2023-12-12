//API's/ function
const {Place} = require("../models/Place")
const {Category} = require("../models/Category")
//CRUD Operations 
//HTTP POST - create - post the data 
//HTTP GET - Read - Retrives the data 
//HTTP PUT - update - updates the data 
//HTTP DELETE/GET/POST - delete - deletes the data

//Create operations 
exports.category_create_get = (req, res) => {
res.render("category/add");
}
exports.category_create_post = (req , res) => {
    console.log(req.body);
    let category = new Category(req.body)

    //save category 
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
Category.find().populate('place')
.then((categorys) => {
    res.render("category/index" , {categorys});
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
    Category.findByIdAndUpdate(req.body.id , req.body)
    .then(() => {
        res.redirect("/category/index");
    })
    .catch((err) => {
        console.log(err);
    })
}









