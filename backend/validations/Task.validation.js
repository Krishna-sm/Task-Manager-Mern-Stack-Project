const { body,param } = require('express-validator');

const AddTask = [
    body("title").isString().withMessage("Title must be a String").notEmpty().withMessage("Title is Required"),
    body("description").isString().withMessage("Description must be a String").notEmpty().withMessage("Description is Required"),
]


const MONGO_ID = [
    param("id").isString().withMessage("ID must be a String").isMongoId().withMessage("enter valid mongoid")
]



module.exports = {
    AddTask,
    MONGO_ID
}