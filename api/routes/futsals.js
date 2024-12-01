import express from "express";
import Futsal from "./models/Futsal.js"
const router = express.Router();

// create

router.post("/", async (req, res)=>{
    
    const newFutsal = new Futsal(req.body)


    try{

        const savedFutsal = await newFutsal.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }



    

})

//update

//delete

//get

//get all




export default router