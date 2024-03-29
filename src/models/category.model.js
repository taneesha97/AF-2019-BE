const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    description: {type:String, required:true, trim:true},
    rooms: [{type: mongoose.Schema.Types.ObjectId, required:false, ref:'rooms'}]
});

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;