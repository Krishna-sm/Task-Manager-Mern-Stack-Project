import React from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  return (
    <>
    <ToastContainer/>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" >Task Manager
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="btn btn-outline-danger ms-1" to="/">All Task</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-success ms-1" aria-current="page" to="/add">Add Task</Link>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar