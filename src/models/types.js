const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TypeSchema = new Schema({
        name: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('type', TypeSchema);