//Loading the Dependencies
const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(methodOverride('_method'));
const placeCntrl = require("../controllers/place")


//Routes
router.get("/add", placeCntrl.place_create_get);
router.post("/add", placeCntrl.place_create_post);
router.get("/index2", placeCntrl.placeU_index_get);
router.get("/index", placeCntrl.place_index_get);
router.get("/detail", placeCntrl.place_show_get);
router.delete("/delete", placeCntrl.place_delete_get);
router.get("/edit", placeCntrl.place_edit_get);
router.put("/update", placeCntrl.place_update_put);

//Exporting 
module.exports = router;

