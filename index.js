const express = require('express')
const app = express()
const urlroute = require('./routes/url')
const URL = require('./models/url')
const port = 8001
app.set("view engine","ejs")

app.get("/page",(req,res)=>{
    res.render('file')
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/url",urlroute)



app.get('/url/:shortid',async(req,res)=>{
const shortid = req.params.shortid
const entry = await URL.findOneAndUpdate({
    shortid
 // wo wali find krenge jiske andar ye short id hai
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

  