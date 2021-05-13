
const express = require('express');
const Router = express.Router();
const {addPosition,deletePosition,getPosition} = require('../Controllers/position')
Router.post('/addposition', addPosition);
Router.get('/getpositions', getPosition);
Router.delete('/delete/position', deletePosition)

module.exports = Router;