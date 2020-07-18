const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
        id: {type: String, required: true, max: 100},
        name: {type: String, required: true, max: 100},
        description: {type: String, required: true, max: 100},
        price: {
          value: {type: Number, required: true, max: 100},
          currency: {type: String, required: true, max: 100},
        },
        type: {type: String, required: true, max: 100},
        department: {type: String, required: true, max: 100},
        weight: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);