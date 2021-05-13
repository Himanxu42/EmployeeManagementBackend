require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dpetRoutes = require('./Routes/department');
const posRoutes = require('./Routes/position');
const EmpRoutes = require('./Routes/employee');
const authRoutes = require('./Routes/Auth');
const passport = require('passport');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}


//setting up database 
mongoose.connect("mongodb+srv://himanshu:1234@cluster0.ojtfu.mongodb.net/Employees?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is up and running")
    })
    .catch((err) => {
        console.log(err)
    });

//configure passport and pass the passport object 
require('./Config/passport')(passport);

// middlewares
app.use(express.json())
app.use(passport.initialize());
app.use(cors(corsOptions));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
//setup routes 
app.use('/api', dpetRoutes);
app.use('/api', posRoutes);
app.use('/api', EmpRoutes);
app.use('/api', authRoutes);


//Listenning to server
app.listen(PORT, () => {
    console.log("Application is running at port", PORT)
})