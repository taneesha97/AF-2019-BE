const Category = require('../models/category.model');

const createCategory = async (req, res) => {
    if(req.body){
        const category = new Category(req.body);
        category.save().
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

//get all categories
const getCategories = async (req, res) => {
    await Category.find({}).populate('rooms', 'code amount wing pax')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//get rooms by category
const getRoomsForCategory = async (req, res) => {
    if(req.params && req.params.id){
        await Category.findById(req.params.id)
            .populate('rooms', 'code amount wing pax')
            .then(data => {
                res.status(200).send({ rooms: data.rooms });
            }).catch(error => {
                res.status(500).send({error: error.message});
                // console.log(error);
            });
    }
}

const calculateRoomsAmount = async (req, res) => {
    if (req.params && req.params.id) {
        let category = await Category.findById(req.params.id).populate('rooms', 'amount')
        let totalAmount = 0;

        if (category.rooms.length > 0) {
            category.rooms.map((room) => {
                totalAmount = totalAmount + room.amount;
                console.log(totalAmount);
            });
        }
        res.status(200).send({totalAmount: totalAmount});
    }
}

    module.exports = {
        createCategory,
        getCategories,
        getRoomsForCategory,
        calculateRoomsAmount
};
