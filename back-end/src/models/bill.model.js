const mongoose = require("mongoose")

const billSchema = mongoose.Schema({
    address:{required: true, type:String},
    name:{required: true, type:String},
    phone:{required: true, type:String},
    oderid:{required: true, type:String},
    title:{required: true, type:String},
    quantity:{required: true, type:Number},
    total:{required: true, type:Number},
    time:{required: true, type:String},
},{ versionKey: false })
module.exports = mongoose.model('bill', billSchema)