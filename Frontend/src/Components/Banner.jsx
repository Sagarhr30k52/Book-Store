import React from 'react'
import banner from "../../public/Banner.png"
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-6'>
        <h1 className='text-4xl font-bold'>Hello, Welcome to learn something <span className='text-pink-500'>new everyday!!!</span>
            </h1>
            <div className='text-xl'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus natus fugiat tempora quae consequuntur voluptatum quos nesciunt unde distinctio nostrum, commodi obcaecati aut provident soluta omnis! Vitae, nulla necessitatibus?
            </p>
            </div>
            <label className="input validator bg-white border-1 border-black dark">
  <svg className="h-[1em] opacity-50 stroke-current text-gray-700 dark:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
  <input className='' type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
</label>
        
        </div>
        <button class="btn btn-secondary mt-3">Secondary</button>
            </div>

        <div className='order-1 w-full md:w-1/2'>
        <img src={banner} className='w-92' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner