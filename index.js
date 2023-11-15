const express = require('express')
const app = express()
const urlroute = require('./routes/url')
const URL = require('./models/url')
const port = 8001

app.use(express.json())

app.use("/url",urlroute)

app.get('/:shortid',async(req,res)=>{
const shortid = req.params.shortid
const entry = await URL.findOneAndUpdate({
    shortid
},{$push: {
    visits:{time:Date.now()} 
}

}
)
res.redirect(entry.rediretid)
})
app.listen(port,()=>{
    console.log(`server started st port ${port}`)
})