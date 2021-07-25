const express = require("express");
const router = express.Router();



const Bill = require("../models/bill.model")


router.post('/detail', async function(req, res){

    const newbill = new Bill();
    newbill.address = req.body.address 
    newbill.name = req.body.name 
    newbill.phone = req.body.phone 
    newbill.oderid = req.body.oderid
    newbill.title = req.body.title
    newbill.quantity = req.body.quantity
    newbill.total=req.body.total
    newbill.time=req.body.time
    try{
        const Bill = await newbill.save()
        res.send(Bill);
        
    }catch(err){
        res.status(400)
        res.send(err);
        console.log(err)
    }
})

module.exports = router;