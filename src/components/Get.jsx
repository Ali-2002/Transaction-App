import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react'

const Get= ()=> {
  const[from,setFrom]=useState('');
  const[to,setTo]=useState('');
  const[datas,setDatas]=useState('');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  
  const getData= async (from,to)=>{
    let response;
    if(from && to){
      response=await axios.get(`${baseUrl}?from=${from}&to=${to}`);
    }else if (from) {
      response = await axios.get(`${baseUrl}?from=${from}`);
    }else if (to) {
      response = await axios.get(`${baseUrl}?to=${to}`);
    }else {
      response = await axios.get(baseUrl);
    }
    setDatas(response.data);
    setFrom("");
    setTo("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=' w-4/5 mx-auto p-2 bg-red shadow-2xl rounded-lg flex flex-col'>
      <h1 className=' font-serif font-bold text-center text-2xl text-stone-500 my-5 '>Get Transactions</h1>
     <div className='flex flex-col'>
        <div className="form-control flex flex-row flex-wrap justify-center w-full gap-6 mb-6">
            <label className="input-group input-group-vertical w-2/5 shadow-xl">
              <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>From</span>
              <input type="text" placeholder="from" onChange={(e) => setFrom(e.target.value.trim())} value={from} className="input input-bordered text-lg focus:outline-none" />
            </label>
            <label className="input-group input-group-vertical w-2/5 shadow-xl">
              <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>To</span>
              <input type="text" placeholder="to" onChange={(e) => setTo(e.target.value.trim())} value={to} className="input input-bordered text-lg focus:outline-none" />
            </label>    
        </div>
        <button onClick={() => getData(from, to)} className="btn btn-info place-self-center w-60 bg-teal-300 border-none text-xl text-white">Submit</button>
     </div>
     <h2 className=" font-serif text-center text-2xl font-bold my-5 text-stone-500">Transactions</h2>
     <div className='overflow-x-auto'>
      <table className="table table-compact w-4/5 text-center mx-auto">
        <thead>
          <tr>
              <th>Id</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            {datas ? (
              datas.map((item) => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.amount}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={4} className='text-2xl text-red-600 text-center'>Try to loading...</td></tr>
            )}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default Get