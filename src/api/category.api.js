const express = require('express');
const router = express.Router();
const controller = require('../controller/category.controller');


module.exports = function(){
    router.post('/create',controller.createCategory);
    router.get('/',controller.getCategories);
    router.get('/:id',controller.getRoomsForCategory);
    //router.get('/:id',controller.);
    router.get('/amount/:id',controller.calculateRoomsAmount);
    return router;
}
