
const User = require('../Models/employee')
const IsueJWT = require('../Utility/Utils');
const login = (req, res) => {
   
    const { email, password } = req.body;
     console.log(password)
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    error: "user doesnot exist"
                })
            }
            else if (user.password !== password) {
                return res.status(401).json({
                    error: "Password didnot match"
                })
            }
            const tokenObject = IsueJWT.IssueJwtToken(user);
            return res.json({
                role: user.role, 
                id:user._id,
                token: tokenObject.token,
                expiresAt : tokenObject.expiresAt
            })
        }).catch(err => {
            return res.status(400).json({
                error: "doesnot exist"
            }
        )
    }) 
}

module.exports = {login}