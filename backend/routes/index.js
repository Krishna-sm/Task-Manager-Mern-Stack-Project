const express = require("express")
const router = express.Router()
// 
const routes=[
    {
        path:"/task",
        route:require("./Task.routes")
    }
]

routes.forEach((cur,i)=>{
    router.use(cur.path,cur.route)
})



module.exports  = router