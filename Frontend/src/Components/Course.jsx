import React, { useEffect, useState } from 'react'
// import List from "../../public/List.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"
import axios from "axios"
function Course() {
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook = async() =>{
            try{
               const res = await axios.get("http://localhost:4000/book");
                // console.log(res.data);
                setBook(res.data);
            }catch(err){
                console.log("error",err);
            }
        }
        getBook();
    },[])
    // console.log(List);
  return (
    < >
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We are delight to have to <span className='text-pink-500'>here!!!</span> </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus debitis perspiciatis quibusdam amet delectus. Autem dolores vero id fugiat quaerat. Doloribus qui, perferendis a itaque sed, mollitia eum repellat ducimus magni, explicabo similique ex veniam veritatis repudiandae consequatur? Veritatis?
            </p>
            <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>{
            book.map((item) =>{
                return <Cards item={item} key={item.id}></Cards>
            } )
            }
        </div>

    </div>
    </>
  )
}

export default Course