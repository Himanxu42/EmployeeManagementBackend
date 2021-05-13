const mongoose = require('mongoose');
 
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true 
    },
    email: {
        type: String,
        require:true,
        trim:true
    },
    password: {
        type: String,
        require: true,
        trim:true
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require:true
    },
    department: {
        type: String,
        require:true
    },
    position: {
        type: String,
        require:true 
    },
    salary: {
        type: String,
        require:true
    },
    role: {
        type: Number,
        require:true
    },
    salary_date : {
        type :String,
        reuire:true, 
        default:''
    }
})

module.exports = mongoose.model('employee', employeeSchema);
