const httpStatus = require("http-status")

const {  validationResult } = require('express-validator');
const ValidationMiddleware = async(req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(httpStatus.BAD_REQUEST).send({msg:errors?.errors?.map((c)=>c.msg)[0],errors:errors?.errors?.map((c)=>c.msg)})
        return 
    }else{
        next()
    }

}

module.exports =ValidationMiddleware