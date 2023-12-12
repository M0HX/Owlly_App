// Load Express Module
const express = require('express');
const methodOverride = require('method-override');



// Initialize Router Functionality from express framework.
const router = express.Router();

// 
router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));


// Require our user controller
const userCntrl = require("../controllers/user");
const upload = require('../config/multer');

// Routes
router.get("/add", userCntrl.user_create_get);

router.post("/add", userCntrl.user_create_post);

router.get("/index", userCntrl.user_index_get);

router.get("/detail", userCntrl.user_show_get);

router.delete("/delete", userCntrl.user_delete_get);

router.get("/edit", userCntrl.user_edit_get);

router.post("/update", upload.single("avatarImg") , userCntrl.user_update_put);

// Export router
module.exports = router;