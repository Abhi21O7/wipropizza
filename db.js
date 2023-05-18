const mongoose = require("mongoose");


var mongoURL= 'mongodb+srv://as1521:abhi1521@cluster0.04iaqfp.mongodb.net/pizza_store'

mongoose.connect(mongoURL, {UseUnifiedTopology:true , useNewUrlParser:true})
 var db=mongoose.connection
 db.on('connected' ,()=>{
    console.log('mongo db connection suceesful');
 })

 db.on('error', ()=>{
    console.log('mongodb was fialed');

 })
 module.exports=mongoose