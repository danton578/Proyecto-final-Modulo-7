import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Title from './Title'

const CartTotal = () => {

  const{moneda, cargo_envio, getCartAmount } = useContext(CartContext)

  return (
    <div className='w-full'>
      <div className='text-2x1'>
        <Title text1= {'TOTAL'} text2 = {' CARRITO'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{moneda} {getCartAmount()},00 </p>
        </div>
      </div>
      <hr />
      <div className='flex justify-between'>
        <p>Cargo por envio</p>
        <p>{moneda}{ cargo_envio},00</p>
      </div>
      <hr />
      <div className='flex justify-between' >
        <b>Total</b>
        <b>{moneda}{getCartAmount() === 0 ? 0 : getCartAmount() + cargo_envio},00</b>
      </div>
    </div>
  )
}

export default CartTotal