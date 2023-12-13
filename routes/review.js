// Load Express Module
const express = require('express');
const methodOverride = require('method-override');


// Multer
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })



// Initialize Router Functionality from express framework.
const router = express.Router();

// 
router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));


// Require our review controller
const reviewCntrl = require("../controllers/review");

// Routes
router.get("/add",reviewCntrl.review_create_get);

router.post("/add", upload.single('reviewImg'), reviewCntrl.review_create_post);

router.get("/index", reviewCntrl.review_index_get);

router.get("/detail", reviewCntrl.review_show_get);

router.delete("/delete", reviewCntrl.review_delete_get);

router.get("/edit", reviewCntrl.review_edit_get);

router.post("/update", reviewCntrl.review_update_put);


// Export router
module.exports = router;