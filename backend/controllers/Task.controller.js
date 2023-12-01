const httpStatus = require("http-status")
const { TaskService } = require("../services")
const AddTask = async(req,res)=>{
        // service
        const res_obj = await TaskService.AddTask(req?.body)
        res.status(res_obj.code).send(res_obj)
}
const GetAllTask = async(req,res)=>{
     // service
     const res_obj = await TaskService.GetAllTask()
     res.status(res_obj.code).send(res_obj)
}


const UpdateTask = async(req,res)=>{
    // service
    const res_obj = await TaskService.UpdateTask(req?.params?.id)
    res.status(res_obj.code).send(res_obj)
}


const DeleteTask = async(req,res)=>{
    const res_obj = await TaskService.DeleteTask(req?.params?.id)
    res.status(res_obj.code).send(res_obj)
}

module.exports ={
    AddTask,
    GetAllTask,
    UpdateTask,
    DeleteTask
}