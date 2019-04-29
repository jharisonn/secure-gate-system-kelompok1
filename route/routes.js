const express = require('express');
const route = express.Router();

const HomeController = require('../controller/HomeController');

route.get('/',HomeController.index);


module.exports=route;