const router=require("express").Router()

// api/buckets
router.get("/", async(req,res)=>{
    try{
        res.send("Were in api/buckets")
    }catch(err){
        console.log("There was an error in api/buckets")
    }
})

module.exports=router