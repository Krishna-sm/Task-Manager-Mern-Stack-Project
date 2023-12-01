import React from 'react'
import { FcCheckmark ,FcCancel} from "react-icons/fc";
const Task = ({data,UpdateTaskHandler,DeleteTaskHandler,index}) => {
  return (
    <>
             <tr>
      <td>{index+1}</td>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.status?<FcCheckmark/>:<FcCancel/>}</td>
      <td className='d-flex gap-2 '>
                    <button  onClick={()=>DeleteTaskHandler(data._id)} className="btn btn-danger btn-sm">delete</button>
                  {!data.status&&  <button  onClick={()=>UpdateTaskHandler(data._id)} className="btn btn-warning btn-sm">update</button>}

      </td>
    </tr>
    </>
  )
}

export default Task