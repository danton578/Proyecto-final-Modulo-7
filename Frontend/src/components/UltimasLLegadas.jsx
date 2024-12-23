import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Title from './Title';
import ProductItem from './ProductItem';

const UltimasLLegadas = () => {

  const { products } = useContext(CartContext);
  const [ultimosProductos, setUltimosProductos] = useState([])

  useEffect(() => {
    setUltimosProductos(products.slice(0,10))
  },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'ULTIMAS'} text2={'LLEGADAS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Ultimas novedades para tu mascota
        </p>
      </div>

    {/* renderizar los productos */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        ultimosProductos.map((item,index) =>(
          <ProductItem key={index} id={item._id} imagen={item.imagen} nombre={item.nombre} precio={item.precio}/>
        ))
      }
    </div>

    </div>

  )
}

export default UltimasLLegadas