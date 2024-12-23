import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Title from './Title'
import ProductItem from './ProductItem'

const ProductosRelacionados = ({category, subCategory}) => {

  const {products} = useContext(CartContext)
  const [related, setRelated] = useState([])

  useEffect(()=>{
    if(products.length > 0){
      
      let productsCopy = products.slice()

      productsCopy = productsCopy.filter((item) => category === item.categoria)
      productsCopy = productsCopy.filter((item) => subCategory === item.subcategoria)

      setRelated(productsCopy.slice(0,5))
      
    }
  },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3x1 py-2'>
        <Title text1={'PRODUCTOS'} text2={' RELACIONADOS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item,index)=>(
            <ProductItem key={index} id={item._id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} />
          ))}
      </div>

    </div>
  )
}

export default ProductosRelacionados