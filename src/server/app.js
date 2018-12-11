const express = require("express");
const mongoose = require("mongoose");
const DB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const booksRouter = require("./routes/api/books");

app.use(bodyParser.json());
app.use(cors());

app.use("/books",booksRouter);

mongoose.connect(DB.mongoURI,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to mongoDB");
    }
});

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Server running on port[${port}]`);
});