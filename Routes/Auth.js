const express = require('express');
const passport = require('passport');
const { login }  = require('../Controllers/Auth');
const Router = express.Router();

Router.post('/login', login);

Router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res) => {
    return res.send('PROTECTED ROUTE ACCESSED') 
})
module.exports = Router