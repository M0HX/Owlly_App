// API'S OR FUNCTIONS 
const {Places} = require("../models/Places")
const {Category} = require("../models//Category")
const {Review} = require("../models/Review")

//CRUD operation
//Create Operation
exports.places_create_get = (req,res)=>{
    res.render("places/add");
}

exports.places_create_post = (req,res)=>{
    console.log(req.body);
    let places = new Places(req.body);

    //Save Places
    places.save()
    .then(()=> {
        res.redirect("/places/index");
    })
    .catch((err)=> {
        console.log(err)
        res.send("Please try again");
    })
}

exports.places_index_get = (req,res) =>{
    Places.find()
    .then((placess)=> {
        res.render("places/index", {placess, dayjs})
    })
    .catch((err)=> {
        console.log(err)
    })
}

exports.places_show_get = (req,res)=>{
    console.log(req.query.id);
    Places.findById(req.query.id).populate('article')
    .then((places)=> {
        res.render("places/detail", {places, dayjs})
    })

    .catch((err)=> {
     console.log(err);
    })
}

//Delete Operation 
exports.places_delete_get = (req,res) =>{
    console.log(req.query.id)
    Places.findByIdAndDelete(req.query.id)
    .then(()=> {
        res.redirect("/places/index");
    })

    .catch((err)=> {
     console.log(err);
    })
}

//EDit Operation
exports.places_edit_get = (req,res) => {
    Places.findById(req.query.id)
    .then((places)=> {
        res.render("places/edit", {places});
    })

    .catch(err => {
     console.log(err);
    })
}

exports.places_update_put = (req,res) => {
    console.log(req.body.id);
    Places.findByIdAndUpdate(req.body.id, req.body)
    .then(()=> {
        res.redirect("/places/index");
    })

    .catch(err => {
     console.log(err);
    })
}