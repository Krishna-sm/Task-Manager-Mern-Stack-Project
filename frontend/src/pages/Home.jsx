import React, { useEffect } from 'react'
import Task from '../Components/Task'
import { useGetAllTaskQuery, useUpdateTaskMutation,useDeleteTaskMutation } from '../redux/query/Task'
import { toast } from 'react-toastify'
import Loader from '../Components/Loader'

const Home = () => {

    const {data,isLoading,isError,refetch} = useGetAllTaskQuery()

    const [updateTask,_updateTaskResponse] = useUpdateTaskMutation();
    const [deleteTask,_deleteTaskResponse] = useDeleteTaskMutation();


    const UpdateTaskHandler = async(id)=>{
        try {
            const {data,error} = await updateTask(id)

            // console.log({data,error});
            if(error){
                toast.error(error.data?.msg)
                return
            }

           await refetch()
            toast.success("todo updated")

        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    
    const DeleteTaskHandler = async(id)=>{
        try {
            const {data,error} = await deleteTask(id)

            // console.log({data,error});
            if(error){
                toast.error(error.data?.msg)
                return
            }

           await refetch()
            toast.success("todo Deleted")

        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    useEffect(()=>{
        refetch()
    },[])

            // console.log({data});
    if(isLoading){
        return <Loader/>
    }
    if(isError){
        return <div>error</div>
    }

  return (
    <>
         <div className="container mx-5">
         <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   {
   data && data.AllTask &&data.AllTask.length>0? data.AllTask.map((cur,i)=>{
        return <Task data={cur} index={i} key={i} UpdateTaskHandler={UpdateTaskHandler}   DeleteTaskHandler={DeleteTaskHandler}/>
    }):<>
             <tr>
      <td colSpan={4}>Not Task Have</td>
     
    </tr>
    </>
   }
  </tbody>
</table>
         </div>

    </>
  )
}

export default Home