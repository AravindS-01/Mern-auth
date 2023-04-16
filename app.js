
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = require('./routes/user-routes');


const url ="mongodb+srv://aravindad13:VsdXlmXTMfZTnpsk@cluster0.soxo97e.mongodb.net/auth?retryWrites=true&w=majority"


app.use(express.json());
app.use('/v1', router);

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    app.listen(5000);
    console.log("Database is connected");
}).catch((e) => console.log(e));


//pswd:  VsdXlmXTMfZTnpsk

// use => used to add middleware  i.e., both v1 and routes path combine screen exceuted
//