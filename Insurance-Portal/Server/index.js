const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const secretkey = "secretkey";
require("dotenv").config(); // Load environment variables from .env
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const planRoutes = require("./routes/planRoutes");
const planDataRoutes = require("./routes/plandataRoutes");
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB using the MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.error("Error connecting to the database : ", error);
  });
//user
app.get("/auth/user/login", (req, resp) => {
    resp.json({
        message: "Client server is running successfully!!"
    });
});
//admin
app.get("/auth/admin/login", (req, resp) => {
    resp.json({
        message: "Admin server is running successfully!!"
    });
});
//user
app.post("/login", (req, resp) => {
    const user = {
        id: 1,
        username: "swapnja",
        email: "swapnjakhopade01@gmail.com"
    };
    jwt.sign({ user }, secretkey, { expiresIn: '300s' }, (err, token) => {
        resp.json({
            token
        });
    });
});

app.post("/profile",verifyToken,(req,resp) => {
   jwt.verify(req.token,secretkey,(err,authData) => {
    if(err){
        resp.send({result:"Invalid token"})
    }else{
        resp.json({
            message :"Profile Accessed",
            authData
        })
    }
   })
})

function verifyToken(req,resp,next){
    const bearerHeader = req.headers['authentication'];
    if (typeof bearerHeader !== 'undefined'){
     const bearer = bearerHeader.split(" ");
     const token = bearer[1];
     req.token = token;
     next();
    }else{
        resp.send({
            result:'Token is not valid'
        })
    }
}
//admin

app.post("/signup", (req, resp) => {
    const admin = {
        id: 1,
        username: "swapnja",
        email: "swapnjakhopade01@gmail.com"
    };
    jwt.sign({ admin }, secretkey, { expiresIn: '300s' }, (err, token) => {
        resp.json({
            token
        });
    });
});

app.post("/profile",verifyToken,(req,resp) => {
   jwt.verify(req.token,secretkey,(err,authData) => {
    if(err){
        resp.send({result:"Invalid token"})
    }else{
        resp.json({
            message :"Profile Accessed",
            authData
        })
    }
   })
})

function verifyToken(req,resp,next){
    const bearerHeader = req.headers['adminauthentication'];
    if (typeof bearerHeader !== 'undefined'){
     const bearer = bearerHeader.split(" ");
     const token = bearer[1];
     req.token = token;
     next();
    }else{
        resp.send({
            result:'Token is not valid'
        })
    }
}


// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/plans", planRoutes);
app.use("/plandata", planDataRoutes);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on 5000 port");
});

