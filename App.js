const next = require('next')
const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
const mongodb = require('./mongo');
const dev = false
const server = next({ dev })
const handle = server.getRequestHandler()
dotenv.config()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)
server.prepare()
.then(() => {
app.get('*',(req,res) => {
    return handle(req,res)
})
mongodb.connect( err => {
    if(err)
    throw error

    app.listen(process.env.PORT,() => console.log(dev))
} )
})
.catch(er => {
    console.error(er.stack)
})



module.exports = app

