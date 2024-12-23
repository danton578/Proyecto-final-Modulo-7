import React, { useState } from 'react'
import { backendURL } from '../App'
import axios from 'axios'
import {toast} from 'react-toastify'



const Login = ({setToken}) => {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) =>{
    try{
      e.preventDefault();
      console.log(backendURL + '/api/user/admin')
      const response = await axios.post(backendURL + '/api/user/admin', {email,password})
      if(response.data.success){
        console.log(response)
        setToken(response.data.token)
      }else{
        toast.error(response.data.message)
      }
      console.log(email,password)
      console.log(response)
    } catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-x-md'>
        <h1 className='text-2x1 font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type='email' placeholder='tu@correo.cl' required/>
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2' >Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}  className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type='password' placeholder='password' required/>
          </div>
          <button className='bg-green-600 text-white mt-2 w-full py-2 px-4 rounded-md' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login