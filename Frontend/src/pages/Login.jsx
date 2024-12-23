import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text 3x1 font-medium'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Nombre' required/>}
      <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor pointer'>Olvido su password</p>
        {
          currentState === 'Login' 
          ? <p onClick={()=> setCurrentState('Inscribirse')} className='cursor pointer'>Crear Cuenta</p>
          : <p onClick={()=> setCurrentState('Login')} className='cursor pointer'>Login</p>
        }
      </div>
      <button className='bg-green-600 text-white text-sm my-8 px-8 py-3'>{currentState === 'Login' ? 'Ingresar' : 'Inscribirse'}</button>
    </form>
  )
}

export default Login