import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'> Suscribase y no se pierda nuestras ofertas</p>
      <p className='text-gray-400 mt3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sit omnis architecto cumque similique suscipit ratione incidunt voluptas, nostrum et corrupti distinctio ipsum necessitatibus excepturi qui, cupiditate inventore ullam neque?
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='ingrese su email' required />
        <button type='submit' className='bg-green-600 text-white text-xd px-10 py-4'>Suscribase</button>
      </form>

    </div>
  )
}

export default NewsletterBox