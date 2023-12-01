import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import AddTask from './pages/AddTask'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
            <div style={{minHeight:"82vh"}} className=" d-flex justify-content-center align-items-center">
            <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddTask/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
            </div>
    </BrowserRouter>
  )
}

export default App