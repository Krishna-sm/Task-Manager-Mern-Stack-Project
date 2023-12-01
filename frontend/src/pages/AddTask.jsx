import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useAddTaskMutation } from '../redux/query/Task';
const AddTask = () => {


  const [AddTask,responseAddTask] = useAddTaskMutation()

    const validationSchema =  yup.object({
        title:yup.string().required("title is required"),
        description:yup.string().required("description is required")
    })

    const onSubmitHandler = async(e,{resetForm})=>{
         
            try {

              const {data,error} =await AddTask(e)
                if(error){
                  toast.error(error.data.msg)
                }
                toast.success("todo added")

                resetForm()
            } catch (error) {
                toast.error(error?.response?.data?.msg);
            }
    }

  return (
    <>
   <Formik validationSchema={validationSchema} initialValues={{title:"",description:""}} onSubmit={onSubmitHandler}>
   <Form className='container col-sm-10'>
  <div className="mb-3">
    <label  className="form-label">Task Title</label>
    <Field name="title" type="text" className="form-control"  placeholder="Add Task" />
    <ErrorMessage name="title" component="p" className="text-danger" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Task Description</label>
    <Field name="description" as="textarea" className="form-control" rows={8} placeholder="write some description...." />
    <ErrorMessage name="description" component="p" className="text-danger" />

  </div>
  <div className="mb-3">
    <button type='submit' disabled={responseAddTask.isLoading} className="btn btn-danger">{responseAddTask.isLoading?'Submit...':'Submit'}</button>
  </div>
</Form>
   </Formik>

    </>
  )
}

export default AddTask