import React, {  useState } from "react";
import axios from "axios";

const Put=()=> {
  const [id,setId]=useState('');
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState('');
  const [notification, setNotification] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const uptudateData= async (id,from,to,amount)=>{
    const response= await axios
    .put(`${baseUrl}/${id}`, {
      from: from,
      to: to,
      amount: amount,
    })
    .catch(() => {
      setNotification("Something is wrong!");
    })
    if (response.status === 201 || response.status===200) {
      setNotification("Uptudate is successful");
    }
    setId('')
    setFrom("");
    setTo("");
    setAmount('');
  }

  return (
    <div className='w-4/5 mx-auto p-2 bg-red shadow-2xl rounded-lg flex flex-col'>
        <h1 className=' font-serif font-bold text-center text-2xl text-stone-500 my-5 '>Uptudate Transactions</h1>
        <div className='flex flex-col'>
          <div className="form-control flex flex-row flex-wrap justify-center w-full gap-6 mb-6">
                <label className="input-group input-group-vertical w-1/5 shadow-xl">
                  <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>Id</span>
                  <input type="text" placeholder="id" onChange={(e) => setId(e.target.value.trim())} value={id} required className="input input-bordered text-lg focus:outline-none" />
                </label>
                <label className="input-group input-group-vertical w-1/5 shadow-xl">
                  <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>From</span>
                  <input type="text" placeholder="from" onChange={(e) => setFrom(e.target.value.trim())} value={from} required className="input input-bordered text-lg focus:outline-none" />
                </label>
                <label className="input-group input-group-vertical w-1/5 shadow-xl">
                  <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>To</span>
                  <input type="text" placeholder="to" onChange={(e) => setTo(e.target.value.trim())} value={to} required className="input input-bordered text-lg focus:outline-none" />
                </label>    
                <label className="input-group input-group-vertical w-1/5 shadow-xl">
                  <span className='bg-emerald-300 text-lg font-serif text-white text-center cursor-pointer'>Amount</span>
                  <input type="text" placeholder="amount" onChange={(e) => setAmount(e.target.value.trim())} value={amount} required className="input input-bordered text-lg focus:outline-none" />
                </label>    
            </div>
            <button onClick={() => uptudateData(id,from,to,amount)} className="btn btn-info place-self-center w-60 bg-teal-300 border-none text-xl text-white">Submit</button>
        </div>
    </div>
  )
}

export default Put