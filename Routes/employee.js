const express = require('express');
const Router = express.Router();
const {getAEmployee,getAllEmployee,addEmployee,deleteEmployee,updateEmployee} = require('../Controllers/employee')
Router.post('/addemployee', addEmployee);
Router.get('/getemployee/:id', getAEmployee);
Router.delete('/delete/employee', deleteEmployee);
Router.put('/update/:id', updateEmployee);
Router.get('/getallemployee', getAllEmployee);

module.exports = Router;
