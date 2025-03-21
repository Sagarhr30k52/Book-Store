import React from 'react'
import Home from './Home/Home'
import Course from './Components/Course'
import { Routes, Route } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
function App() {
  return (
    <>
        {/* <Home></Home>
        <Course></Course> */}
        <div className='  dark:bg-slate-900 dark:text-white'>
        <Routes>
         <Route path="/" element={<Home></Home>}></Route> 
          <Route path='/course' element={<Courses></Courses>}></Route>
          <Route path='/signup'element={<Signup></Signup>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        </div>
        </>
        )
}

export default App