import React, {useState } from "react";
import axios from "axios";

const Del=()=> {
  const [id,setId]=useState('');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  
  const deleteData= async (id) =>{
    const res = await axios.delete(`${baseUrl}/${id}`)
    setId('')
  }

  return (
    <div className='w-4/5 mx-auto p-2 bg-red shadow-2xl rounded-lg'>
        <h1 className=' font-serif font-bold text-center text-2xl text-stone-500 my-5 '>Delete Transaction</h1>
        <div className='flex justify-center items-center w-4/5 mx-auto'>
          <div className="form-control w-full gap-6 mb-6">
            <label className="input-group input-group-vertical w-3/5 shadow-xl">
              <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>Id</span>
              <input type="text" placeholder="id" onChange={(e) => setId(e.target.value.trim())} value={id} required className="input input-bordered text-lg focus:outline-none" />
            </label>
          </div>
          <button onClick={() => deleteData(id)} className="btn btn-info place-self-center w-60 bg-teal-300 border-none text-xl text-white mb-8">Submit</button>
        </div>
    </div>
  )
}

export default Del