const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const categoryCntrl = require("../controllers/category");

// Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/categories/');
    },
    filename: function (req, file, cb) {
      cb(null, 'category-' + Date.now() + '-' + file.originalname);
    }
  });
const upload = multer({ storage: storage });

// Ensure logged in middleware
router.use(ensureLoggedIn);

// Routes
router.get("/add", categoryCntrl.category_create_get);
router.post("/add", upload.single('categoryImg'), categoryCntrl.category_create_post);
router.get("/detail", categoryCntrl.category_show_get);
router.get("/index", categoryCntrl.category_index_get);
router.get("/delete", categoryCntrl.category_delete_get);
router.get("/edit", categoryCntrl.category_edit_get);
router.post("/update", categoryCntrl.category_update_put);

module.exports = router;
