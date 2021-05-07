//nodejs
//javascript
//servers

//import the modules
//require() function used to import the modules
//require() function is the predefined function in  nodejs
const express = require("express");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const expressAsyncHandler = require("express-async-handler");
const User = require("./model/userModel");
const data = require("./data");
const bcrypt = require("bcryptjs");
const generateToken = require("./createToken");
const dotenv = require("dotenv");


dotenv.config();


//create the rest object
const app = express();
//where "app" is the rest object
//"app" object used to develop the rest services
//Ex. GET POST PUT DELETE


//set the json as MIME Type
app.use(bodyparser.json());


//enable the cors policy
app.use(cors());

//accept the data from client application and parse it
app.use(bodyparser.urlencoded({extended:false}));


//create the client ref
//client object used to connect to database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference object
//where "ashokIT" used to connect to mongodb database



//mongoose connection
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ng7pm?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
});




//create the GET Request
app.get("/api/products",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ng7pm?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ng7pm");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })  
        }
    });
});



//create the get request based on id
//id coming from client application (DetailScreen)
app.get("/api/products/:id",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ng7pm?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("ng7pm");
            db.collection("products").find({"_id":new mongodb.ObjectID(req.params.id)}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array[0]);
                }
            });
        }
    });
});


//inform exception to user
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})



//create the rest api with mongoose
app.get("/api/users/seed", expressAsyncHandler(async (req,res)=>{
    await User.remove({});
    const createUsers = await User.insertMany(data.users); 
    res.send({ createUsers });
}));




//create signin authentication
app.post("/api/users/signin",expressAsyncHandler(async (req,res)=>{
    const user = await User.findOne({"email":req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token : generateToken(user)
            })
        }else{
            res.status(401).send({"message":"invalid password"});
        }
    }else{
        res.status(401).send({"message":"invalid email or password"})
    }
}));


app.post("/api/users/registration", expressAsyncHandler(async (req,res)=>{
      //read the data from client application and match with Modal
      const user = new User({
          name : req.body.name,
          email : req.body.email,
          password : req.body.password,
          isAdmin : req.body.isAdmin
      });
      const createdUser = await user.save();
      res. send({
          _id :  createdUser._id,
          name : createdUser.name,
          email : createdUser.email,
          token : generateToken(createdUser),
          isAdmin : createdUser.isAdmin
      })
}));




//alot port number to node server  (cloud server, AWS, Heroku, GitHub pages)
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});




//http://localhost:8080/api/products            (GET)
//http://localhost:8080/api/products/{id}       (GET)
//http://localhost:8080/api/users/seed          (GET)    ( Inserting Dummy Recordings into DataBase (2 records) )
//http://localhost:8080/api/users/signin        (POST)   ( check signin authentication )
//http://localhost:8080/api/users/registration  (POST)   ( registration rest api call )