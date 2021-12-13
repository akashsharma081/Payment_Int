var express = require('express');
var cors = require('cors'); // response come from origin 
var bodyParser = require('body-parser'); // post request ke kaam aayega 
var MongoClient = require('mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectId;
// var upload = require('./multerConfig');
var path = require("path");
var Razorpay = require("razorpay");
var axios=require("axios");
var app=express();
app.use(cors());
var client = new MongoClient("mongodb+srv://serviceproject:serviceproject@cluster0.gww62.mongodb.net/learn?retryWrites=true&w=majority",{useNewUrlParser:true , UseUnifiedTopology:true});

var connection;
client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("database connected Successfully");
    }
    else{
        console.log("database could not connect");
    }
})

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.post('/create-student',bodyParser.json(),(req,res)=>{
    var studentCollection =connection.db('learn').collection('student');   
    console.log("hello1");
    studentCollection.insert(req.body,(err,result)=>{
        console.log("hello");
        if(!err)
        {
            res.send({status:"ok",data:"Student data sent succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/razorpay/create-order',bodyParser.json(),(req,res)=>{
    var instance = new Razorpay({
        key_id: 'rzp_test_UwYYchGzh2FMiR',
        key_secret: 'JXRCHEQIxi9ReCa9BSchWQPZ',
      });

      var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: new Date().getTime()
      };
      instance.orders.create(options, function(err, order) {
        res.send({status:"ok",orderid:order.id});
      });
})

app.post('/razorpay/capture',bodyParser.json(),(req,res)=>{
   axios.post(`https://api.razorpay.com/v1/payments/${req.body.orderid}/capture`,{
    "amount": req.body.amount,
    "currency": "INR"
  })
})


// key="rzp_test_UwYYchGzh2FMiR";
// secert key="JXRCHEQIxi9ReCa9BSchWQPZ";
// app.listen(3000, ()=>{
//     console.log("Server is started on port 3000");
// })

// const app = express();
const port = process.env.PORT || 3002;


app.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
})
