import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import {toast} from "react-hot-toast"

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo ={
      fullname:data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("https://book-store-backend-sn6s.onrender.com/user/signup", userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Signup sucessful");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log("error", err);
        toast.error("error : "+ err.response.data.message);
      }
    })
  };

  return (
    <div className='flex h-screen items-center justify-center shadow-md'>
      <div className="w-[600px] border-[2px] p-5 rounded-md ">
  <div className="">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      
    <div className='flex justify-between'>
    <h3 className="font-bold text-lg">Sign Up</h3>
    <Link to={"/"}>
      <button className="btn btn-sm btn-circle btn-ghost">✕</button>
      </Link>
    </div>

   {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span><br />
        <input type="text" placeholder='Enter your full name'className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-black'{...register("fullname", { required: true })}/> <br />
 {errors.fullname && <span className='text-red-500 text-sm'>*Name required</span>}
      </div>

      {/* Email */}
      <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='Enter your email'className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-black'{...register("email", { required: true })}/> <br />
         {errors.email && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* Password */}
      <div className='mt-4 space-y-2'>
        <span>Passward</span> <br />
        <input type="password" placeholder='Enter your pass'className='w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-black'{...register("password", { required: true })}/> <br />
        {errors.password && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* button */}
      <div className='flex justify-between mt-4'>
        <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-900'>Sign up</button>
        <p>Already register? 
        <button>
          <span className='underline text-blue-500 cursor-pointer' onClick={() =>document.getElementById("my_modal_3").showModal()}>Login</span>
          </button>
          <Login></Login>
          </p>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
