const bcrypt = require("bcryptjs");
const data = {
    users : [
        {
           name : "AshokIT",
           password : bcrypt.hashSync("1234", 8),
           email : "hr@ashokit.in",
           isAdmin : true
        },
        {
           name : "Praveen",
           password : bcrypt.hashSync("1234", 8),
           email : "praveen@ashokit.in",
           isAdmin : false
        }
    ]
};

module.exports = data;
