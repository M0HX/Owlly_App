const express = require('express');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

const categoryCntrl = require("../controllers/category");


// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get("/add", ensureLoggedIn, categoryCntrl.category_create_get);
router.post("/add", ensureLoggedIn, categoryCntrl.category_create_post);

//Routes 
router.get("/add" ,categoryCntrl.category_create_get);

router.post("/add" ,categoryCntrl.category_create_post);

router.get("/index" ,categoryCntrl.category_index_get);

router.get("/delete" ,categoryCntrl.category_delete_get);

router.get("/edit" ,categoryCntrl.category_edit_get);

router.post("/update" ,categoryCntrl.category_update_put);

module.exports = router;
