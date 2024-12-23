import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,imagen,nombre,precio}) => {
  
  const {moneda} = useContext(CartContext);
  
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={imagen} alt=''/>
      </div>
      <p className=' pt-3 pb-1 text-sm'>{nombre}</p>
      <p className=' text sm font-medium'>{moneda}{precio}</p>
    </Link>
  )
}
export default ProductItem