import React from 'react'
import { NavLink} from "react-router-dom";
const Pages= () => {

  return (
    <div className=' mb-6 mt-6 mx-auto w-full max-w-full flex justify-center '>
        <nav className=' bg-emerald-300 flex justify-center w-auto gap-4 rounded-md text-white'>
          <NavLink to='/' className={`tab tab-md rounded-md  text-zinc-200 text-xl transition-all duration-200 ${({isActive})=> isActive && 'tab-active' }`} style={({isActive})=>({backgroundColor: isActive ? 'teal' : ''})}>Get</NavLink>
          <NavLink to='/postTransaction' className={`tab tab-md rounded-md text-zinc-200 text-xl transition-all duration-200 ${({isActive})=> isActive && 'tab-active' }`} style={({isActive})=>({backgroundColor: isActive ? 'teal' : ''})}>Post</NavLink>
          <NavLink to='/updateTransaction' className={`tab tab-md rounded-md text-zinc-200 text-xl transition-all duration-200 ${({isActive})=> isActive && 'tab-active' }`} style={({isActive})=>({backgroundColor: isActive ? 'teal' : ''})}>Update</NavLink>
          <NavLink to='/deleteTransaction' className={`tab tab-md rounded-md text-zinc-200 text-xl transition-all duration-200 ${({isActive})=> isActive && 'tab-active' }`} style={({isActive})=>({backgroundColor: isActive ? 'teal' : ''})}>Delete</NavLink>
        </nav>
    </div>
  )
  
}
export default Pages