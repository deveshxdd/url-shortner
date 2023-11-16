const shortID = require("shortid")
const URL = require('../models/url')

// jo mongo me data aarha h usko ye lerha
async function handlenewurl(req,res){
    const body = req.body
    if(!body.url) return res.status(400).json({error: "url req"})
const shortid = shortID()
await URL.create({
    shortid: shortid,
    rediretid: body.url,
    visits: []

})
 res.render('file',{id:shortid})
}



module.exports = {
    handlenewurl
}
// we will use the package short id 
