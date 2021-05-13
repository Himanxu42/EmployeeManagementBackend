const mongoose = require('mongoose');
 
const depatmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true 
    }
})

module.exports = mongoose.model('department', depatmentSchema);
