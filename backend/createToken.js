const jwt = require("jsonwebtoken");
let generateToken = (user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    },process.env.TOKEN_PASSWORD,
    {
        expiresIn:'30d'
    })
};
module.exports = generateToken;



