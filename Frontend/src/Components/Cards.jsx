import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl 
     hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
        <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-white border-3 border-black dark:bg-slate-900 border-1 border-white">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" text-black badge badge-outline cursor-pointer  rounded-full hover:bg-pink-500  duration-200 hover:px-3.5 dark:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards