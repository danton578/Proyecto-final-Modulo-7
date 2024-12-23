import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/img'
import NewsletterBox from '../components/NewsletterBox'

const Contacto = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTA'} text2={'CTENOS'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.rufo_baner} className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nuestros datos</p>
          <p className='text-gray-500'> Calle rufito Santiago <br />Oficina 300</p>
          <p className='text-gray-500'> +569 9999 8888 <br />Email: contacto@rufito.cl</p> 
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contacto