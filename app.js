const express=require("express")
const path=require("path")
const crypto=require("crypto")
const mongoose=require("mongoose")
const multer=require("multer") // used for uploading files
const GridFsStorage=require("multer-gridfs-storage") // 
const Grid=require("gridfs-stream")
const methodOverride=require("method-override")
const bodyParser=require("body-parser")
const dotenv=require('dotenv')
dotenv.config()
const {MongoClient} = require('mongodb')

const app= express()

const client= new MongoClient(process.env.DATABASE_URL)


// async function run(){

//     try{
//         await client.connect();

//         await client.db("admin").command({ping:1})
//         console.log("Connected succesfully")
//     }
//     finally{
//         await client.close()
//     }
    
// }

// run().catch(console.dir)

// MiddleWare
app.use(bodyParser.json() )
app.use(methodOverride('_method') )

app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

const port=5000;

app.listen(
    port, ()=>console.log(`On ${port}` ) 
)