const router= require("express").Router();
const mongo=require('mongodb')
const Grid=require("gridfs-stream");
const mongoose=require("mongoose")

// /api/pdfs/files
router.get("/", async(req,res)=>{
    try{
        // res.send("Were in GET pdfs page")
        res.render('Pdfs/index')
    }catch(err){
        res.json("Error in rendering PDFS")
    }
})

router.get("/files", async(req,res)=>{
    try{
        // res.send("were in GET /pdfs/files")
        // const conn= Mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})

        // var gfs= Grid( conn.db, Mongoose.mongo )
        
        let gfs
        const conn = mongoose.createConnection(process.env.DATABASE_URL)
        conn.once('open', ()=>{

            // Init Stream
            gfs=Grid(conn.db, mongoose.mongo)
            gfs.collection('uploads2')
          
          })

        //   gfs.files.find()

        // gfs.files.find().toArray(
        //     (err,files)=>{
        //         if(!files || files.length===0){
        //             return res.send("No files detected")
        //           }else {
        //             return res.json(files)
        //           }
        //     }
        // )

        res.render('Pdfs/files')
        // res.send(files)
    } catch(err){
        res.json("error in gathering files")
    }
})

module.exports=router