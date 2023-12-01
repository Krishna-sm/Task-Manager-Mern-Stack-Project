const express = require('express')
const app = express()
const morgan = require("morgan");
const httpStatus = require("http-status")
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())
app.use(morgan("dev"))



// routes
app.use("/api/v1",require("./routes"))


// 404 route
app.use((req,res)=>{
    res.status(httpStatus.NOT_FOUND).send({
        msg:"Page not found"
    })
})

module.exports = {
    app
}
