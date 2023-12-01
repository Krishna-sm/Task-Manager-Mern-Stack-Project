const mongoose  = require("mongoose")

const schema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is Required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    status:{
        type:Boolean,
        default:false
    }
},{
        timestamps:true
})

const model = mongoose.model("task",schema);

module.exports = model