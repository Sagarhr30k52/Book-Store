import React from 'react'
import Home from './Home/Home'
import Course from './Components/Course'
import { Routes, Route, Navigate } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import {Toaster} from "react-hot-toast"
import { useAuth } from './Context/AuthProvider'
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
        {/* <Home></Home>
        <Course></Course> */}
        <div className=' bg-white text-black dark:bg-slate-900 dark:text-white'>
        <Routes>
         <Route path="/" element={<Home></Home>}></Route> 
          <Route path='/course' element={authUser?<Courses></Courses>:<Navigate to="/signup"></Navigate>}></Route>
          <Route path='/signup'element={<Signup></Signup>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Toaster></Toaster>
        </div>
        </>
        )
}

export default App