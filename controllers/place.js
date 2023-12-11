// API'S OR FUNCTIONS 
const {Place} = require("../models/Place")
const {Category} = require("../models/Category")
const {Review} = require("../models/Review")


//CRUD operation
//Create Operation
exports.place_create_get = (req,res)=>{
    res.render("place/add");
}

exports.place_create_post = (req,res)=>{
    console.log(req.body);
    let place = new Place(req.body);

    //Save Place
    place.save()
    .then(()=> {
        res.redirect("/place/index");
    })
    .catch((err)=> {
        console.log(err)
        res.send("Please try again");
    })
}

exports.place_index_get = (req,res) =>{
    Place.find()
    .then((place)=> {
        res.render("place/index", {place})
    })
    .catch((err)=> {
        console.log(err)
    })
}

exports.place_show_get = (req,res)=>{
    console.log(req.query.id);
    Place.findById(req.query.id).populate('place')
    .then((place)=> {
        res.render("place/detail", {place})
    })

    .catch((err)=> {
     console.log(err);
    })
}

//Delete Operation 
exports.place_delete_get = (req,res) =>{
    console.log(req.query.id)
    Place.findByIdAndDelete(req.query.id)
    .then(()=> {
        res.redirect("/place/index");
    })

    .catch((err)=> {
     console.log(err);
    })
}

//EDit Operation
exports.place_edit_get = (req,res) => {
    Place.findById(req.query.id)
    .then((place)=> {
        res.render("place/edit", {place});
    })

    .catch(err => {
     console.log(err);
    })
}

exports.place_update_put = (req,res) => {
    console.log(req.body.id);
    Place.findByIdAndUpdate(req.body.id, req.body)
    .then(()=> {
        res.redirect("/place/index");
    })

    .catch(err => {
     console.log(err);
    })
}