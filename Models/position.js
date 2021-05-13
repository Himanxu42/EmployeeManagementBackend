const mongoose = require('mongoose');
 
const positionSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true 
    }
})

module.exports = mongoose.model('position', positionSchema);
