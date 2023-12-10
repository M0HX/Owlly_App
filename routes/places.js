const express = require('express');
const router = express.Router();
const placesCntrl = require("../controllers/places")


//Routes
router.get("/index", authorCntrl.author_index_get);