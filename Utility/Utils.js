require('dotenv').config();
var jwt = require('jsonwebtoken');

    const  IssueJwtToken = (user) => {
        const email = user.email;
        const expiresIn = '5m';
   
    const payload = {
        sub: email,
        iat: Date.now(),
    }
    const signedToken = jwt.sign(payload, process.env.SECRET_KEY , {expiresIn: expiresIn, algorithm: "HS256"})
    return {
        token: "Bearer " + signedToken,
        expiresAt: expiresIn 
    }
}

module.exports = {IssueJwtToken}