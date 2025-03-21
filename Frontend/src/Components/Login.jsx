import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register,
     handleSubmit,
     formState: { errors } } = useForm();
  
     const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">
      <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    <h3 className="font-bold text-lg">Login</h3>
      <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='Enter your email'className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("email", { required: true })}/> <br />
        {errors.email && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* Password */}
      <div className='mt-4 space-y-2'>
        <span>Passward</span><br />
        <input type="password" placeholder='Enter your pass'className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/> <br />
        {errors.password && <span className='text-red-500 text-sm'>*This field is required</span>}
      </div>

      {/* button */}
      <div className='flex justify-between mt-4'>
        <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-900'>Login</button>
        <p>Not register? 
          <Link to={"/signup"}>
          <span className='underline text-blue-500 cursor-pointer'>Signup</span>
          </Link>
          </p>
      </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login