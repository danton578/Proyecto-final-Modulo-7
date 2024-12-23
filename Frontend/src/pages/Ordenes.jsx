import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Title from '../components/Title'

const Ordenes = () => {

  const {products, moneda} = useContext(CartContext)

  return (

    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MIS'} text2={' PEDIDOS'}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item, index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.imagen} alt=''/>
                <div>
                  <p className='sm:text-base font-medium'>{item.nombre}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-600'>
                    <p className='text-lg'>{moneda} {item.precio}</p>
                    <p>Cantidad : 1</p>
                  </div>
                  <p className='mt-2'>FECHA: <span className='text-gray-400'>21,DICIEMBRE,2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Listo para despacho</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>SEGUIMIENTO PEDIDO</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Ordenes