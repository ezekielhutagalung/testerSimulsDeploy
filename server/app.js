if(process.env.NODE_ENV === "development"){
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const router = require('./route')
const errorhandler = require('./midlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/', router)

app.use(errorhandler)

app.listen(port, ()=>{
    console.log(`this app is listening on ${port}`)
})