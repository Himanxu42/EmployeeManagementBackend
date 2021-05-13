const express = require('express');
const Router = express.Router();
const {addDepartment,deleteDepartment,getDepartment} = require('../Controllers/departments')
Router.post('/adddepartment', addDepartment);
Router.get('/getdept', getDepartment);
Router.delete('/delete', deleteDepartment);

module.exports = Router;
