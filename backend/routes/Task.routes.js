const express = require("express")
const { TaskController } = require("../controllers")
const { TaskValidation } = require("../validations")
const ValidationMiddleware = require("../middlewares/Validation")
const router = express.Router()

router.route("/")
// GET route: /api/v1/task 
.get(TaskController.GetAllTask)
// POST route: /api/v1/task 
.post(TaskValidation.AddTask,ValidationMiddleware,TaskController.AddTask)


router.route("/:id")
// PUT route: /api/v1/task/{mongoid} 
.put(TaskValidation.MONGO_ID,ValidationMiddleware,TaskController.UpdateTask)
// DELETE route: /api/v1/task/{mongoid} 
.delete(TaskValidation.MONGO_ID,ValidationMiddleware,TaskController.DeleteTask)



module.exports  = router