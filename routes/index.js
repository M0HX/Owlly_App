//Load Express module
const express = require('express');

//Initialize router functionally from express
const router = express.Router()

//Require index controller 
const indexCntrl = require("../controllers/index");


router.get("/", indexCntrl.index_get);


//Exports
module.exports = router;