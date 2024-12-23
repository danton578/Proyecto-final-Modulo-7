import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Title from '../components/Title'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartTotal from '../components/CartTotal'

const Carrito = () => {

  const {products, moneda, cartItems, updateCantidad, navigate } = useContext(CartContext)
  const [cartData, setCartData] = useState([])

  useEffect(()=>{
    
    const tempData = []
    for(const items in cartItems){
      if(cartItems[items] > 0){
        tempData.push({
          _id: items,
          cantidad: cartItems[items]
        })
      }
    }
    setCartData(tempData)
  },[cartItems])

  return (
    <div className='border-t pt-14'>

      <div className='text-2x1 mb-3'>
        <Title text1={'TU'} text2={' CARRITO'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product) => product._id === item._id )
            console.log(productData.nombre)
            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className=' flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.imagen} alt=''/>
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.nombre}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{moneda}{ productData.precio}</p>
                    </div>
                  </div>
                </div>
                <input onClick={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateCantidad(item._id,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.cantidad} />
                <FontAwesomeIcon onClick={()=>updateCantidad(item._id,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' icon={faTrash}/>
              </div>
            )

          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w.full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-green-600 text-white text-sm my-8 px-8 py-3'> PROCEDER AL PAGO</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrito