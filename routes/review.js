// Load Express Module
const express = require('express');
const methodOverride = require('method-override');



// Initialize Router Functionality from express framework.
const router = express.Router();

// 
router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));


// Require our review controller
const reviewCntrl = require("../controllers/review");

// Routes
router.get("/add", reviewCntrl.review_create_get);

router.post("/add", reviewCntrl.review_create_post);

router.get("/index", reviewCntrl.review_index_get);

router.get("/detail", reviewCntrl.review_show_get);

router.delete("/delete", reviewCntrl.review_delete_get);

router.get("/edit", reviewCntrl.review_edit_get);

router.post("/update", reviewCntrl.review_update_put);


// Export router
module.exports = router;