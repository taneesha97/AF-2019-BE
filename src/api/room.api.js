const express = require('express');
const router = express.Router();
const controller = require('../controller/room.controller');


module.exports = function(){
    router.post('/create',controller.createRoom);
    router.get('/',controller.getRooms);

    return router;
}