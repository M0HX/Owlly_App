const express = require('express');
const router = express.Router();
const placeCntrl = require("../controllers/place")


//Routes
router.get("/index", placeCntrl.author_index_get);