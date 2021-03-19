const mongodb = require('mongodb');
const dotenv=require('dotenv');
dotenv.config()
const express=require("express")
const Grid=require("gridfs-stream")
const fs=require('fs') // read,create, write,delete, rename
const mongoose = require('mongoose'); // needed for gfs

const app= express()

const uri = process.env.DATABASE_URL;
const dbName = 'Files'; 

var db = mongodb(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

// causes depreciation warning - that should be ignored
var database = mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

//Routes
const bucketRoute= require("./routes/bucketRoute");
const { fileLoader } = require('ejs');

app.use( "/api/buckets", bucketRoute )

// localhost:5000/buckets
app.get('/buckets', async(req,res)=>{
    try{
        // var db= new mongodb.Db(process.DATABASE_URL)
        var gfs = Grid(db,mongodb) // db is has the database_url
        // console.log(gfs)

       var gridFsBucket= new mongoose.mongo.GridFSBucket(
           mongoose.connection.db,
           { bucketName:'uploads2'}
       )

       console.log(gridFsBucket)
       gfs.collection('uploads2.files') // this is breaking it
       
        console.log("Success")


    }
    catch(err){
        console.log("There was an error with buckets")
    }
} )

const port=5000; 

app.listen(
        port, ()=>console.log(`On port ${port}` ) 
)