import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
function Contact() {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);

  return (
    <>
{/* Navbar */}
    <Navbar></Navbar>

    <div className='flex h-screen items-center justify-center shadow-md'>
      <div className="w-[400px] border-[2px] p-5 rounded-md ">
  <div className="">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      
    <div className='flex justify-between'>
    <h3 className="font-bold text-3xl">Contact Us</h3>
    </div>

   {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span><br />
        <input type="text" placeholder='Enter your full name'className='w-80 px-3 py-1 border rounded-md outline-none'{...register("name", { required: true })}/> <br />
 {errors.name && <span className='text-red-500 text-sm'>*Name required</span>}
      </div>

      {/* Email */}
      <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='Enter your email'className='w-80 px-3 py-1 border rounded-md outline-none'{...register("email", { required: true })}/> <br />
         {errors.email && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* text area */}
      <div className='mt-4 space-y-2'>
      <span>Message</span> <br />
<textarea
  placeholder="Enter your message"
  className="h-20 w-80 px-3 py-1 border rounded-md outline-none resize-none overflow-y-auto"
  {...register("message", { required: true })}
/>
 <br />
        {errors.password && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* button */}
      <div className='flex justify-between mt-10'>
        <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-900'>Contact Us</button>
        
      </div>
    </form>
  </div>
</div>
    </div>
  </>
)
}

export default Contact