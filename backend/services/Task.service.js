const httpStatus = require("http-status")
const { TaskModel } = require("../models")
const AddTask = async(body)=>{
    
   try {
    const {title,description} = body

    await TaskModel.create({
        title,
        description
    })
    return {
        msg:"Task Created",
        code: httpStatus.CREATED,
        success:true
    }

   } catch (error) {
            return {
                msg:error.message,
                code: httpStatus.INTERNAL_SERVER_ERROR,
                success:false
            }
   }

}

const GetAllTask = async()=>{
    
    try {
 
    const AllTask=  await TaskModel.find({})
     return {
         msg:"Task Fetched",
         code: httpStatus.OK,
         success:true,
         AllTask,
         total:AllTask.length,
     }
 
    } catch (error) {
             return {
                 msg:error.message,
                 code: httpStatus.INTERNAL_SERVER_ERROR,
                 success:false,
                 AllTask:[],
                 total:0
             }
    }
 
 }



 const UpdateTask = async(id)=>{
    
    try {
        const existTask = await TaskModel.findByIdAndUpdate(id,{
            $set:{
                status:true
            }
        });
        if(!existTask){
            return {
                msg:"Task Not Found",
                code: httpStatus.NOT_FOUND,
                success:false
            }
        }

        if(existTask.status){
            return {
                msg:"Task Already Completed",
                code: httpStatus.NOT_FOUND,
                success:false
            }
        }

        return {
            msg:"Task Updated",
            code: httpStatus.OK,
            success:true
        }

 
   
 
    } catch (error) {
             return {
                 msg:error.message,
                 code: httpStatus.INTERNAL_SERVER_ERROR,
                 success:false
             }
    }
 
 }


 const DeleteTask = async(id)=>{
    
    try {
        const existTask = await TaskModel.findByIdAndDelete(id);
        if(!existTask){
            return {
                msg:"Task Not Found",
                code: httpStatus.NOT_FOUND,
                success:false
            }
        }


        return {
            msg:"Task Deleted",
            code: httpStatus.OK,
            success:true
        }

 
   
 
    } catch (error) {
             return {
                 msg:error.message,
                 code: httpStatus.INTERNAL_SERVER_ERROR,
                 success:false
             }
    }
 
 }



module.exports = {AddTask,GetAllTask,UpdateTask,DeleteTask}