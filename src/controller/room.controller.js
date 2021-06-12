const Room = require('../models/room.model');

//add room
const createRoom = async (req, res) => {
    if(req.body){
        const room = new Room(req.body);
        room.save().
        then(data => {
            res.status(200).send({data: data});
            // res.json(data)
        })
            .catch(error => {
                res.status(500).send({error: error.message});
                // console.log(error);
            });
    }
}

//get all rooms
const getRooms = async (req, res) => {
    await Room.find({}).populate('categories', 'name description')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}


module.exports = {
    createRoom,
    getRooms,
    //getRoomsForCategory
};