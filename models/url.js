const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/urlshortner").then(()=>{
    console.log("done")
}).catch(()=>{
    console.log("not connected")
})

const urlschema = new mongoose.Schema({
    shortid:{
        type: String,
        required: true,
        unique: true
    },
    rediretid:{
        type: String,
        required: true,
        
    },
    visits:[{time: {type:Number}}]

    
},{timestamps: true})  //  ya bataega koi v entry kab hua tha

const URL = mongoose.model("url",urlschema)

module.exports = URL   // ISSE HUM EXPORT KRTE HAI