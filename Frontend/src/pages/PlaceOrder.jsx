import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/img'
import { CartContext } from '../context/CartContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  const {navigate} = useContext(CartContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -----------lado izquierdo------------------------ */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-x1 sm:text-2xl my-3'>
          <Title text1={'INFORMACION'} text2={' DE DESPACHO'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Primer Nombre'/>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Apellido Paterno'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='email' placeholder='Email '/>
        <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Direccion de entrega '/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Comuna'/>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Ciudad'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Region'/>
          <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Codigo Postal'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px3.5 w-full' type='text' placeholder='Telefono de contacto'/>
      </div>
      {/*------------lado derecho------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          {/* --------seccion de metodo de pago */}
          <Title text1={'METODO DE'} text2={' PAGO'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('mercadoPago')} className='flex items-center gap-3 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'mercadoPago' ? 'bg-green-400': ''}`}></p>
              <img className='h-5 mx-4' src={assets.mercado_pago} alt=''/>
            </div>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400': ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt=''/>
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-1 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400': ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CONTRA ENTREGA</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-green-600 text-white text-sm my-8 px-8 py-3' >CONFIRMAR PEDIDO</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder