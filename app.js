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
const pdfRoute=require("./routes/pdf")


const conn = mongoose.createConnection(process.env.DATABASE_URL)

let gfs

// this code below is depreciated
conn.once('open', ()=>{

  // Init Stream
  gfs=Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads2')

})

app.get('/files', async (req,res)=>{
  // var mFiles;

  // console.log(gfs)
  
  gfs.files.find().toArray(
    (err,files)=>{
      // check if files
      if(!files || files.length===0){
        return res.send("No files detected")
        // console.log("no Files")
      }else {
        // return res.json(files)
        console.log("we Found files")
        // return files;
        // console.log(files)
        res.render('Pdfs/files',{
          mfiles:files
        })// end or render
      }// end of else
    } // end of err,files function 

  )// end of array
 
}) // end of get function

app.get('/files/:filename', (req,res)=>{
  try{
    gfs.files.findOne({filename:req.params.filename}, (err,file)=>{
      if( !file|| file.length==0 ){
        return res.send("No File Detected")
      }

      if(file.contentType==='image/jpeg' 
      || file.contentType==='img/png' || file.contentType==='image/png'
      || file.contentType==='application/pdf'
      ){
        // read output to browser
        // create readStream
        const readstream= gfs.createReadStream(file.filename)
        readstream.pipe(res)
      }else {
        res.send("Not an image")
      }
    })

  }catch(err){
    console.log("there was an error in finding the object")
  }
})

const storage = new GridFsStorage({
    url: process.env.DATABASE_URL,
    
    file: (req, file) => {
      return new Promise((resolve, reject) => { // returns a promise
        crypto.randomBytes(16, (err, buf) => { // method to generate names
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname); // fileName with extension
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads2' // name of the collection
          };
          resolve(fileInfo);
        });
      });
    }
});

// middleware used below
const upload = multer({ storage }); // we pass it to this storage engine

app.post('/new', upload.single('uiFile'), (req,res,next)=>{
    console.log("Sucesss")
    res.json({ file:req.uiFile })
    console.log("Sucesss2")
})



// MiddleWare
app.use(bodyParser.json() )
app.use(methodOverride('_method') )
app.use("/api/pdfs", pdfRoute)

app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

const port=5000;

app.listen(
    port, ()=>console.log(`On port ${port}` ) 
)