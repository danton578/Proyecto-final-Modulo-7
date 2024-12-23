import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ProductosRelacionados from '../components/ProductosRelacionados'

const Product = () => {

  const {productId} = useParams()
  const {products, moneda, addToCart} = useContext(CartContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.imagen)
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  },[productId, products])

  //console.log(productData.categoria)

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*Products image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='w-full sm:w-[20%]'>
            <img  className='w-full h-auto' src={image} alt='' />
          </div>
          {/*Product Info */}
          <div className='flex-1'>
            <h1 className='font-medium text 2x1 mt-2'>{productData.nombre}</h1>
            <div className=' flex items-center gap-1 mt-2'>
              <FontAwesomeIcon icon={faStar} className='w-3.5' />
              <FontAwesomeIcon icon={faStar} className='w-3.5' />
              <FontAwesomeIcon icon={faStar} className='w-3.5' />
              <FontAwesomeIcon icon={faStar} className='w-3.5' />
              <FontAwesomeIcon icon={faStar} className='w-3.5' />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{moneda} {productData.precio}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.descripcion}</p>
            <button onClick={()=> addToCart(productData._id)} className='bg-green-600 text-white px-8 py-3 text-sm active:bg-gray-700'>Agregar al carrito</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>Productos nacionales e importados</p>
              <p>Con despacho a todo Chile</p>
              <p>pidelo hoy y lo puedes recibir mañana</p>
            </div>
          </div>
        </div>
      </div>
    {/*descripcion y revision */}
    <div className='mt-20'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Descripcion</b>
        <p className='border px-5 py-3 text-sm'>Reseñas (122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, autem veniam. Beatae quod nulla distinctio! Deleniti aperiam perspiciatis non sequi repellendus doloribus corporis, obcaecati sed aspernatur, doloremque, cumque impedit nulla?</p>
      </div>
    </div>
    {/*productos relacionados */}
    <ProductosRelacionados category ={productData.categoria} subCategory ={productData.subcategoria} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product