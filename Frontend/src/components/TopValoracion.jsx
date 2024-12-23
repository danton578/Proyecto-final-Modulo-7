import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Title from './Title';
import ProductItem from './ProductItem';

const TopValoracion = () => {

  const {products} = useContext(CartContext);
  const [topValoracion,setTopValoracion] = useState([])

  useEffect(() => {
    const bestproduct = products.filter((item) => (item.top_five))
    setTopValoracion(bestproduct.slice(0,5))
  },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'TOP '} text2={'VALORACIONES'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Productos mas valorados por nuestros clientes
        </p>
      </div>

    {/* renderizar los productos */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        topValoracion.map((item,index) =>(
          <ProductItem key={index} id={item._id} imagen={item.imagen} nombre={item.nombre} precio={item.precio}/>
        ))
      }
    </div>


    </div>
  )
}

export default TopValoracion