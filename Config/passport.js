require('dotenv').config(); 
const User = require('../Models/employee');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:  process.env.SECRET_KEY,
    algorithms: ["HS256"]
 }

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload)
        User.findOne({ email: jwt_payload.sub }, (err,user) => {
            if (err) {
                return done(err, false); 
            }
            else {
                return done(null,user) 
            }
        })
     }))
 }